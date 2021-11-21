import React from 'react'
import Contact from '../components/Contact'
import Competences from '../components/Competences'
import Cardportofolio from '../components/CardPortofolio'
import retrowild from '../assets/retroWild.png'
import SpacePark from '../assets/SpacePark.png'
import cv from '../documents/Belgoumri_kalil_cv.pdf'
import Header from '../components/Header'
import Footer from '../components/Footer'
import aboutImg from '../assets/about.png'
import { motion } from 'framer-motion'

const Home = () => {
  const bonjour =
    'Bonjour les Amis Dev__00 mon site a été fait par moi même avec React Semantic et Tailwind merci de respecter mon travail :)'

  console.log(bonjour)
  return (
    <div className="home overflow-visible" id="Home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col"
      >
        <Header />

        {/* <Background image={image} /> */}

        {/* ** Contact ** */}
        <main className=" flex flex-col justify-center items-center bg-gradient-to-t from-gray-700 via-gray-900 to-black">
          <div className="contact mb-30">
            <Contact />
          </div>
          {/* ** CV ** */}
          <div className="contact flex items-center justify-center text-white font-bold border-2 border-white px-16 py-3 rounded-sm cursor-pointer focus:text-blue-700 ">
            <a href={cv}> Télécharger mon CV</a>
          </div>
          <div className="test"></div>
          {/* ** Competences ** */}
          <div className="competences pb-0" id="competences">
            <Competences />
          </div>

          {/* ** Portofolio ** */}
          <h1
            className="text-white text-4xl md:text-6xl font-extrabold text-center mt-16"
            id="portfolio"
          >
            MES PROJETS
          </h1>
          <div className="card__portofolio flex items-center justify-center flex-col px-14 sm:w-4/5 md:w-9/12 lg:w-10/12 pt-20 xl:w-2/3">
            <div className="retro__Wild flex items-center justify-center py-5">
              <h3 className="text-center text-red-600 text-3xl font-bold">
                SpacePark
              </h3>
            </div>
            <div className="portofolio flex space-x-4">
              <Cardportofolio
                image={SpacePark}
                site="https://lyon-js-sept21-p2-g1-front.comicscrip.duckdns.org/"
              />
            </div>
            <div className="retro__Wild flex items-center justify-center py-5">
              <h3 className="mb-10 text-center text-red-600 text-3xl font-bold">
                RetroWild
              </h3>
            </div>
            <div className="portofolio flex pb-10">
              <Cardportofolio
                image={retrowild}
                site="https://space-park.netlify.app/"
              />
            </div>
          </div>
          {/* ** AboutUs ** */}
          <div className="about mb-10 flex flex-col lg:grid grid-flow-col px-20">
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
              <img src={aboutImg} alt="AboutImg" />
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
