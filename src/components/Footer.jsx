import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <footer className='bg-[#EFEFEF] border-t border-[#CACACA]'>
            <div className='flex items-start justify-between max-w-7xl mx-auto py-7 px-5'>
                <div className='space-y-5 max-w-sm'>
                    <div className='relative w-40 h-10'>
                        <Image className='absolute max-w-full h-auto object-contain' src='/fornax.svg' alt='' width={144} height={40} />
                        <Image className='absolute right-0' src='/kite.svg' alt='' width={14} height={14} />
                    </div>
                    <p className='text-neutral-600 font-semibold'>Design amazing digital experiences that create more happy in the world</p>
                    <button className='text-fnx-primary font-medium border-2 border-fnx-primary px-4 py-2 rounded-full'>
                        Contact Us Now
                    </button>
                </div>
                <div className='space-y-8'>
                    <p className='text-neutral-500 font-medium text-lg'>Social Media</p>
                    <div className='space-y-4'>
                        <p className='font-semibold text-neutral-600 cursor-pointer'>Instagram</p>
                        <p className='font-semibold text-neutral-600 cursor-pointer'>Facebook</p>
                        <p className='font-semibold text-neutral-600 cursor-pointer'>Dribbble</p>
                        <p className='font-semibold text-neutral-600 cursor-pointer'>Behance</p>
                        <p className='font-semibold text-neutral-600 cursor-pointer'>LinkedIn</p>
                    </div>
                </div>
                <div className='space-y-8'>
                    <p className='text-neutral-500 font-medium text-lg'>Resources</p>
                    <div className='space-y-4'>
                        <p className='font-semibold text-neutral-600 cursor-pointer'>Blogs</p>
                        <p className='font-semibold text-neutral-600 cursor-pointer'>Contact Us</p>
                    </div>
                </div>
                <div className='max-w-sm space-y-8'>
                    <p className='text-neutral-500 font-medium text-lg'>Contact</p>
                    <div>
                        <p className='font-semibold text-neutral-600 cursor-pointer'>16400 COLLINS AVESuite 745NORTH MIAMI BEACH</p>
                        <br />
                        <p className='font-semibold text-neutral-600 cursor-pointer'>
                            FL 33160Phone: 8828447664
                            <br />
                            Email: team@fornax.studio
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#181920] text-white'>
                <div className='flex items-center justify-between max-w-7xl mx-auto py-7 px-5'>
                    <p className='mr-auto'>© {new Date().getFullYear()}. All rights reserved by Fornax Studio.</p>
                    <p className='mr-10'>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer