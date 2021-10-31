import React from 'react'

function AboutUs() {
    return (
        <div className="about__Us flex flex-col items-center justify-center text-white mx-40 my-52">
        <h1 className="font-bold text-4xl p-32 flex items-center justify-center absolute mb-64">
        À PROPOS
        </h1>
        <h3 className="container flex items-center justify-center text-center font-bold text-3xl mb-10">
          Passionné des nouvelles technologies et du code, je suis
          actuellement ouvert aux opportunités CDI en tant que développeur
          Front-End ou Full Stack Javascript, pour toute proposition, veuillez
          me contacter
        </h3>
        <div className="contact flex text-white font-bold invisible md:visible w-auto border-4 border-purple-500 px-12 py-2 rounded-md cursor-pointer animate-bounce">
          <a href="mailto:kalil.belgoumri@gmail.com">Contact</a>
        </div>
      </div>
    )
}

export default AboutUs
