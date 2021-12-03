import React from 'react'

import { motion } from 'framer-motion'


function Background({ image }) {
  return (
    <div>
      <section className="">
      <motion.div animate=
       {{ scales : 0.8}}
      >
          <div className="bg-center blur-md">
            <img src={image} alt="Background" />
          </div>
          </motion.div>
      </section>
    </div>
  )
}

export default Background
