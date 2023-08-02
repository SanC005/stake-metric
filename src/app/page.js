import Image from 'next/image'
export default function Home() {
  var navstyle = 'hover:bg-pink-400 hover:text-white w-full flex items-center justify-center'
  return (
    <div className='h-screen flex flex-col items-center '>
      <div className='h-1/5 text-2lg text-black w-full flex justify-center items-center'>
        <div className='text-2xl'>Stake Metric</div>
      </div>
      <div className='bg-gradient-to-r from-blue-100 via-indigo-200 to-pink-400 h-1/2 text-black w-5/6 rounded-2xl m-5'>
        <div className='flex justify-evenly bg-white text-center rounded-t-2xl h-1/5 text-lg'>
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
