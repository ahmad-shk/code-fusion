import React, { useState } from 'react'
import Form from './Form'
import Projects from './Projects';
import Footer from '../components/footer';
export default function Home() {
  const primaryColor = '#eb9736';
  const secondaryColor = '#F2F4F1';
  const ternaryColor = '#f25b4c';
  const tetraColor = '#2b2a2f';
  const [popup, setPopup] = useState(false)
  let popupOn = () => {
    setPopup(!popup);
  };
  return (
    <div className='relative'>
      <header className={`bg-[${tetraColor}] text-[white] absolute top-0 min-w-full z-[5]`}>
        <div className={`absolute p-[1px] w-full bg-[${primaryColor}] top-[50%] z-[0]`}></div>
        <div className='flex justify-between items-center px-10 py-8'>
          <img src='./vite.svg' className={`relative z-[5] p-2 border border-[${primaryColor}] rounded bg-[${tetraColor}]`} alt='LOGO' />

          <nav className={`relative z-[5] p-2 border border-[${primaryColor}] rounded bg-[${tetraColor}]`}>
            <ul className='flex gap-12 items-center header-ul'>
              <details className='details relative'>
                <summary className='summary list-none cursor-pointer'>Services</summary>
                <ul className={`list-none absolute z-[6] bg-[${primaryColor}] p-2 hover:[&>*]:bg-[${tetraColor}] [&>*]:px-4 [&>*]:py-3 [&>*]:cursor-pointer rounded [&>*]:font-semibold min-w-[200px]`}>
                <li>Web Development</li>
                <li>Web Maintainence</li>
                <li>Web Optimization</li>
                </ul>
                </details>
              <li>Projects</li>
              <button className={`px-4 py-2 rounded-xl bg-[${secondaryColor}] text-[${tetraColor}] font-semibold`}>Live Chat</button>
            </ul>
          </nav>

          <button className={`relative z-[5] px-4 py-2 rounded-xl bg-[${primaryColor}] text-[${secondaryColor}] font-semibold`} onClick={() => popupOn()}>Consultation</button>
        </div>
      </header>

      <div className='h-screen w-full relative'>
        <video src='./video.mp4' className='min-w-full -max-w-full min-h-full -max-h-full' autoPlay loop muted></video>
        <div className='absolute p-4 min-h-full min-w-full top-0 z-[3] flex flex-col gap-6 items-center justify-end text-white pb-36'>
          <h1 className={`text-[46px] font-bold block text-[${secondaryColor}]`}>Not Magic, Just Logic</h1>
          <p className={`text-[${secondaryColor}] font-bold`}>we create whats better for you</p>
          <button className={`animate-pulse px-4 py-2 rounded-xl bg-[${primaryColor}] text-[${secondaryColor}] font-semibold`} onClick={() => popupOn()}>Consultation</button>
        </div>
      </div>

      <div className={`h-screen w-screen p-4 bg-[#00000042] fixed top-0 left-0 backdrop-blur z-[10] flex justify-center items-center ${popup ? 'block' : 'hidden'}`}>
        <div className={`p-6 rounded bg-[${tetraColor}] min-w-[300px]`}>
          <div className='flex justify-end'><button type='button' className={`px-3 py-1 rounded bg-[${ternaryColor}] text-[${secondaryColor}]`} onClick={() => popupOn()}>X</button></div>

          <div className='flex pt-6 gap-6'>
            <div className={`p-4 border border-[${ternaryColor}] bg-[${secondaryColor}] rounded flex flex-col gap-2 justify-center items-center`}>
              <img src='./phone.svg' className='w-[110px] w-[100px]  py-3' />
              <label>Live Call</label>
            </div>
            <div className={`p-4 border border-[${ternaryColor}] bg-[${secondaryColor}] rounded flex flex-col gap-2 justify-center items-center`}>
              <img src='./meeting.svg' className='w-[110px] h-[100px] ' />
              <label>Schedule Meeting</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
