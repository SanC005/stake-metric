import Metric from "./components/metric";


export default function HomePage() {

    return (
      <div className='h-screen flex flex-col items-center '>
        <div className='h-1/5 text-2lg text-black w-full flex justify-center items-center'>
          <div className='text-3xl font-mono'>Stake Metric</div>
        </div>
          <Metric/>
      </div>
    )
  }