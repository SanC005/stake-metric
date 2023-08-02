"use client"
import {React,useState} from 'react'
import Details from './details'

function Metric() {
    var navstyle = 'hover:bg-pink-300 w-full flex items-center justify-center hover:cursor-pointer'
    const [index,setIndex] = useState(1);
    const name ="polkadot"
    function changeIndex(e){
        if(e=="polkadot"){
            setIndex(1);
        }else if(e=="cardona"){
            setIndex(0);
        }
        else if(e=="kusama"){
            setIndex(2);
        }
    }
  return (
    <div className='bg-gradient-to-r from-blue-100 via-indigo-200 to-pink-400 h-1/2 text-black w-5/6 rounded-2xl m-5'>
          <div className='flex justify-evenly bg-gradient-to-r from-blue-100 via-slate-200 to-pink-200 text-center rounded-t-2xl h-1/5 text-lg'>
            <div className={`${navstyle} ${index==0?"bg-pink-400":""} rounded-tl-2xl`} onClick={() => {setIndex(0)}}>Cardona</div>
            <div className={`${navstyle} ${index==1?"bg-pink-400":""}` } onClick={() => changeIndex("polkadot")} ><button>PolkaDot</button></div>
            <div className={`${navstyle} ${index==2?"bg-pink-400":""} rounded-tr-2xl`} onClick={() => {setIndex(2)}}>Kusama</div>
          </div>
          <Details index={index}/>
        </div>
  )
}

export default Metric