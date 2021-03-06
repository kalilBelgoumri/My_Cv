import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="icon__social flex items-center justify-center mt-20 -mb-20  md:hidden">
        <div className="GitHub__social px-5 cursor-pointer">
          <BsGithub
            onClick={() => {
              window.location.href = 'https://github.com/kalilBelgoumri'
            }}
            size="60px"
            color="white"
          />
        </div>
        <div className="linkedin__social px-5 cursor-pointer">
          <TiSocialLinkedinCircular
            onClick={() => {
              window.location.href =
                'https://www.linkedin.com/in/kalil-belgoumri-1a5b17203/'
            }}
            size="80px"
            color="white"
          />
        </div>
      </div>
      <motion.div
        initial={{ y: '-200px' }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5 }}
        className="username__Dev flex mt-16 "
      >
        <div className="userName  flex md:ml-4 mt-32 pb-30 items-center  lg:flex lg:items-center justify-center">
          <h5 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
            BELGOUMRI KALIL{' '}
          </h5>
          <span className="hidden md:flex w-36 h-1 bg-white ml-6"></span>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: '-200px' }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5 }}
        className="devlopper flex sm:ml-4 mt-28 mb-28 items-center lg:flex lg:items-center justify-center"
      >
        <h5 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl xl:text-7xl">
          DEVELOPPER WEB FREELANCE
        </h5>
        <span className="hidden md:flex w-36 h-1 bg-white ml-6"></span>
      </motion.div>
      <div className="icon__social md:flex transform -rotate-90 items-center absolute mt-44 -mx-48 left-0">
        <span className="w-36 h-2 bg-white ml-6"></span>
        <div className="social flex flex-col">
          <h1 className="text-white font-bold text-5xl ml-10"> SOCIAL </h1>
        </div>
        <div className="GitHub__social px-5 cursor-pointer">
          <BsGithub
            onClick={() => {
              window.location.href = 'https://github.com/kalilBelgoumri'
            }}
            size="40px"
            color="white"
          />
        </div>
        <div className="linkedin__social px-5 cursor-pointer">
          <TiSocialLinkedinCircular
            onClick={() => {
              window.location.href =
                'https://www.linkedin.com/in/kalil-belgoumri-1a5b17203/'
            }}
            size="55px"
            color="white"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
