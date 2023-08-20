import React from 'react'

import { motion } from 'framer-motion'

type BackgroundProps = {
  image: string
  scale?: number
}

const Background = ({ image, scale = 1 }: BackgroundProps) => {
  return (
    <div>
      <section className="">
        <motion.div animate={{ scale: scale }}>
          <div className="bg-center blur-md">
            <img src={image} alt="Background" />
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Background
