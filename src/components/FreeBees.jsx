import React from 'react'
import FreeService from './FreeService'

function FreeBees() {

    const freeServices = [
        {
            type: 'UX Audit Service',
            name: 'UX/UI Design',
            points: ["Thousands of businesses rely on our cloud communications platform", "Hundreds of businesses rely on our cloud communications platform", "Millions of businesses rely on our cloud communications platform"]
        },
        {
            type: 'Web Development',
            name: 'Hosting setup',
            points: ["Thousands1 of businesses rely on our cloud communications platform", "Hundreds2 of businesses rely on our cloud communications platform", "Millions3 of businesses rely on our cloud communications platform", "Millions4 of businesses rely on our cloud communications platform"]
        },
    ]

    return (
        <div>
            <div className='max-w-7xl mx-auto py-7 px-5'>
                <div className='space-y-5 text-center'>
                    <h1 className='text-5xl font-bold'>Our Freebees</h1>
                    <p className='text-lg'>Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let&apos;s elevate your brand together.</p>
                </div>

                <div className='flex flex-col items-start justify-between space-y-10 mt-16'>
                    {freeServices.map((freeService, i) => (
                        <FreeService key={i} freeServices={freeService} />
                    ))}
                </div>

            </div>
            <div className='space-y-5 text-center my-32 py-24 bg-[#f0e7ed]'>
                <h1 className='text-5xl font-bold'>Got project in your mind? </h1>
                <p className='text-lg'>Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let&apos;s elevate your brand together.</p>
                <button className='px-12 py-4 bg-fnx-primary text-white font-semibold rounded-xl !mt-8'>Contact Us</button>
            </div>
        </div>

    )
}

export default FreeBees