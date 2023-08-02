import React from 'react'

async function getData(coin) {
    const res = await fetch(`https://${coin}.api.subscan.io/api/scan/metadata`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":"71ddb4a6fb274c30b95b19df6af89ed9"
      },
      body:JSON.stringify({
  
      })
    })
    // .then((res) => res.json()).catch((e) => console.log(e))
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function Details({name,index}) {
    const geted = await getData(name);
    const newData = geted.data;
  return (
    <div className='flex h-full'>
            <div className='w-1/2 p-10 font-mono'>
              <div className='h-1/3 text-lg font-semibold'>{name}</div>
              <div className='grid grid-cols-2 gap-10 font-thin '>
                <div><div>Finalized</div><div>{newData.finalized_blockNum}</div></div>
                <div><div>Signed Extrinics</div><div>{newData.count_signed_extrinsic}</div></div>
                <div><div>Transfers</div><div>{newData.count_transfer}</div></div>
                <div><div>Current Pool</div><div>{newData.currentPools}</div></div>
  
              </div>
            </div>
            <div className='w-1/2 p-10'>
              {/* <div className='text-lg font-semibold'>Graph</div> */}
            </div>
          </div>
  )
}
