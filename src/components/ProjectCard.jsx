import Image from 'next/image'
import React from 'react'

function ProjectCard({ project }) {
    return (
        <div className='flex items-center justify-between flex-row even:flex-row-reverse'>
            <div className='space-y-4'>
                <div className='px-5 py-2 font-semibold bg-[#F0F0F0] inline-block rounded-full'>
                    <p className='text-transparent bg-clip-text bg-gradient-to-br from-[#FF734D] to-[#FED25B]'>{project.type}</p>
                </div>

                <h2 className='text-2xl font-bold '>{project.name}</h2>

                <p className='max-w-md'>{project.description}</p>

                <button className='px-12 py-3 border border-fnx-primary text-fnx-primary font-medium rounded-lg'>View Projects</button>
            </div>
            <div className='relative h-[26rem] w-[45rem]'>
                <Image className='absolute max-w-full h-auto object-contain' src={project.image} alt='' fill />
            </div>
        </div>
    )
}

export default ProjectCard