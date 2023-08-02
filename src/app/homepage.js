import Metric from "./components/metric";

// async function getData(coin) {
//   const res = await fetch(`https://${coin}.api.subscan.io/api/scan/metadata`,{
//     method:"POST",
//     headers: {
//       "Content-Type": "application/json",
//       "x-api-key":"71ddb4a6fb274c30b95b19df6af89ed9"
//     },
//     body:JSON.stringify({

//     })
//   })
//   // .then((res) => res.json()).catch((e) => console.log(e))
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }

export default function HomePage() {
    // const name = "polkadot"
    // const data = await getData(name);
    // const indata = data.data;
    // console.log(indata);
    return (
      <div className='h-screen flex flex-col items-center '>
        <div className='h-1/5 text-2lg text-black w-full flex justify-center items-center'>
          <div className='text-3xl font-mono'>Stake Metric</div>
        </div>
          <Metric/>
      </div>
    )
  }