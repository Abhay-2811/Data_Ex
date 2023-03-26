import React, { useEffect, useState } from "react";
import Card from "../components/Cards/CardLP";
import "./marketplace.css";
import { Polybase } from '@polybase/client'
import {ethers} from 'ethers'


const db = new Polybase({
  defaultNamespace:
  'pk/0x47a23b1ec444e273743d6eff0b5f8af7f86be84af854baa085f8b398f2f6054744da8b74d9394644e428e6f527ff53a2b3039bdf1b3ba8ae60dd4df6eb1f7277/Data-Ex'
});


const MarketPlace =  () => {

  const [CD, setCD] = useState({});

  useEffect(()=>{
    const getData = async () => {
      const res = await db.collection('SellerData').where("onSale","==",true).get();
      console.log(res);
      setCD(res.data);
    }
    getData();
  },[])

return (
   <div className="marketplace_container">
      <Card
        filename={CD[0]?.data.id}
        description={CD[0]?.data.Description}
        price={CD[0]?.data.Price}
        Address={CD[0]?.data.Address}
      ></Card>
      <Card
        filename={CD[1]?.data.id}
        description={CD[1]?.data.Description}
        price={CD[1]?.data.Price}
        Address={CD[1]?.data.Address}
      ></Card>
      <Card
        filename={CD[2]?.data.id}
        description={CD[2]?.data.Description}
        price={CD[2]?.data.Price}
        Address={CD[2]?.data.Address}
      ></Card>
      <Card
        filename={CD[3]?.data.id}
        description={CD[3]?.data.Description}
        price={CD[3]?.data.Price}
        Address={CD[3]?.data.Address}
      ></Card>
      <Card
        filename={CD[4]?.data.id}
        description={CD[4]?.data.Description}
        price={CD[4]?.data.Price}
        Address={CD[4]?.data.Address}
      ></Card>
    </div>
    
  );}

export default MarketPlace;
