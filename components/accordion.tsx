"use client"
import React, { useState } from 'react'
import { Plus, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type iconType = "plus" | "drop"
type theme = "dark" | "light"

interface accordion{
  iconType?: iconType,
  className?:string,
  title?:string, 
  children?: React.ReactNode,
  variant?: theme
}

const variants = {
    light: "text-black rounded-md bg-white shadow-sm",
    dark: "text-gray-200 rounded-md bg-gray-200/9",
}

export const Accordion = ({iconType= "drop", className, title, children, variant }:accordion) => {
  const icon = iconType === "drop" ? <ChevronDown size={24}/> : <Plus size={24}/>
  const theme = variant === "dark" ? variants.dark : variant === "light" ? variants.light : ""
  const [isOpen, setIsOpen] = useState(false)
 
  return (
        <div className={`p-2 w-[100%] ${theme} ${className}`}>
             <div className='justify-between gap-4 w-full flex items-center py-2'>
                <div className='text-xl'>
                    {title}
                </div>

                  {/* animated button */}
                <motion.div 
                animate={{rotate : isOpen && iconType === "drop" ? "180deg" : iconType === "plus" && isOpen ? "45deg" : 0}} 
                transition={{
                    stiffness: 0.1
                }}
                onClick={() => setIsOpen(!isOpen)} 
                className='p-2 rounded-md hover:bg-gray-200/5 cursor-pointer'> 
                    <span>{icon}</span>
                </motion.div>
             </div>

             {/* Animated drop body */}

            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div
                    initial={{
                       height: 0,
                    }}
                    animate={{
                        height: "auto"
                    }}
                    exit={{
                        height: 0
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
       
                     className='overflow-hidden w-full'>
                       {children}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
  )
}
