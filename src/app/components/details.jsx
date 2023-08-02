import React, { useEffect, useState } from "react";
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    },
    body: JSON.stringify({}),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response was not ok.");
        // console.log("error")
    }
  })
  .then((data) => {
    resolve(data);
  })
  .catch((error) => {
    reject(error);
  });
  });
}

export default function Details({index}) {
  const [val,setVal] = useState({});
  const x = {
    0:"cardona",
    1:"polkadot",
    2:"kusama"
  }
  fetchData(`https://${x[index]}.api.subscan.io/api/scan/metadata`).then(function(result){
        //   console.log("setting")
        //   console.log(result)
          setVal(result)
        //   console.log("setted")
        })
  
  return (
    <div className="flex h-full">
      <div className="w-1/2 p-10 font-mono">
        <div className="h-1/3 text-lg font-semibold">{x[index]}</div>
        <div className="grid grid-cols-2 gap-10 font-thin ">
          <div>
            <div onClick={() => alert()}>Finalized</div>
            <div>{val?.data?.finalized_blockNum}</div>
          </div>
          <div>
            <div>Signed Extrinics</div>
            <div>{val?.data?.count_signed_extrinsic}</div>
          </div>
          <div>
            <div>Transfers</div>
            <div>{val?.data?.count_transfer}</div>
          </div>
          <div>
            <div>Current Pool</div>
            <div>{val?.data?.currentPools}</div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-10">
        {/* <div className='text-lg font-semibold'>Graph</div> */}
      </div>
    </div>
  );
}
