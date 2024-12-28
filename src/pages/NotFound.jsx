import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useNavigate } from 'react-router-dom'


export default function NotFound() {
  const navigate = useNavigate()
  const glitchControls = useAnimation()

  useEffect(() => {
    const glitchAnimation = async () => {
      while (true) {
        await glitchControls.start({
          x: [0, -4, 4, -4, 4, 0],
          y: [0, 4, -4, 4, -4, 0],
          transition: { duration: 0.8 }
        })
        await new Promise(resolve => setTimeout(resolve, 2000))
      }
    }
    glitchAnimation()
  }, [glitchControls])

 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden transition-colors duration-300 dark:bg-gray-900  bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="text-[12rem] sm:text-[35rem] font-bold text-gray-100 dark:text-gray-800"
          animate={glitchControls}
        >
          404
        </motion.span>
      </motion.div>
      
      {/* Content */}
      <div className="z-10 text-center max-w-md mx-auto space-y-6">
        <motion.h1 
          className="text-2xl font-bold text-gray-900 dark:text-gray-100"
          variants={itemVariants}
        >
          Nothing to see here
        </motion.h1>
        <motion.p 
          className="text-gray-500 dark:text-gray-400"
          variants={itemVariants}
        >
          Page you are trying to open does not exist. You may have mistyped
          the address, or the page has been moved to another URL. If you
          think this is an error contact support.
        </motion.p>
        <motion.button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Take me back to home page
        </motion.button>
      </div>
    </motion.div>
  )
}
