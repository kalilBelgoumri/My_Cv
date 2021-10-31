import React from 'react'
import { BsGithub, BsKanbanFill } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

function Contact() {
    return (
        <div>
             <div className="userName hidden md:flex items-center justify-start text-white my-20 mx-40 text-xl font-bold">
          <h5>BELGOUMRI KALIL </h5>
          <span className="w-36 h-2 bg-white ml-6"></span>
        </div>
        <div className="devlopper hidden md:flex items-center justify-start text-white my-20 mx-40 text-xl font-bold">
          <h5>WEB DEVELOPPER FULL STACK </h5>
          <span className="w-36 h-2 bg-white ml-6"></span>
        </div>
        <div className="icon__social hidden md:flex items-center absolute my-72 -mx-40 left-0 transform -rotate-90">
          <span className="w-36 h-2 bg-white ml-6"></span>
          <div className="social flex flex-col">
            <h1 className="text-white font-bold text-3xl "> SOCIAL </h1>
          </div>
          <div className="GitHub__social px-5 cursor-pointer">
            <BsGithub
              onClick={() => {
                window.location.href = 'https://github.com/kalilBelgoumri';
              }}
              size="40px"
              color="white"
            />
          </div>
          <div className="linkedin__social px-5 cursor-pointer">
            <TiSocialLinkedinCircular onClick={() => {
                window.location.href = 'https://www.linkedin.com/in/kalil-belgoumri-1a5b17203/';
              }} size="55px" color="white" />
          </div>
        </div>
        </div>
    )
}

export default Contact
