import Image from 'next/image'
import React from 'react'

function FreeService({ freeServices }) {

    return (
        <div className='flex items-center justify-between flex-row w-full even:flex-row-reverse'>
            <div className='space-y-4'>
                <div className='px-5 py-2 font-semibold bg-[#F0F0F0] inline-block rounded-full'>
                    <p className='text-transparent bg-clip-text bg-gradient-to-br from-[#FF734D] to-[#FED25B]'>{freeServices.type}</p>
                </div>
                <h2 className='text-2xl font-bold '>{freeServices.name}</h2>

                <ul className='max-w-md space-y-5'>
                    {freeServices.points.map((point, i) => (
                        <li key={i} className='flex items-center space-x-6'>
                            <Image src='/checkCircleIcon.svg' alt='' height={32} width={32} />
                            <p className='text-neutral-600 tracking-wide'>
                                {point}
                            </p>
                        </li>
                    ))}
                </ul>

                <button className='px-12 py-3 border bg-fnx-primary text-white font-medium rounded-lg mt-8'>Book Now</button>
            </div>
            <div className='relative h-[26rem] w-[45rem]'>
                <Image className='absolute max-w-full h-auto object-contain' src='/projectMessage.png' alt='' fill />
            </div>
        </div>
    )
}

export default FreeService