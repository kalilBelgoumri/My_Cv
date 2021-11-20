import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import image from '../assets/portfolio.jpg'
import Background from '../components/Background'


function Portofolio() {
  return (
    <div>
      <section className="border-b-2 border-red-500">
        <div className="header__content flex flex-col border-b-2 border-red-500 ">
          <Header />
        </div>
        <div className="">
          <Background image={image} />
        </div>
        <div className="containt flex-grow-1">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            necessitatibus odit ducimus illo voluptate odio saepe? Suscipit,
            culpa aperiam? Voluptas, alias. Magni veritatis iste, aperiam
            reprehenderit cupiditate autem itaque quo?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            necessitatibus odit ducimus illo voluptate odio saepe? Suscipit,
            culpa aperiam? Voluptas, alias. Magni veritatis iste, aperiam
            reprehenderit cupiditate autem itaque quo?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            necessitatibus odit ducimus illo voluptate odio saepe? Suscipit,
            culpa aperiam? Voluptas, alias. Magni veritatis iste, aperiam
            reprehenderit cupiditate autem itaque quo?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            necessitatibus odit ducimus illo voluptate odio saepe? Suscipit,
            culpa aperiam? Voluptas, alias. Magni veritatis iste, aperiam
            reprehenderit cupiditate autem itaque quo?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            necessitatibus odit ducimus illo voluptate odio saepe? Suscipit,
            culpa aperiam? Voluptas, alias. Magni veritatis iste, aperiam
            reprehenderit cupiditate autem itaque quo?
          </p>
        </div>
        <Footer />
      </section>
    </div>
  )
}

export default Portofolio
