import React, { useState } from 'react'


export default function Home() {
  const primaryColor = '#eb9736';
  const secondaryColor = '#F2F4F1';
  const ternaryColor = '#f25b4c';
  const tetraColor = '#2b2a2f';
  const [popup, setPopup] = useState(false)
  const [serviceDialouge, setServiceDialouge] = useState(false);
  const [projectsDialouge, setProjectsDialouge] = useState(false);
  function servicePopup(){
    
    setServiceDialouge(!serviceDialouge)
    if(projectsDialouge){
      setProjectsDialouge(!projectsDialouge)
    }
    
  }

  let popupOn = () => {
    setPopup(!popup);
  };
 
  function projectsPopup(){
    
    setProjectsDialouge(!projectsDialouge);
    if(serviceDialouge){
      setServiceDialouge(!serviceDialouge)
    }
    
  }
  return (
    <div className='relative'>
      <header className={`bg-[#0000003b] backdrop-blur text-[white] absolute top-0 min-w-full z-[8]`}>

        <div className='flex justify-between items-center px-10 py-8'>
          <img src='./vite.svg' className={`relative z-[5] p-2 rounded -bg-[${tetraColor}]`} alt='LOGO' />


          <nav className={`relative z-[5] p-2  rounded -bg-[${tetraColor}]`}>
            <ul className='flex gap-12 items-center header-ul'>
              <div className='relative'>
                <button onClick={() => servicePopup()} className='text-[22px]'>Services</button>
              </div>
              <div className='relative'>
                <button onClick={() => projectsPopup()} className='text-[22px]'>Projects</button>
              </div>
              <button className={`px-4 py-2 rounded-xl bg-[${secondaryColor}] text-[${tetraColor}] font-semibold`}>Live Chat</button>
            </ul>
          </nav>


          <button className={`relative z-[5] px-4 py-2 rounded-xl bg-[${primaryColor}] text-[${secondaryColor}] font-semibold`} onClick={() => popupOn()}>Consultation</button>
        </div>
      </header>

      <div className='h-screen w-full relative'>
        <video src='./video.mp4' className='min-w-full -max-w-full min-h-full -max-h-full' autoPlay loop muted></video>
        <div className='absolute p-4 min-h-full min-w-full top-0 z-[3] flex flex-col gap-6 items-start justify-end text-white pb-36'>
          <div className='flex flex-col gap-6 px-20'>
            <h1 className={`text-[46px] font-bold block text-[${secondaryColor}]`}>Not Magic,<br /> Just <span className={`text-[${primaryColor}]`}>Logic</span></h1>
            <p className={`text-[${secondaryColor}] font-bold text-end`}>we create whats better for you</p>
            <div className='flex justify-center'>
              <button className={`animate-pulse px-4 py-2 rounded-xl bg-[${primaryColor}] text-[${secondaryColor}] font-semibold`} onClick={() => popupOn()}>Consultation</button>
            </div>
          </div>
        </div>



        {/* Services Dialouge */}
        <div className={`h-[80vh] w-[80vw] p-12 bg-white flex gap-12 absolute transition-[.4s] z-[6] right-[10%] ${serviceDialouge ? 'top-[20%]' : ' top-[-100%]'}`}>
          <div className=''>
            <img src='./vite.svg' className='w-[150px] bg-[red]' />
            <p className='text-[13px]'>Web development services</p>
          </div>

          <div className='border border-black p-2 grow'>
            <h2 className='text-[26px] font-semibold pb-4'>Web Development Services</h2>
            <div className='grid grid-cols-2 gap-6'>
              <div className='p-4 border border-black rounded-xl bg-[gray]'>
                <h4 className='text-[20px] font-semibold'>Web Development</h4>
              </div>

              <div className='p-4 border border-black rounded-xl bg-[gray]'>
                <h4 className='text-[20px] font-semibold'>Web Development</h4>
              </div>

              <div className='p-4 border border-black rounded-xl bg-[gray]'>
                <h4 className='text-[20px] font-semibold'>Web Development</h4>
              </div>

              <div className='p-4 border border-black rounded-xl bg-[gray]'>
                <h4 className='text-[20px] font-semibold'>Web Development</h4>
              </div>
            </div>
          </div>
        </div>


        {/* Projects dialouge */}
        <div className={`h-[50vh] w-[80vw] p-12 bg-[gray] flex gap-12 absolute transition-[.4s] z-[6] right-[10%] ${projectsDialouge ? 'top-[20%]' : ' top-[-100%]'}`}>
          <div className=''>
            <img src='./vite.svg' className='w-[150px] bg-[red]' />
            <p className='text-[13px]'>Web development services</p>
          </div>

          <div className='border border-black p-2 grow flex justify-center items-center'>
            <h2 className='text-[36px] font-bold text-white pb-4'>projects</h2>
          </div>
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
