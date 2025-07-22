import React from 'react'

const Change = () => {
  return (
    <div className='p-4 flex flex-col text-xl gap-6 py-6'>
       <div>
            <p className='text-gray-500'>Next 15mins</p>
            <h1 className='font-bold'>Might Change You</h1>
       </div>
        <div>
            <p className='text-gray-500'>Just me and your thoughts!</p>
            <h1 className='text-black font-bold'>Give it a try, It`s free!</h1>
        </div>
        <div className='w-full h-50 rounded-md bg-gray-400'/>
        <button className='flex py-4 p-2 text-white text-xl w-full items-center bg-gradient-to-br from-blue-700 to-blue-400 justify-center rounded-full'>Analyse Me</button>
    </div>
  )
}

export default Change