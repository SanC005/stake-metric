import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col items-center'>
      <div className='h-1/5'>
        Home
      </div>
      <div className='bg-rose-400 h-1/2 text-black w-5/6 rounded-2xl'>
        <div className='flex justify-evenly h-8 bg-white text-center rounded-t-2xl'>
          <div className='hover:bg-pink-400 hover:text-white w-full'>Cardona</div>
          <div className='hover:bg-pink-400 hover:text-white w-full'>PolkaDot</div>
          <div className='hover:bg-pink-400 hover:text-white w-full'>Kusama</div>
        </div>
        <div className='flex '>
          <div className='w-1/2'>Data</div>
          <div className='w-1/2'>Graph</div>
        </div>
      </div>
    </div>
  )
}
