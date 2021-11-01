import React from 'react';
import { BsGithub, BsKanbanFill } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

function Contact() {
  return (
    <div>
      <div className="username__Dev mr-52 mt-36 rounded border-blue-900 border-solid border-2 pr-56 pl-10 py-10 ">
        <div className="userName hidden md:flex items-center justify-center text-black mt-20 text-3xl font-bold">
          <h5>BELGOUMRI KALIL </h5>
          <span className="w-36 h-2 bg-black ml-6"></span>
        </div>
        <div className="devlopper hidden md:flex items-center justify-center text-black mt-36 text-3xl font-bold">
          <h5>WEB DEVELOPPER FULL STACK </h5>
          <span className="w-36 h-2 bg-black ml-6"></span>
        </div>
      </div>
      <div className="icon__social hidden md:flex items-center absolute -my-6 -mx-48 left-0 transform -rotate-90">
        <span className="w-36 h-2 bg-black ml-6"></span>
        <div className="social flex flex-col ml-10">
          <h1 className="text-black font-bold text-3xl "> SOCIAL </h1>
        </div>
        <div className="GitHub__social px-5 cursor-pointer">
          <BsGithub
            onClick={() => {
              window.location.href = 'https://github.com/kalilBelgoumri';
            }}
            size="40px"
            color="black"
          />
        </div>
        <div className="linkedin__social px-5 cursor-pointer">
          <TiSocialLinkedinCircular
            onClick={() => {
              window.location.href =
                'https://www.linkedin.com/in/kalil-belgoumri-1a5b17203/';
            }}
            size="55px"
            color="black"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
