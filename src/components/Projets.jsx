import React from 'react'
import { Divider, Grid, Segment } from 'semantic-ui-react'
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
const Projets = () => (
  <Segment>
    <Grid columns={2} relaxed="very">
      <Grid.Column>
        <ul className="relative">
          <li className="">
            <div className="icon flex items-center justify-around my-2 ">
              <FaReact size="30px" color="black" />
              <FaNodeJs size="30px" color="black" />
              <FaBootstrap size="30px" color="black" />
              <SiTailwindcss size="30px" color="black" />
              <SiMaterialui size="30px" color="black" />
              <SiSemanticuireact size="30px" color="black" />
              <AiFillGithub size="30px" color="black" />
              <FaDocker size="30px" color="black" />
              <SiPostman size="30px" color="black" />
            </div>

            <div className="icon flex items-center justify-around mt-12">
              <DiJavascript1 size="30px" color="black" />
              <AiFillHtml5 size="30px" color="black" />
              <DiCss3 size="30px" color="black" />
            </div>
          </li>
          <li className="px-5">
            <div className="icon flex items-center justify-around my-2">
              <DiVisualstudio size="30px" color="black" />
              <SiAtom size="30px" color="black" />
              <SiSublimetext size="30px" color="black" />
            </div>
          </li>
          <li className="p-5">
            <div className="icon flex items-center justify-around my-2">
              <DiScrum size="30px" color="black" />
              <CgIfDesign size="30px" color="black" />
              <SiSpeedtest size="30px" color="black" />
            </div>
          </li>
          <li className="p-5">
            <div className="icon flex items-center justify-around my-2">
              <BsSlack size="30px" color="black" />
              <FaDiscord size="30px" color="black" />
              <FiTrello size="30px" color="black" />
            </div>
          </li>
          <li className="p-5">
            <div className="icon flex items-center justify-around my-2">
              <FiFigma size="30px" color="black" />
            </div>
          </li>
        </ul>
      </Grid.Column>
      <Grid.Column>
       <p> Javascript,HTML5/CSS3,SCSS,SASS</p>
        <div className="bg-blue-500 overflow-hidden font-bold text-md leading-none py-3 animate-pulse rounded-md text-center text-white">
          React,Node.JS,Bootstrap,Tailwind,Mui,Semantic,Express,Git,
          Docker,Postman
        </div>
        <div className="bg-blue-500 font-bold text-md leading-none py-3  animate-pulse rounded-md text-center text-white">
          Visual studio code,Atom,Sublime Text
        </div>
        <div className="bg-blue-500 font-bold text-md leading-none py-3 rounded-md text-center text-white">
          Agile, Scrum, Design Patterns,Revues de code, Tests unitaires
        </div>
        <div className="bg-blue-500 font-bold text-md leading-none py-3 rounded-md text-center text-white">
          Zenhub, Slack, Discord,Trello
        </div>
        <div className="bg-blue-500 font-bold text-md leading-none py-3 rounded-md text-center text-white">
          Figma
        </div>
      </Grid.Column>
    </Grid>

    <Divider vertical>And</Divider>
  </Segment>
)

export default Projets
