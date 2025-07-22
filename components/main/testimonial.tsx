import React from 'react'

const Testimonials = () => {
  return (
    <div className='p-4 mt-5 flex flex-col gap-4'>
        <h1 className='font-bold text-black text-3xl'>Testimonial</h1>
        <div>
            <div className='p-2 rounded-md border-1 border-blue-500 flex flex-col gap-4 bg-blue-200'>
                <div><span className='text-9xl gap-0 text-blue-600'></span></div>
                <p className='text-xl'>
                    I did it twice just for the questions. Too hard hitting.
                    I never thought about myself so deeply before.
                </p>
                <div className='mt-3 items-center flex justify-between'>
                    <p className='text-xs text-gray-400'>Posted <br/> anounymously</p>
                    <h1 className='text-3xl text-blue-700 font-bold'>Deep</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials