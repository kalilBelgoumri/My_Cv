import React from 'react'
import { DiJavascript1, DiCss3, DiVisualstudio, DiScrum } from 'react-icons/di'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import {
  FaReact,
  FaDiscord,
  FaNodeJs,
  FaBootstrap,
  FaDocker,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiSpeedtest,
  SiMaterialui,
  SiSemanticuireact,
  SiPostman,
  SiAtom,
  SiSublimetext,
} from 'react-icons/si'
import { CgIfDesign } from 'react-icons/cg'
import { BsSlack } from 'react-icons/bs'
import { FiTrello, FiFigma } from 'react-icons/fi'

function Competences() {
  return (
    <>
      <div className="flex items-center justify-center mt-20 -mb-20"id="Competences">
        <h1 className="text-white text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
          COMPÉTENCES ET TECHNIQUES
        </h1>
      </div>
      <div className=" text-white my-32 ">
        <ul className="flex flex-col items-center justify-center">
          <span className="flex w-72 h-px bg-white sm:w-96"></span>
          <li>
            <div className="icon flex items-center justify-around mt-12">
              <DiJavascript1 size="30px" color="white" />
              <AiFillHtml5 size="30px" color="white" />
              <DiCss3 size="30px" color="white" />
            </div>
            <div className="my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
              <div className="bg-blue-500 font-bold text-md leading-none py-5 rounded-md text-center text-white">
                Javascript,HTML5/CSS3,SCSS,SASS
              </div>
            </div>
          </li>
          <li>
            <div className=" w-screen pt-3">
              <div className="icon flex items-center justify-around px-14  my-2">
                <FaBootstrap size="30px" color="white" />
                <SiTailwindcss size="30px" color="white" />
                <SiMaterialui size="30px" color="white" />
                <SiSemanticuireact size="30px" color="white" />
                <AiFillGithub size="30px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-500 overflow-hidden font-bold text-md leading-none py-5 rounded-md text-center text-white">
                  Bootstrap,Tailwind,Mui,Semantic,Git
                </div>
              </div>
            </div>
          </li>
          <li className="px-5">
            <div className=" w-full mt-2">
              <div className="icon flex items-center justify-around my-2">
                <FaReact size="30px" color="white" />
                <FaNodeJs size="30px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-500 font-bold text-md leading-none py-5 rounded-md text-center text-white">
                  React,Node.JS
                </div>
              </div>
            </div>
          </li>
          <li className="px-5">
            <div className=" w-full mt-2">
              <div className="icon flex items-center justify-around my-2">
                <FaDocker size="30px" color="white" />
                <SiPostman size="30px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-500 font-bold text-md leading-none py-5 rounded-md text-center text-white">
                  Docker,Postman,Express
                </div>
              </div>
            </div>
          </li>
          <li className="px-5">
            <div className=" w-full mt-2">
              <div className="icon flex items-center justify-around my-2">
                <DiVisualstudio size="30px" color="white" />
                <SiAtom size="30px" color="white" />
                <SiSublimetext size="30px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-500 font-bold text-md leading-none py-5 rounded-md text-center text-white">
                  Visual studio code,Atom,Sublime Text
                </div>
              </div>
            </div>
          </li>
          <li className="p-5">
            <div className=" w-full mt-2">
              <div className="icon flex items-center justify-around my-2">
                <DiScrum size="30px" color="white" />
                <CgIfDesign size="30px" color="white" />
                <SiSpeedtest size="30px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-500 font-bold text-md leading-none py-5 rounded-md text-center text-white">
                  Agile, Scrum, Design Patterns,Revues de code, Tests unitaires
                </div>
              </div>
            </div>
          </li>
          <li className="p-5">
            <div className=" w-full mt-2">
              <div className="icon flex items-center justify-evenly my-2">
                <BsSlack size="30px" color="white" />
                <FaDiscord size="30px" color="white" />
                <FiTrello size="30px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-500 font-bold text-md leading-none py-5 rounded-md text-center text-white">
                  Zenhub, Slack, Discord,Trello
                </div>
              </div>
            </div>
          </li>
          <li className="p-5">
            <div className=" w-full mt-2">
              <div className="icon flex items-center justify-around my-2">
                <FiFigma size="30px" color="white" />
              </div>
              <div className="my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-500 font-bold text-md leading-none py-5 rounded-md text-center text-white">
                  Figma
                </div>
              </div>
            </div>
          </li>
          <div className="ligne mt-10">
            <span className="flex w-72 h-px bg-white sm:w-96"></span>
          </div>
        </ul>
      </div>
    </>
  )
}

export default Competences
