import Image from 'next/image'
import React from 'react'

function BookServiceCard({ service }) {
    return (
        <div>
            <div className='h-32 w-32 relative'>
                <Image className='absolute max-w-auto h-auto' src='/chatIcon.svg' alt='' fill />
            </div>

            <div className='text-white max-w-sm space-y-3 mt-10'>
                <h2 className='text-3xl font-bold text-white'>{service.name}</h2>
                <p className='text-white/80 text-sm'>{service.description}</p>
                <button className='px-6 py-4 !mt-5 text-fnx-primary border border-fnx-primary rounded-xl'>Book this Service</button>
            </div>
        </div>
    )
}

export default BookServiceCard