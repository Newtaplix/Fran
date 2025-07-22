import React from 'react'
import { Accordion } from '../accordion'

const Faqs = () => {
    const faqs = [
        {
        question: "Who may benefit from this test?",
        answer: "Everyone who is willing can take part in the tests" },
        {
        question: "Who may benefit from this test?",
        answer: "Everyone who is willing can take part in the tests" },
        {
        question: "Who may benefit from this test?",
        answer: "Everyone who is willing can take part in the tests" },
        {
        question: "Who may benefit from this test?",
        answer: "Everyone who is willing can take part in the tests" },
    ]
  return (
    <div className='p-4 bg-blue-600 mt-8 flex flex-col gap-6'>
        <h1 className='text-3xl text-white'>FAQs</h1>
        <div>
            {
                faqs.map((faq, i) => 
                <Accordion key={i} className='text-white bg-transparent' iconType='plus' title={faq.question}>
                    {faq.answer}
                </Accordion>
                )
            }
        </div>
    </div>
  )
}

export default Faqs