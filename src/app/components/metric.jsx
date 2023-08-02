"use client"
import {React,useState} from 'react'
import Details from './details'

function Metric() {
    var navstyle = 'hover:bg-pink-300 hover:text-white w-full flex items-center justify-center'
    const [index,setIndex] = useState(0);
    const name ="polkadot"
  return (
    <div className='bg-gradient-to-r from-blue-100 via-indigo-200 to-pink-400 h-1/2 text-black w-5/6 rounded-2xl m-5'>
          <div className='flex justify-evenly bg-gradient-to-r from-blue-100 via-slate-200 to-pink-200 text-center rounded-t-2xl h-1/5 text-lg'>
            <div className={`${navstyle} rounded-tl-2xl`} onClick={() => setIndex(0)}>Cardona</div>
            <div className={`${navstyle}` } onClick={() => setIndex(1)}  >PolkaDot</div>
            <div className={`${navstyle} rounded-tr-2xl`} onClick={() => setIndex(2)}>Kusama</div>
          </div>
          <Details name={name} index={index}/>
        </div>
  )
}

export default Metric