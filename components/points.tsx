import React from 'react'

interface point{
    text:string,
    number:number
}

const Point = ({text, number}:point) => {
  return (
    <div className='flex justify-between border-b-2 border-gray-200'>
        <p>{text}</p>
        <p>{number}</p>
    </div>
  )
}

export default Point