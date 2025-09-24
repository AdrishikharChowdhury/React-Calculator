import React from 'react'
import { motion } from "framer-motion";

const Numkey = (props) => {

  return (
    <motion.button className='sm:text-2xl xs:text-xl text-lg text-white bg-orange-500 sm:size-20 xs:size-15 size-12 sm:p-5 xs:p-3 p-2 flex justify-center items-center rounded-xl shadow-lg shadow-gray-700 h-auto cursor-pointer' 
    onClick={props.onClick}
    whileHover={{
        scale: 1.06,
        boxShadow: '0 0 1rem 0.5rem orange, 0 0 3rem 0.1rem orange'
      }}
      whileTap={{
        scale: 0.9,
        boxShadow: '0 0 2rem 0.1rem orange, 0 0 3.2rem 0.1rem orange'
      }}
      transition={{
        type: "spring", stiffness: 400, damping: 17
      }}
    >
        {props.number}
    </motion.button>
  )
}

export default Numkey