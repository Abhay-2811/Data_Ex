import React,{useState} from "react";
import "./cardLP.css";
// import PeopleIcon from "@material-ui/icons"
import filcoin from '../../images/filecoin.svg';
import { Polybase } from '@polybase/client';
import {ethers} from 'ethers';



const CardLP = (props) => {

  const [loader, setloader] = useState(false);
  const [showPage, setSP] = useState(true);


  const db = new Polybase({
    defaultNamespace:
    'pk/0x47a23b1ec444e273743d6eff0b5f8af7f86be84af854baa085f8b398f2f6054744da8b74d9394644e428e6f527ff53a2b3039bdf1b3ba8ae60dd4df6eb1f7277/Data-Ex'
  });

  const triggerSell = async(FileName) =>{
  try {
      const res = await db.collection('SellerData').where("id","==",FileName).get();
      const address = res.data[0].data.Address;
      const price = res.data[0].data.Price;
      console.log(address);
      console.log(price);
      await payWithMetamask(address, String(price));
    }
   catch (error) {
    console.log(error);
  }
}

  const payWithMetamask = async (receiver, strEther) => {

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
      provider.once(transaction.hash, async (transaction) => {
        // mark as sold
        await db.collection('SellerData').record(props.filename).call("sold",[db.collection('SellerData').record(props.filename)])
        
        //redirect
      })
    })

    
  }


  return (
    <div className="cards">
      <div className="leftSection">
        <h1 className="title">{props.filename}</h1>
        <p className="dec">{props.description}</p>
        <div className="group">
          <label>Seller Address :</label>
          <p> <b>{props.Address} </b></p>
        </div>
      </div>
      <div className="middleSection">
        <div className="group">
          <label>Price :</label>
          <h1>{props.price}</h1>
          <img src={filcoin}></img>
        </div>
      </div>
      <div className="rightSection">
        <a onClick={()=>triggerSell(props.filename)}>Buy now</a>
      </div>
    </div>
  );
};

export default CardLP;
