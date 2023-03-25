import React from "react";
import Card from "../components/Cards/CardLP";
import "./marketplace.css";
import { Polybase } from '@polybase/client';
import {ethers} from 'ethers';


const db = new Polybase({
  defaultNamespace:
  'pk/0x47a23b1ec444e273743d6eff0b5f8af7f86be84af854baa085f8b398f2f6054744da8b74d9394644e428e6f527ff53a2b3039bdf1b3ba8ae60dd4df6eb1f7277/Test'
});


const MarketPlace =  () => {

  let CollectionData; 
  
  const getData = async () => {
    const res = await db.collection('SellerData').where("onSale","==",true).get();
    CollectionData = res.data;
    console.log(CollectionData)
  }

  const triggerSell = async(FileName) =>{
    const res = await db.collection('SellerData').where("id","==",FileName).get();
    const address = res.data[0].data.Address;
    const price = res.data[0].data.Price;
    await payWithMetamask(address, String(price));

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
      provider.once(transaction.hash, transaction => {
        //redirect
      })
    })
  }

return (
    <div className="marketplace_container">
      <Card
        filename="Webdesign"
        description="A wonderful modern website using nodeJs and react  "
        price="22"
        carSize="23"
      ></Card>
      <Card
        filename="Webdesign"
        description="A wonderful modern website using nodeJs and react  "
        price="22"
        carSize="23"
      ></Card>
      <Card
        filename="Webdesign"
        description="A wonderful modern website using nodeJs and react  "
        price="22"
        carSize="23"
      ></Card>
      <Card
        filename="Webdesign"
        description="A wonderful modern website using nodeJs and react  "
        price="22"
        carSize="23"
      ></Card>
      <Card
        filename="Webdesign"
        description="A wonderful modern website using nodeJs and react  "
        price="22"
        carSize="23"
      ></Card>
    </div>
  );}

export default MarketPlace;
