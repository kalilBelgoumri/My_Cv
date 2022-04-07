import React, { useEffect } from 'react'
import { Divider } from '@material-ui/core'
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
  SiNextdotjs,
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
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Competences() {
  useEffect(() => {
    AOS.refresh()
    AOS.init({
      duration: 1200,
    })
  }, [])

  return (
    <>
      <div
        className="flex items-center justify-center mt-20 -mb-20"
        id="Competences"
      >
        <h1 className="text-white FONT text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          COMPÉTENCES ET TECHNIQUES
        </h1>
      </div>
      <div className=" text-white my-32">
        <ul className="flex flex-col items-center justify-center">
          <span className="flex w-72 h-px bg-white sm:w-96"></span>
          <li>
            <div
              className="icon flex items-center justify-around mt-12"
              data-aos="fade-right"
            >
              <DiJavascript1 size="50px" color="white" />
              <AiFillHtml5 size="50px" color="white" />
              <DiCss3 size="50px" color="white" />
            </div>
            <div className="my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
              <div className="bg-blue-900 border-2 border-white tracking-widest font-bold text-sm  md:text-lg lg:text-xl leading-none py-5 rounded-md text-center text-white">
                JAVASCRPT,HTML5/CSS3,SCSS,SASS
              </div>
            </div>
          </li>
          <li>
            <div className=" w-screen pt-3">
              <div
                className="icon flex items-center justify-around px-14  my-2"
                data-aos="fade-left"
              >
                <FaBootstrap size="50px" color="white" />
                <SiTailwindcss size="50px" color="white" />
                <SiMaterialui size="50px" color="white" />
                <SiSemanticuireact size="50px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-900 border-2 border-white font-bold uppercase text-sm  md:text-lg lg:text-xl leading-none py-5 rounded-md text-center text-white">
                  Bootstrap,Tailwind,Mui,Semantic
                </div>
              </div>
            </div>
          </li>
          <li className="px-5">
            <div className=" w-full mt-2">
              <div
                className="icon flex items-center justify-around my-2"
                data-aos="fade-right"
              >
                <FaReact size="50px" color="white" />
                <SiNextdotjs size="50px" color="white" />
                <FaNodeJs size="50px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-900 border-2 border-white uppercase font-bold text-sm  md:text-lg lg:text-xlleading-none py-5 rounded-md text-center text-white">
                  React,Next.js,Node.JS
                </div>
              </div>
            </div>
          </li>
          <li className="px-5">
            <div className=" w-full mt-2">
              <div
                className="icon flex items-center justify-around my-2"
                data-aos="fade-left"
              >
                <FaDocker size="50px" color="white" />
                <SiPostman size="50px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-900 border-2 border-white uppercase font-bold text-sm  md:text-lg lg:text-xl leading-none py-5 rounded-md text-center text-white">
                  Docker,Postman,Express
                </div>
              </div>
            </div>
          </li>
          <li className="px-5">
            <div className=" w-full mt-2">
              <div
                className="icon flex items-center justify-around my-2"
                data-aos="fade-right"
              >
                <DiVisualstudio size="50px" color="white" />
                <SiAtom size="50px" color="white" />
                <SiSublimetext size="50px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-900 border-2 border-white uppercase font-bold text-sm  md:text-lg lg:text-xl leading-none py-5 rounded-md text-center text-white">
                  Visual studio code,Atom,Sublime Text
                </div>
              </div>
            </div>
          </li>
          <li className="p-5">
            <div className=" w-full mt-2">
              <div
                className="icon flex items-center justify-around my-2"
                data-aos="fade-left"
              >
                <DiScrum size="50px" color="white" />
                <CgIfDesign size="50px" color="white" />
                <SiSpeedtest size="50px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-900 border-2 border-white uppercase font-bold text-sm  md:text-lg lg:text-xl leading-none py-5 rounded-md text-center text-white">
                  Agile, Scrum, Design Patterns,Revues de code, Tests unitaires
                </div>
              </div>
            </div>
          </li>
          <li className="p-5">
            <div className=" w-full mt-2">
              <div
                className="icon flex items-center justify-evenly my-2"
                data-aos="fade-right"
              >
                <BsSlack size="50px" color="white" />
                <FaDiscord size="50px" color="white" />
                <FiTrello size="50px" color="white" />
                <AiFillGithub size="50px" color="white" />
              </div>
              <div className=" my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-900 border-2 border-white uppercase font-bold text-sm  md:text-lg lg:text-xl leading-none py-5 rounded-md text-center text-white">
                  Zenhub, Slack, Discord,Trello,Git
                </div>
              </div>
            </div>
          </li>
          <li className="p-5">
            <div className=" w-full mt-2">
              <div
                className="icon flex items-center justify-around my-2"
                data-aos="fade-left"
              >
                <FiFigma size="50px" color="white" />
              </div>
              <div className="my-5 w-screen px-8 md:px-12 lg:px-42 xl:px-32">
                <div className="bg-blue-900 border-2 border-white uppercase font-bold text-sm  md:text-lg lg:text-xl  leading-none py-5 rounded-md text-center text-white">
                  Figma
                </div>
              </div>
            </div>
          </li>
          <div className="ligne mt-10">
            <Divider style={{ width: '200%', backgroundColor: 'white' }} />
          </div>
        </ul>
      </div>
    </>
  )
}
