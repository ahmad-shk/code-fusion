import React, { useState } from 'react'

export default function Form() {
    const primaryColor = '#eb9736';
    const secondaryColor = '#F2F4F1';
    const ternaryColor = '#f25b4c';
    const tetraColor = '#2b2a2f';
    const [popup, setPopup] = useState(false)
    let popupOn = () => {
        setPopup(!popup);
    };

    return (
        <div className='w-full relative z-[5] bg-[#F2F4F1]'>
            <h2 className={`text-[36px] font-bold text-center py-12 text-[${tetraColor}]`}>Contact us to avail our services</h2>
            <div className='w-[85%] mx-auto flex gap-4 py-4'>

                <div className={`p-6 bg-gradient-to-t from-[${primaryColor}] to-[${ternaryColor}] rounded-xl text-[${secondaryColor}] flex flex-col gap-4`}>
                    <h3 className='text-[26px] font-bold'>CODEFUSION</h3>
                    <p className='font-semibold'>CONTACT DETAILS</p>
                    <p className='max-w-[300px] text-[13px]'>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                    <div className='p-4 border border-[#F0FFF0] rounded-md'>
                        <h3 className='text-[18px] font-semibold'>OUR EMAIL</h3>
                        <label className='text-[20px] font-semibold'>xxxxxxx@gmail.com</label>
                    </div>
                    <div className='p-4 border border-[#F0FFF0] rounded-md'>
                        <h3 className='text-[18px] font-semibold'>OUR NUMBER</h3>
                        <label className='text-[20px] font-semibold'>xxxx-xxxxxxxx</label>
                    </div>
                </div>


                <form className={`border border-[${ternaryColor}] rounded-lg text-white p-6 flex flex-col gap-5 grow`}>
                    <div className='flex flex-col'>
                        <label for='name' className={`text-[${tetraColor}] font-semibold`}>NAME</label>
                        <input type='text' placeholder='Enter Name Here' className={`bg-[${tetraColor}] border border-[${primaryColor}] p-3 rounded-lg outline-none text-[22px]`} />
                    </div>
                    <div className='flex flex-col'>
                        <label for='name' className={`text-[${tetraColor}] font-semibold`}>EMAIL</label>
                        <input type='email' placeholder='Enter email Here' className={`bg-[${tetraColor}] border border-[${primaryColor}]  p-3 rounded-lg outline-none text-[22px]`}/>
                    </div>
                    <div className='flex flex-col'>
                        <label for='name' className={`text-[${tetraColor}] font-semibold`}>PHONE NUMBER</label>
                        <input type='text' placeholder='Enter number Here' className={`bg-[${tetraColor}] border border-[${primaryColor}]  p-3 rounded-lg outline-none text-[22px]`} />
                    </div>
                    <div className='flex flex-col'>
                        <label for='name' className={`text-[${tetraColor}] font-semibold`}>SERVICE</label>
                        <input type='text' placeholder='Enter number Here' className={`bg-[${tetraColor}] border border-[${primaryColor}]  p-3 rounded-lg outline-none text-[22px]`} />
                    </div>
                    <div className='flex justify-end'>
                        <button type='button' className={`px-4 py-2 rounded-xl bg-[${ternaryColor}] text-[white] font-semibold`} onClick={() => popupOn()}>Submit</button>
                    </div>

                    <div className={`h-screen w-screen p-4 bg-[#00000042] fixed top-0 left-0 backdrop-blur z-[10] flex justify-center items-center ${popup ? 'block' : 'hidden'}`}>
                        <div className={`p-6 rounded bg-[${tetraColor}] min-w-[300px] w-[50%]`}>
                            <div className='flex justify-end'><button type='button' className={`px-3 py-1 rounded bg-[${ternaryColor}] text-[#F2F4F1]`} onClick={() => popupOn()}>X</button></div>

                            <div className='flex flex-col pt-6'>
                                <label className={`text-[${ternaryColor}] font-semibold`}>Enter service description</label>
                                <textarea placeholder='Enter here' className={`outline-none p-2 bg-[${ternaryColor}] rounded text-white`} rows={8}></textarea>
                            </div>
                            <div className='pt-8 flex justify-end'><button type='button' className={`px-3 py-1 rounded bg-[${primaryColor}] text-[#F2F4F1]`}>Submit</button></div>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    )
}
