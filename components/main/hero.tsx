import React from 'react'
import Transpill from '../transpill'
import Point from '../points'

const Hero = () => {
    const points = [
        "How you really think?",
        "What's standing in your way",
        "How the world actually sees you",
        "What could truely change your life."
    ]
  return (
    <div className='max-h-400 relative bg-blue-600 overflow-hidden gap-7 text-white text-xl w-full p-4 py-20'>
        <div className='gap-8 flex relative flex-col z-20'>
            <div className='w-1/2 text-left text-5xl border-b-2 border-white'>
                <p>What I will do?</p>
            </div>
            <p>I will decode your hidden..</p>
            <div className='flex flex-wrap gap-2'>
                <Transpill text='Motivations'/>
                <Transpill text='Ambitions'/>
                <Transpill text='Patterns'/>
                <Transpill text='Triggers'/>
                <Transpill text='Fears'/>
            </div>
            <p>So you`ll finally understand:</p>
            <div className='flex flex-col gap-6'>
                {
                    points.map((point, i) => 
                    <Point key={i} text={point} number={i + 1}/>
                    )
                }
            </div>
        </div>
        <div className='w-full h-[70%] top-20 z-10 bg-radial -right-30
        from-blue-600 to-blue-400 blur-[18px]
        absolute rounded-full '/>

    </div>
  )
}

export default Hero