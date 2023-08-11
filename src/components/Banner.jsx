import React from 'react'
import BannerProfileCard from './BannerProfileCard'

function Banner() {

    const profiles = [
        {
            name: 'Abhishek',
            role: 'UI/UX Designer',
        },
        {
            name: 'Kaustubh',
            role: 'FullStack Developer',
        },
        {
            name: 'Anjali',
            role: 'Marketing Head',
        },
    ]

    return (
        <div className='bg-[#181920] h-[45rem] relative overflow-hidden'>
            <div className='bg-[#4B30D8] blur-[600px] h-[600px] w-[600px] absolute rounded-full top-[-185px] right-[-155px] z-0' />
            <div className='bg-[#4B30D8] blur-[600px] h-[600px] w-[600px] absolute rounded-full bottom-[-155px] left-[-185px] z-0' />

            <div className='flex items-center justify-between max-w-7xl mx-auto px-5 mt-40'>
                <div className='text-white space-y-6'>
                    <h1 className='text-6xl font-semibold max-w-lg leading-[5.5rem]'>
                        Elevating Digital Experiences.
                    </h1>

                    <p className='text-lg max-w-[38rem]'>Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let&apos;s elevate your brand together.</p>

                    <button className='bg-fnx-primary font-medium py-3 px-5 text-white rounded-lg'>
                        Let&apos;s Connect
                    </button>
                </div>

                <div className='flex flex-col grow-[0.7] relative'>
                    {profiles.map((profile, i) => (
                        <BannerProfileCard key={i} profiles={profile} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Banner