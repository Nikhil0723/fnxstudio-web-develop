import Image from 'next/image'
import React from 'react'

function TestimonialCard({ client }) {
    return (
        <div className='bg-white border border-[#D3D3D3] rounded-xl px-6 py-9 shadow-lg'>
            <p className='max-w-xs text-neutral-600'>
                {client.review}
            </p>
            <div className='flex items-center mt-7 space-x-5'>
                <div className='h-14 w-14 relative '>
                    <Image className='absolute max-w-full h-auto object-contain rounded-full' src={client.avatar} alt='' fill />
                </div>
                <div className='flex flex-col'>
                    <p className='text-neutral-800 text-xl font-bold'>{client.name}</p>
                    <p className='font-medium text-sm'>
                        Founder of <span className='text-fnx-primary'>{client.company}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard