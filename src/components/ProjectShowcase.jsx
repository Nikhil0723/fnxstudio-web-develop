import Image from 'next/image'
import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectShowcase() {

    const projects = [
        {
            name: 'Messaging App',
            type: 'UX/UI Design',
            description: "Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let's elevate your brand together.",
            image: '/projectMessage.png',
        },
        {
            name: 'Cloud Kitchen App',
            type: 'UX/UI Design',
            description: "Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let's elevate your brand together.",
            image: '/projectCloudKitchen.png',
        },
        {
            name: 'Messaging App',
            type: 'Web Development',
            description: "Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let's elevate your brand together.",
            image: '/projectMessage.png',
        },

    ]

    return (
        <div className='max-w-7xl mx-auto py-7 px-5'>
            <div className='space-y-5 text-center'>
                <h1 className='text-5xl font-bold'>Our Past Projects</h1>
                <p className='text-lg'>Experience exceptional web development, UX/UI design, brand design, and graphic design services. Let&apos;s elevate your brand together.</p>
            </div>

            <div className='flex flex-col space-y-10 mt-16'>
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectShowcase