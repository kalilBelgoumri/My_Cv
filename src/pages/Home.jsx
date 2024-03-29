import React, { useEffect } from 'react'
import Contact from '../components/Contact'
import Competences from '../components/Competences'
import Cardportofolio from '../components/CardPortofolio'
import retrowild from '../assets/retroWild.webp'
import SpacePark from '../assets/SpacePark.webp'
import cv from '../documents/KALIL_BELGOUMRI.pdf'
import Header from '../components/Header'
import Footer from '../components/Footer'
import aboutImg from '../assets/about.webp'
import dag from '../assets/dag.webp'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import projects from '../data/projects'

const Home = () => {
  useEffect(() => {
    AOS.refresh()
    AOS.init({
      duration: 1200,
    })
  }, [])

  const bonjour =
    'Bonjour les Amis Dev__00 mon site a été fait par moi même avec React Semantic et Tailwind merci de respecter mon travail :)'

  console.log(bonjour)
  return (
    <div className="home overflow-hidden" id="Home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col"
      >
        <Header />
        {/* ** Contact ** */}
        <main className=" flex flex-col justify-center items-center bg-gradient-to-t from-gray-700 via-gray-900 to-black">
          <div className="contact mb-30">
            <Contact />
          </div>
          {/* ** CV ** */}
          <div className="contact flex items-center justify-center text-white font-bold border-2 border-white px-16 py-3 rounded-xl cursor-pointer focus:text-blue-700 ">
            <a href={cv}> Télécharger mon CV</a>
          </div>
          <div className="test"></div>
          {/* ** Competences ** */}
          <div className="competences pb-0" id="competences">
            <Competences />
          </div>

          {/* ** Portofolio ** */}
          <h1
            className="text-white text-4xl md:text-6xl font-extrabold text-center -mt-20"
            id="portfolio"
          >
            MES PROJETS
          </h1>

          <div
            className="grid  gap-4 px-10 my-10 items-center justify-center lg:grid lg:grid-cols-3 "
            data-aos="zoom-in-down"
          >
            {Object.entries(projects).map(([heading, projectData], index) => (
              <div key={index} className="line-clamp-1 hover:line-clamp-none">
                <Cardportofolio
                  heading={heading}
                  body={projectData.body}
                  image={projectData.image}
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.href = projectData.url
                  }}
                />
              </div>
            ))}
          </div>

          {/* ** AboutUs ** */}
          <div
            className="about mb-10 flex flex-col lg:grid grid-flow-col px-20"
            data-aos="fade-up-left"
          >
            <div className="font-semibold my-52 flex flex-col items-center lg:justify-center">
              <span
                className="text-white flex text-2xl sm:text-3xl md:text-3xl lg:text-6xl"
                id="apropos"
              >
                À PROPOS DE MOI
              </span>
              <span
                className=" text-white text-justify font-bold flex mt-20 text-xl sm:text-2xl md:text-3xl lg:text-3xl w-5/6 lg:text-justify tracking-tighter xl:text-3xl"
                id="passion"
              >
                Passionné des nouvelles technologies et du code, je suis
                actuellement ouvert aux opportunités en Stage ou en Alternance
                en tant que développeur Front-End ou Full Stack Javascript, pour
                toute proposition, veuillez me contacter.
              </span>
            </div>
            <div className="background -mt-36 flex items-center justify-center lg:justify-end">
              <img src={aboutImg} width="500" height="500" alt="AboutImg" />
            </div>
          </div>
        </main>
        {/* ** Footer ** */}

        <Footer />
      </motion.div>
    </div>
  )
}

export default Home
