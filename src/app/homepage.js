
async function getData() {
  const res = await fetch('https://polkadot.api.subscan.io/api/scan/metadata',{
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

export default async function HomePage() {
    var navstyle = 'hover:bg-pink-400 hover:text-white w-full flex items-center justify-center'
    const data = await getData();
    const indata = data.data;
    console.log(indata);
    return (
      <div className='h-screen flex flex-col items-center '>
        <div className='h-1/5 text-2lg text-black w-full flex justify-center items-center'>
          <div className='text-3xl font-mono'>Stake Metric</div>
        </div>
        <div className='bg-gradient-to-r from-blue-100 via-indigo-200 to-pink-400 h-1/2 text-black w-5/6 rounded-2xl m-5'>
          <div className='flex justify-evenly bg-gradient-to-r from-blue-100 via-white to-pink-200 text-center rounded-t-2xl h-1/5 text-lg'>
            <div className={`${navstyle} rounded-tl-2xl`}>Cardona</div>
            <div className='hover:bg-pink-400 hover:text-white w-full flex items-center justify-center'>PolkaDot</div>
            <div className='hover:bg-pink-400 hover:text-white w-full flex items-center justify-center rounded-tr-2xl'>Kusama</div>
          </div>
          <div className='flex h-full'>
            <div className='w-1/2 p-10'>
              <div className='h-1/3 text-lg font-semibold'>NAME</div>
              <div className='grid grid-cols-2 gap-10'>
                <div><div>data</div><div>number</div></div>
                <div><div>data</div><div>number</div></div>
                <div><div>data</div><div>number</div></div>
                <div><div>data</div><div>number</div></div>
  
              </div>
            </div>
            <div className='w-1/2 p-10'>
              <div className='text-lg font-semibold'>Graph</div>
            </div>
          </div>
        </div>
      </div>
    )
  }