import React from 'react'

interface pill{
    text:string
}

const Transpill = ({text}:pill) => {
  return (
    <div className='p-2 flex items-center text-white
    rounded-full px-4 border-gray-200 border-1 bg-white/9 backdrop-blur-[24px]'>
        {text}
    </div>
  )
}

export default Transpill