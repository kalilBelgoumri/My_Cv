import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

function Contact() {
  return (
    <div>
      <div className="username__Dev flex justify-center items-center -ml-60 my-16 ">
        <div className="userName lg:flex items-center justify-center text-black text-5xl font-bold xl:text-6xl  hidden md:">
          <h5>BELGOUMRI KALIL </h5>
          <span className="w-36 h-2 bg-black ml-6"></span>
        </div>
      </div>
      <div className="devlopper lg:flex items-center justify-center text-black text-5xl font-bold xl:text-6xl  hidden md:">
        <h5>WEB DEVELOPPER FULL STACK </h5>
        <span className="w-36 h-2 bg-black ml-6"></span>
      </div>
      <div className="icon__social hidden md:flex items-center absolute mt-44 -mx-48 left-0 transform -rotate-90">
        <span className="w-36 h-2 bg-black ml-6"></span>
        <div className="social flex flex-col">
          <h1 className="text-black font-bold text-5xl ml-10"> SOCIAL </h1>
        </div>
        <div className="GitHub__social px-5 cursor-pointer">
          <BsGithub
            onClick={() => {
              window.location.href = 'https://github.com/kalilBelgoumri'
            }}
            size="40px"
            color="black"
          />
        </div>
        <div className="linkedin__social px-5 cursor-pointer">
          <TiSocialLinkedinCircular
            onClick={() => {
              window.location.href =
                'https://www.linkedin.com/in/kalil-belgoumri-1a5b17203/'
            }}
            size="55px"
            color="black"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
