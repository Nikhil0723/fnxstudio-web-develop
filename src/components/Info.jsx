import React from 'react'
import ServiceCard from './ServiceCard'
import TestimonialCard from './TestimonialCard'

function Info() {

    const services = [
        {
            name: 'UX/UI Design',
            tagLine: "Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let's elevate your brand together.",
            color: '#FFF6EC',
        },
        {
            name: 'WebDevelopment',
            tagLine: "Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let's elevate your brand together.",
            color: '#ECF5FF',
        },
        {
            name: 'Logo Design and Branding',
            tagLine: "Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let's elevate your brand together.",
            color: '#FFECF7',
        },
    ];

    const testimonials = [
        {
            name: 'Alan Dewitt',
            review: 'Lörem ipsum det revänt men överklassafari innan darat alltså lang krosofena. Pafånera lamovis täsobelt, fäbodifiering eubel krosofena.',
            company: 'Circle',
            avatar: '/Client.png'
        },
        {
            name: 'Alan Dewitt',
            review: 'Lörem ipsum det revänt men överklassafari innan darat alltså lang krosofena. Pafånera lamovis täsobelt, fäbodifiering eubel krosofena.',
            company: 'Circle',
            avatar: '/Client.png'
        },
        {
            name: 'Alan Dewitt',
            review: 'Lörem ipsum det revänt men överklassafari innan darat alltså lang krosofena. Pafånera lamovis täsobelt, fäbodifiering eubel krosofena.',
            company: 'Circle',
            avatar: '/Client.png'
        },

    ]

    return (
        <div className='max-w-7xl mx-auto my-32 py-7 px-5'>
            <>
                <div className='text-center space-y-5'>
                    <h1 className='text-5xl font-bold'>What we actually do?</h1>
                    <p className='text-lg'>Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let&apos;s elevate your brand together.</p>
                </div>

                <div className='flex space-x-5 mt-16'>
                    {services.map((service, i) => (
                        <ServiceCard key={i} services={service} />
                    ))}
                </div>
            </>
            <>
                <div className='space-y-5 mt-16'>
                    <h2 className='text-3xl font-bold'>Our Client</h2>
                    <p className='max-w-3xl text-lg'>Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let&apos;s elevate your brand together.</p>
                </div>

                <div className='flex items-center justify-between mt-10'>
                    {testimonials.map((testimonial, i) => (
                        <TestimonialCard key={i} client={testimonial} />
                    ))}
                </div>
            </>
        </div>
    )
}

export default Info