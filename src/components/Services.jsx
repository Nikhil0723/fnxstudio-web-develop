import React from 'react'
import BookServiceCard from './BookServiceCard'

function Services() {

    const services = [
        {
            name: 'UX/UI Design',
            description: "Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let's elevate your brand together.",
            image: '',
        },
        {
            name: 'Banding and logo',
            description: "Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let's elevate your brand together.",
            image: '',
        },
        {
            name: 'Web Development',
            description: "Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let's elevate your brand together.",
            image: '',
        },
    ]

    return (
        <div className='bg-[#181920] relative overflow-hidden my-16 py-16'>
            <div className='max-w-7xl mx-auto py-7 px-5'>
                <div className='bg-[#4B30D8] blur-[600px] h-[600px] w-[600px] absolute rounded-full top-[-185px] right-[-155px] z-0' />
                <div className='bg-[#4B30D8] blur-[600px] h-[600px] w-[600px] absolute rounded-full bottom-[-155px] left-[-185px] z-0' />

                <div className='text-white space-y-5'>
                    <h1 className='text-4xl font-bold'>Our Services</h1>
                    <p className='max-w-xl'>Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let&apos;s elevate your brand together.</p>
                </div>

                <div className='flex items-start justify-between mt-16'>
                    {services.map((service,i) => (
                        <BookServiceCard key={i} service={service} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services