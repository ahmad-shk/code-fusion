import React from 'react'

export default function ProjectsBox({label}) {
  const primaryColor = '#eb9736';
  const secondaryColor = '#F2F4F1';
  const ternaryColor = '#f25b4c';
  const tetraColor = '#2b2a2f';
  return (
    <div className={`p-4 neon-border relative flex justify-center items-center projectBox bg-[${tetraColor}]`}>
        <img src='./vite.svg' className='w-full'/>
        <label className='text-[white] text-[20px] font-semibold absolute bottom-[5%]'>VITE PROJECCT</label>
    </div>
  )
}
