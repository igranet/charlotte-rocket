import React, { useEffect, useState } from "react";
import {BsCartPlus} from 'react-icons/bs'
import {BiRocket} from 'react-icons/bi'
const App=()=> {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [total, setTotal] = useState(0)
 
  useEffect(()=>{
    console.log(cart)
    let t = 0
   for(let i in cart){
      t = t + cart[i].price
   }
   setTotal(t)
  }, [cart])
    const sampleObjs = [
      {
        'name':'Rocket Body',
        'price':10
      },  {
        'name':'Rocket Body',
        'price':10
      },  {
        'name':'Rocket Body',
        'price':10
      },  {
        'name':'Rocket Body',
        'price':10
      }, 

    ]
  return (
    <div className="bg-gray-200 w-full h-screen overflow-y-scroll flex flex-col">
      <div className="w-screen fixed top-0 h-12 border-gray-400 border-b-2 shadow-md font-ligh text-gray-500 font-light grid grid-cols-3">
        <div className="my-auto w-1/3 text-center">Challenger Center</div>
        <div className="mx-auto w-1/2 text-center my-auto" >Build a Rocket</div>
        <div className="mx-auto w-1/4 text-center my-auto cursor-pointer" onClick={()=>{setShowCart(true)}}><BiRocket className="my-auto" /></div>
      </div>
    <div className="w-full flex flex-col mt-24 mx-auto text-center text-4xl">
        <div>Pick an Option to add to cart!</div>
    </div>
    {showCart ? (
      <div className="z-50 absolute w-screen h-screen flex flex-col bg-gray-400 bg-opacity-40">

        <div className="flex flex-col mx-auto my-auto px-4 py-5 rounded-lg bg-gray-400 w-3/4">
          <div className="w-full cursor-pointer" onClick={()=>{setShowCart(false)}}>X</div>
            {cart.map((idx, key)=>{
              return (
                <div key={key} className="flex justify-between"><span>{idx?.name}</span><span>{idx?.price}</span></div>
              )
            })}
            <div>Total: {total}</div>
        </div>

      </div>
    ):(null)}
    <div className="flex flex-row space-x-4 w-1/2 mx-auto text-center mt-12">
      {sampleObjs.map((idx, key)=>{
        return (
            <div className="px-4 py-4 bg-gray-100 rounded-md border border-gray-100 flex flex-col">
                <div>Part: <span className="font-light italic">{idx?.name}</span> </div>
                <div className="flex mt-4 space-x-4"><span className="my-auto">${idx?.price} </span><button className="bg-green-200 rounded-md px-2 py-2 text-xs flex " 
                onClick={()=>{ 
                  let nc = [];
                  for(let i in cart){
                    nc.push(cart[i])
                  }
                  nc.push(sampleObjs[key])
                  
                setCart(nc)}}
                
                >Add To Cart <BsCartPlus className="my-auto" /> </button></div>
            </div>
        )
      })}
    </div>
    </div>
  );
}

export default App;
