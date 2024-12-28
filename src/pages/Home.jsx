import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 justify-center">
            {/* React Logo Animation */}
            <div 
              className="w-[34] h-auto flex items-center justify-between"
            >
                          <motion.img
                src="/react.svg"
                className="w-32 h-32 mb-6"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                }}
                alt="React Logo"
            />
            <motion.img
                src="/framer.svg"
                className="w-32 h-32 mb-6"
                initial={{ y : 0 }}
                animate={{ y : [0,12,0] }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                }}
                alt="React Logo"
            />
            </div>
            {/* Page Content */}
            <h1 className="text-2xl font-bold mb-4">Welcome to React Template</h1>
            <p className="text-lg text-gray-400 mb-8 text-center max-w-md p-3">
                This page is powered by React, styled with Tailwind CSS, and animated using Framer Motion. Build your next project with ease and modern design!
            </p>

            {/* Button Animation */}
            <div
              className="w-auto h-auto flex items-center justify-center space-x-4"
            >
                        <motion.a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-900 transition text-white"
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.9,
                }}
            >
                Learn More
            </motion.a>
            <Link
              to="/login"
              className="px-6 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-900 transition text-white"
            >
            Auth Page
            </Link>
            </div>
            <div 
              className="max-w-3xl w-full p-4 flex items-center justify-center"
            >
              <p className="w-fit h-auto rounded-md px-2 py-1 bg-neutral-300 dark:bg-zinc-700 text-sm text-black dark:text-white">
    Edit <code className="font-mono text-blue-600">src/pages/Home.jsx</code> for Test use <code className="font-mono text-blue-600">src/pages/Test.jsx</code>
</p>
            </div>

        </div>
    );
};

export default Home;
