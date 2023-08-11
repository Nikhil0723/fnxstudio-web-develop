import React from 'react'

function ServiceCard({ services }) {
    return (
        <div
            className='flex px-9 py-10 rounded-[20px] h-[30rem]'
            style={{
                background: services.color
            }}
        >
            <div className='space-y-5'>
                <h2 className='text-3xl font-bold'>{services.name}</h2>
                <p className='max-w-xs text-sm '>{services.tagLine}</p>
            </div>
        </div>
    )
}

export default ServiceCard