import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-[#1e1e25] text-white pt-12 border-t footer">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col  md:flex-row gap-8 justify-between min-[1400px]:mr-32 pb-8 space-y-12 md:space-x-12 mx-auto px-6 md:px-12">

                    {/* Description Section */}
                    <div className="w-[300px]">
                        <img src="./vite.svg" alt="codefusion" className=" h-auto" />
                        <p className="mt-4 text-gray-300">
                            we bring creativity to whatever you are planning to acheive. Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
                        </p>
                    </div>

                    {/* Features Section */}

                    {/* Contact Section */}
                    <div className="">
                        <h3 className="text-lg font-semibold">Contact</h3>
                        <p className="mt-4 text-gray-300">
                            <strong>Phone:</strong> 212-500-1228
                        </p>
                        <p className="mt-4 text-gray-300">
                            <strong>Email:</strong> 7studioinc@gmail.com
                        </p>
                    </div>

                    {/* More Section */}
                    <div className="">
                        <h3 className="text-lg font-semibold">Services</h3>
                        <ul className="mt-4 space-y-2 text-gray-300">
                            <li>Web development</li>
                            <li>Web maintaince</li>
                            <li>Web optimization</li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className="text-lg font-semibold">Gallery</h3>
                        <div className='grid grid-cols-3 gap-6 mt-4 [&>*]:w-[100px]'>
                            <img src='./gig poster 5.jpg' />
                            <img src='./gig poster 5.jpg' />
                            <img src='./gig poster 5.jpg' />
                            <img src='./gig poster 5.jpg' />
                            <img src='./gig poster 5.jpg' />
                        </div>
                    </div>
                </div>

                <div className='w-[90%] mx-auto'>
                    <div className='py-2 pb-6'>
                        <div className='flex gap-4'>
                            <div className='flex flex-col-reverse items-center'>
                                <label className='text-[14px]'>Instagram</label>
                        <img src='./facebook.svg' className='w-[50px] invert'/>
                        </div>
                        <div className='flex flex-col-reverse items-center'>
                                <label className='text-[14px]'>Facebook</label>
                        <img src='./instagram.svg'  className='w-[50px] invert'/>
                        </div>
                        <div className='flex flex-col-reverse items-center'>
                                <label className='text-[14px]'>Discord</label>
                        <img src='./discord.svg'  className='w-[70px] invert'/>
                        </div>
                        </div>
                    </div>


                <div className='flex justify-between border-t py-8  text-[14px]'>
                    <h3>Since 2024</h3>
                    <h3>@Copyright strike will be delivered to home</h3>
                </div>
                </div>


                
            </div>
        </footer>
    )
}
