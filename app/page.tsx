"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Transpill from '@/components/transpill'
import { Menu } from 'lucide-react'


const animationVariaints:Variants= {
  invisible:{
    opacity: 0,
  },
  visible:{
    opacity: 1,
    transition: {
      duration: 0.6
    }
  },
  

}

const HomePage = () => {
  const [current, setCurrent] = useState(0)
  return (
    <div className='relative h-screen overflow-hidden'>


      {/* first screen */}

      {
        current === 0 && 
        <motion.div
         className='p-4 pt-15 relative text-2xl flex flex-col h-full text-black'>
           <div className='relative z-20'>
              <div className='flex-col text-4xl'>
                  <motion.p variants={animationVariaints} initial="invisible" animate="visible" exit="invisble">hi there,</motion.p>
                  <p className='flex gap-2 text-gray-600'>
                    
                    <motion.span variants={animationVariaints} initial="invisible" animate="visible" exit="invisble">i`m</motion.span>  
                    <motion.div transition={{duration: 0.5}} layoutId='logo' className='flex text-black flex-col gap-0 items-center justify-center w-fit'>
                        <h1 className='font-bold text-5xl m-0'>QUEST</h1>
                        <p className='text-xl'>BY FRATERNY</p>
                      </motion.div></p>
              </div>

              <motion.div variants={animationVariaints} initial="invisible" animate="visible" exit="invisble" className="mt-16">
                  <p>I can</p>
                  <h1 className='font-bold'>Hack Your Brain</h1>
                  <p>in 15 minutes</p>
              </motion.div>

                <motion.div variants={animationVariaints} initial="invisible" animate="visible" exit="invisble" onClick={() => setCurrent(current + 1)} className='w-fit h-fit rounded-full mt-16'>
                  <Transpill text='Analyse Me'/>
                </motion.div>
           </div>
           <motion.div transition={{duration: 0.5,}} layoutId='bg' className='absolute z-10 w-[420px] h-[400px] bg-radial from-40% from-blue-500 to-30% to-blue-300 flex -left-5 -right-5 
           -bottom-2 rounded-full blur-xl'/>
        </motion.div>
      }

      {/* second screen slide */}

      {
        current === 1 &&
        <AnimatePresence>
            <motion.div className='h-screen relative p-4'>
            <div className='h-full w-full z-20 relative'>
                <div className='flex justify-between fixed top-0 w-full z-90 p-2 left-0 text-black items-center '>
                  <div className='flex-1 items-center justify-center '>
                            <motion.div transition={{duration: 0.6}} layoutId='logo' className='flex text-black mx-auto flex-col gap-0 items-center justify-center w-fit'>
                              <h1 className='font-bold text-3xl m-0'>QUEST</h1>
                              <p className='text-xs'>BY FRATERNY</p>
                            </motion.div>
                  </div>
                    <motion.span variants={animationVariaints} initial="invisible" animate="visible" exit="invisble"><Menu/></motion.span>
                </div>
                <motion.div variants={animationVariaints} initial="invisible" animate="visible" exit="invisble" className='absolute text-white -translate-y-1/2 text-xl flex flex-col gap-6 top-1/2 w-full text-center'>
                  <p>You`d be shocked to know, Havard researchers suggest that</p>
                  <div className='w-[60%] mx-auto'>
                      <h1 className='text-3xl font-bold'>95%</h1>
                      <p>of people believe they are <span className='font-bold'>self-aware</span> but only</p>
                  </div>
                  <h1 className='text-3xl font-bold'>10-15% <br/> <span className='text-2xl font-light'>actually are</span></h1>
                </motion.div>
              

            </div>
            <motion.div transition={{duration: 0.5}} layoutId='bg' className='absolute z-10 w-[470px] h-[470px] bg-radial from-40% from-blue-500 to-20% to-blue-300 flex
            bottom-0 top-1/2 -translate-1/2 left-1/2 -translate-x-1/2 rounded-full blur-xl'/>

          </motion.div>
        </AnimatePresence>
      }
     
       
    </div>
  )
}

export default HomePage