import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import QuestionsAccordion from './QuestionsAccordion';

function AskedQuestions() {
    const askedQuestions = [
        {
            id: 1,
            question: "What do we do?",
            answer: "Efficiency is the key to providing exceptional customer service, and our messaging platform incorporates advanced chatbot technology to achieve just that. Chatbots can handle routine inquiries",
        },
        {
            id: 2,
            question: "Getting started with Untitled ",
            answer: "Efficiency is the key to providing exceptional customer service, and our messaging platform incorporates advanced chatbot technology to achieve just that. Chatbots can handle routine inquiries",
        },
        {
            id: 3,
            question: "The messenger",
            answer: "Efficiency is the key to providing exceptional customer service, and our messaging platform incorporates advanced chatbot technology to achieve just that. Chatbots can handle routine inquiries",
        },
        {
            id: 4,
            question: "Our next-gen inbox",
            answer: "Efficiency is the key to providing exceptional customer service, and our messaging platform incorporates advanced chatbot technology to achieve just that. Chatbots can handle routine inquiries",
        },
        {
            id: 5,
            question: "What do we do?",
            answer: "Efficiency is the key to providing exceptional customer service, and our messaging platform incorporates advanced chatbot technology to achieve just that. Chatbots can handle routine inquiries",
        },
    ]

    return (
        <div className='max-w-7xl mx-auto py-7 px-5'>
            <div className='space-y-5 text-center'>
                <h1 className='text-5xl font-bold'>Frequently Asked Questions</h1>
                <p className='text-lg'>Have questions? We&apos;re here to help.</p>
            </div>

            <div className='my-8'>
                <div className='grid grid-cols-2 grid-rows-3 divide-y divide-[#909090] space-y-5'>
                    {askedQuestions.map((question, i) => (
                        <QuestionsAccordion key={i} question={question} id={question.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AskedQuestions