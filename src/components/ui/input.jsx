"use client"

import * as React from "react"
import { motion } from 'framer-motion'

const Input = React.forwardRef(
  ({ className, type, label, helper, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)

    const variants = {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    }

    return (
      <motion.div
        className="flex flex-col items-start justify-items-start space-y-1.5"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {label && (
          <motion.label
            htmlFor={props.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            variants={variants}
          >
            {label}
          </motion.label>
        )}
        <motion.input
          type={type}
          className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          variants={variants}
          {...props}
        />
        {helper && (
          <motion.p 
            variants={variants}
            className={`text-xs ${isFocused ? 'text-foreground' : 'text-muted-foreground'}`}
          >
            {helper}
          </motion.p>
        )}
      </motion.div>
    )
  }
)
Input.displayName = "Input"

export { Input }

