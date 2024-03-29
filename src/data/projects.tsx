import React from 'react'
import SpacePark from '../assets/SpacePark.webp'
import retroWild from '../assets/retroWild.webp'
import dag from '../assets/dag.webp'

type ProjectProps = {
  image: string
  url: string
  body: JSX.Element
}

type ProjectsProps = {
  [key: string]: ProjectProps
}

const projects: ProjectsProps = {
  SpacePark: {
    body: (
      <span className="line-clamp-1 hover:line-clamp-none">
        Projet réaliser avec REACT, TAILWIND SEMANTIC et GOOGLE MAP. Site dédié
        au partage de place de parking. Link :
        https://lyon-Js-Sept21-p2-g1-front.comicscrip.duckdns.org/ GitHub :
        https://github.com/WildCodeSchool/lyon-js-sept21-p2-g1-front
      </span>
    ),
    image: SpacePark, // Assurez-vous que SpacePark est correctement importé ou fourni une URL d'image ici.
    url: 'https://lyon-js-sept21-p2-g1-front.comicscrip.duckdns.org/',
  },
  RetroWild: {
    body: (
      <span className="line-clamp-1 hover:line-clamp-none">
        Projet réaliser avec HTML JAVASCRIPT et CSS. Site rétro gaming. Link :
        https://retrowild.netlify.app/ GitHub :
        https://github.com/Yannis-Barba/retrowild
      </span>
    ),
    image: retroWild, // Assurez-vous que retrowild est correctement importé ou fourni une URL d'image ici.
    url: 'https://retrowild.netlify.app/',
  },
  DAGSYS: {
    body: (
      <span className="line-clamp-1 hover:line-clamp-none">
        Projet réaliser avec REACT, NEXTJS, TAILWIND, MUI Leaflet Map. Link :
        https://p3dag.duckdns.org/ GitHub :
        https://github.com/WildCodeSchool/p3-dag-lyon-js-react-sept21
      </span>
    ),
    image: dag, // Assurez-vous que dag est correctement importé ou fourni une URL d'image ici.
    url: 'https://p3dag.duckdns.org/',
  },
}

export default projects
