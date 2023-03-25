import { useState } from 'react'
import { Web3Storage } from 'web3.storage'
import { Polybase } from '@polybase/client'
import { ethers } from 'ethers'
import contract from '../contracts/DealClient.json'
import './selldata.css'
const CID = require('cids')

// TODO : change to SellerData before deployment
const db = new Polybase({
  defaultNamespace:
    'pk/0x47a23b1ec444e273743d6eff0b5f8af7f86be84af854baa085f8b398f2f6054744da8b74d9394644e428e6f527ff53a2b3039bdf1b3ba8ae60dd4df6eb1f7277/Test'
})

async function sendData (Title, description, FileSize, SalePrice, cid) {
  const { ethereum } = window
  if (ethereum) {
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner()
    await db
      .collection('SellerData')
      .create([Title, description, FileSize, signer.address, SalePrice, cid])
  }
}

const SellData = () => {
  const [enteredTitle, setEnteredTitle] = useState(' ')
  const [enteredAmount, setEnteredAmount] = useState(' ')
  const [enteredFile, setEnteredFile] = useState('')
  const [enteredDescription, setEnteredDescription] = useState(' ')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingContent, setLC] = useState('')
  const [comp, setComp] = useState(true)

  const client = new Web3Storage({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEU0NjhDOTU2ZTM4MjQyMDlhMzdCNkVlZDZkQjExMTE4YzE3ZGQ0MzMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzk1MDU0NDc0NjAsIm5hbWUiOiJ1cGxvYWQifQ.XH3sRMYQyZMrJKoTba4xxJI5K-8zJvkCAuqRWuGtOBg'
  })
  const [fileSize, setFileSize] = useState(0)

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value)
  }
  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value)
  }
  const fileChangeHandler = event => {
    setEnteredFile(event.target.value)
    if (event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }
  const desChangeHandler = event => {
    setEnteredDescription(event.target.value)
  }

  const submitHandler = async event => {
    event.preventDefault()
    try{
    // *TODO* loading (uploading)

    // -- uploading and converting file in .car format
    setLoading(true)
    setLC('Uploading File ....')
    const res = await uploadFile()

    // -- req 10 FIL tokens for storage deals and send deal
    await payWithMetamask('0x72d2F62A93305752CC57D48Ea217CA687EA43dc0', '10')

    // *TODO* loading (creating deal on FVM)

    // -- store details on polybase for marketplace reference
    await sendData(enteredTitle, enteredDescription, res.fileSize, 50, res.cid)

    setEnteredAmount(' ')
    setEnteredFile('')
    setEnteredTitle(' ')
    setEnteredDescription(' ')
    }catch(error){
      console.log(error)
      setComp(true);
      window.alert("Error !!! ");
    }
  }

  //needed params
  let cid
  let carLink

  const uploadFile = async () => {
    // *TODO* is uploading == true
    setComp(false)
    const fileToUpload = new File([file], file.name.split(' ').join(''), {
      type: file.type
    })
    cid = await client.put([fileToUpload], {
      name: file.name
    })
    setFileSize(fileToUpload.size)
    carLink = `https://ipfs.io/ipfs/${cid}?format=car`

    // *TODO* is uploading == false
    return { cid: cid, fileSize: fileSize, imgUrl: carLink }
  }

  const contractAddress = '0xd71260EB8e4BD451757e43C999e46e21CDD98c9E'
  const contractABI = contract.abi
  let dealClient

  const dataDeal = async () => {
    try {
      setLC('Creating Data Deal On FVM .....')
      console.log('deal initiated ....')
      const _CID = new CID(cid) //careful - different data type of (cid), CID is from library , and _CID is the one here
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = await provider.getSigner()
        dealClient = new ethers.Contract(contractAddress, contractABI, signer)
        const extraParamsV1 = [
          carLink,
          10000, //for @abhay - change this in future
          false,
          false
        ]
        const DealRequestStruct = [
          _CID.bytes,
          fileSize,
          false,
          cid,
          184200, //startEpoch - be sure to check while final deploy
          200000, // end epoch - '👆'
          0,
          0,
          0,
          1,
          extraParamsV1
        ]
        console.log(dealClient.interface)
        const transaction = await dealClient.makeDealProposal(DealRequestStruct)
        console.log('Proposing deal...')
        const receipt = await transaction.wait()
        console.log(receipt)

        dealClient.on('DealProposalCreate', (id, size, verified, price) => {
          console.log(id, size, verified, price)
        })

        console.log('Deal proposed! CID: ' + _CID)
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
      return
    }
  }

  const payWithMetamask = async (receiver, strEther) => {
    setLC('Waiting for transaction to complete .....')
    let ethereum = window.ethereum

    // Request account access if needed
    await ethereum.enable()

    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner()

    console.log(
      `payWithMetamask(receiver=${receiver}, sender=${signer}, strEther=${strEther})`
    )

    const tx = {
      from: signer.address,
      to: receiver,
      value: ethers.parseEther(strEther),
      nonce: await provider.getTransactionCount(signer.address, 'latest')
    }

    const transaction = await signer.sendTransaction(tx).then(transaction => {
      provider.once(transaction.hash, transaction => {
        dataDeal()
      })
    })
  }
  return (
    <div className='selldata_container'>
    {
    loading && 
    <><div class="spinner-box">
    <div class="pulse-container">  
    <div class="pulse-bubble pulse-bubble-1"></div>
    <div class="pulse-bubble pulse-bubble-2"></div>
    <div class="pulse-bubble pulse-bubble-3"></div>
    </div>
    </div>
    <h1>{loadingContent}</h1>
    </>
    }
      {comp && <form onSubmit={submitHandler}>
        <div className='formSubmission'>
          <div className='form_comp'>
            <label>Enter file name</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
              placeholder='Enter value'
            ></input>
          </div>
          <div className='form_comp'>
            <label>Decription </label>
            <textarea
              rows='3'
              cols='20'
              value={enteredDescription}
              onChange={desChangeHandler}
            ></textarea>
          </div>
          <div className='form_comp'>
            <label>Enter price(fil)</label>
            <input
              type='number'
              min='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
              placeholder='Enter value'
            ></input>
          </div>

          <div className='form_comp'>
            <label>Upload file</label>
            <input
              type='file'
              value={enteredFile}
              onChange={fileChangeHandler}
            ></input>
          </div>
        </div>
        <div className='button'>
          <button type='submit'>Upload</button>
        </div>
      </form>}
    </div>
  )
}

export default SellData
