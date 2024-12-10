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
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p className='max-w-[250px] py-3'>All of our amazing are lsited above where you can experince the fine art of our work</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
