import Image from 'next/image'
import React from 'react'

function BannerProfileCard({ profiles }) {
    return (
        <div className='w-fit rounded-xl border-[5px] border-white/20 even:ml-auto even:mt-10 first:ml-5 last:mt-20'>
            <div className='flex bg-white py-2 px-4 pr-10 rounded-lg space-x-5'>
                <div className='relative h-14 w-14'>
                    <Image className='absolute max-w-full h-auto object-contain' src='/UserF.png' alt='' fill />
                </div>
                <div className='flex flex-col space-y-1'>
                    <p className='text-lg font-semibold'>{profiles.name}</p>
                    <p className=''>Digital Marketer at Fornax</p>
                </div>
            </div>
        </div>
    )
}

export default BannerProfileCard