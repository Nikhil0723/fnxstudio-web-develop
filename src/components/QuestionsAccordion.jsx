'use client'

import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function QuestionsAccordion({ question, id }) {
    const [showAnswer, setShowAnswer] = useState(null)

    const toggle = (id) => {
        if (showAnswer === id) {
            return setShowAnswer(null);
        }

        console.log()

        setShowAnswer(id)
    }

    return (
        <div className='max-w-[34rem]'>
            <p className='flex items-center justify-between text-2xl font-bold cursor-pointer py-6' onClick={() => toggle(id)}>
                {question.question}
                <ChevronDownIcon className={`h-8 w-8 transition-all duration-500 ease-in-out ${showAnswer === null ? 'rotate-0' : 'rotate-180'}`} />
            </p>
            <p className={`text-lg text-neutral-600 font-medium max-h-0 overflow-hidden transition-all duration-500 ease-in-out ${showAnswer === null ? 'max-h-0 overflow-hidden' : '!h-auto !max-h-80'}`}>
                {question.answer}
            </p>
        </div>
    )
}

export default QuestionsAccordion