"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Transpill from '@/components/transpill'
import { Menu } from 'lucide-react'
import Point from '@/components/points'
import Change from '@/components/main/change'
import Testimonials from '@/components/main/testimonial'
import Faqs from '@/components/main/faqs'



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
  const points = [
    "Are more effective leaders.",
    "Perform better at work.",
    "Are more confident."
    
]
const points2 = [
  "How you really think?",
  "What's standing in your way?",
  "How the world actually sees you?",
  "What could truely change your life?"
]
  return (
    <div className='relative h-screen overflow-hidden'>


      {/* first screen */}

      {
        current === 0 && 
        <motion.div
         className='p-4 pt-15 relative text-2xl flex flex-col h-full text-black'>
           <div onClick={() => setCurrent(current + 1)} className='relative z-20'>
              <div className='flex-col text-4xl'>
                  <motion.p variants={animationVariaints} initial="invisible" animate="visible" exit="invisble">hi there,</motion.p>
                  <div className='flex gap-2 text-gray-600'>
                    
                    <motion.span variants={animationVariaints} initial="invisible" animate="visible" exit="invisble">i`m</motion.span>  
                    <motion.div transition={{duration: 0.5}} layoutId='logo' className='flex text-black flex-col gap-0 items-center justify-center w-fit'>
                        <h1 className='font-bold text-5xl m-0'>QUEST</h1>
                        <p className='text-xl'>BY FRATERNY</p>
                      </motion.div></div>
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
           <motion.div transition={{duration: 0.5,}} layoutId='bg' className='absolute z-10 w-[420px] h-[400px] bg-radial from-40% from-blue-600 to-30% to-blue-400 flex -left-5 -right-5 
           -bottom-2 rounded-full blur-xl'/>
        </motion.div>
      }

      {/* second screen slide */}

      {
        current === 1 &&
        <AnimatePresence>
            <motion.div onClick={() => setCurrent(current + 1)} className='h-screen relative p-4'>
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
            <motion.div transition={{duration: 0.5}} layoutId='bg' className='absolute z-10 w-[470px] h-[470px] bg-radial from-40% from-blue-600 to-20% to-blue-400 flex
            bottom-0 top-1/2 -translate-1/2 left-1/2 -translate-x-1/2 rounded-full blur-xl'/>

          </motion.div>
        </AnimatePresence>
      }

        {/* Third screen */}
      {

        current === 2 &&
        <AnimatePresence>
            <motion.div onClick={() => setCurrent(current + 1)} className='h-screen relative p-4'>
            <div className='h-full w-full z-20 relative pt-20 flex items-center'> 
                
                {/* nav bar */}
                <div className='flex justify-between fixed top-0 w-full z-90 p-2 left-0 text-white items-center '>
                  <div className='flex-1 items-center justify-center '>
                            <motion.div transition={{duration: 0.6}} layoutId='logo' className='flex text-white mx-auto flex-col gap-0 items-center justify-center w-fit'>
                              <h1 className='font-bold text-3xl m-0'>QUEST</h1>
                              <p className='text-xs'>BY FRATERNY</p>
                            </motion.div>
                  </div>
                    <motion.span variants={animationVariaints} initial="invisible" animate="visible" exit="invisble"><Menu/></motion.span>
                </div>      
               <div className='text-2xl flex-col gap-16 flex text-white'>
                  {
                      points.map((point, i) => 
                      <Point key={i} text={point} number={i + 1}/>
                      )
                  }
               </div>
            </div>
            <motion.div transition={{duration: 0.8}} layoutId='bg' className='absolute z-10 w-[800px] h-[800px] bg-radial from-20% from-blue-600 to-10% to-blue-400 flex
            bottom-0 top-1/2 -translate-1/2 left-1/2 -translate-x-1/2 rounded-md blur-xl'/>

          </motion.div>
        </AnimatePresence>
      }


      {
        current === 3 &&
        <div className='relative h-full overflow-y-scroll'>
              <div className='flex justify-between fixed top-0 w-full z-90 p-2 left-0 text-white bg-blue-600 items-center '>
                    <div className='flex-1 items-center justify-center '>
                              <motion.div transition={{duration: 0.6}} layoutId='logo' className='flex text-white mx-auto flex-col gap-0 items-center justify-center w-fit'>
                                <h1 className='font-bold text-3xl m-0'>QUEST</h1>
                                <p className='text-xs'>BY FRATERNY</p>
                              </motion.div>
                  </div>
                    <motion.span variants={animationVariaints} initial="invisible" animate="visible" exit="invisble"><Menu/></motion.span>
              </div>   

              {/* Hero section */}
              <div className='max-h-400 relative bg-blue-600 overflow-hidden gap-7 text-white text-xl w-full p-4 py-20'>
                  <div className='gap-8 flex relative flex-col z-20'>
                      <div className='w-1/2 text-left text-4xl border-b-2 border-white'>
                          <motion.p variants={animationVariaints} initial="invisible" animate="visible" exit="invisble">What I will do?</motion.p>
                      </div>
                      <p>I will decode your hidden..</p>
                      <motion.div variants={animationVariaints} initial="invisible" animate="visible" exit="invisble" className='flex flex-wrap gap-2'>
                          <Transpill text='Motivations'/>
                          <Transpill text='Ambitions'/>
                          <Transpill text='Patterns'/>
                          <Transpill text='Triggers'/>
                          <Transpill text='Fears'/>
                      </motion.div>
                      <p>So you`ll finally understand:</p>
                      <motion.div variants={animationVariaints} initial="invisible" animate="visible" exit="invisble" className='flex flex-col text-[16px] gap-6'>
                          {
                              points2.map((point, i) => 
                              <Point key={i} text={point} number={i + 1}/>
                              )
                          }
                      </motion.div>
                  </div>
                  <motion.div transition={{duration: 0.8}} layoutId='bg' className='absolute z-10 w-[400px] h-[400px] bg-radial from-10% from-blue-600/5 via-80% to-40% via-blue-400 to-blue-600 flex
                    bottom-0 top-1/2 -translate-y-1/2 -right-30  rounded-full blur-xl'/>
                  {/* <div className='w-full h-[70%] top-20 z-10 bg-radial -right-30
                  from-blue-600 to-blue-400 blur-[18px]
                  absolute rounded-full '/> */}

              </div>
          <Change/>
          <Testimonials/>
          <Faqs/>
     </div>
      }
     
       
    </div>
  )
}

export default HomePage