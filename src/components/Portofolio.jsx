import React from 'react'
import Cardportofolio from './CardPortofolio'

function Portofolio() {
    return (
        <><div id="portofolio" className="font-bold text-4xl text-white portofolio flex items-center justify-center my-28">
            <h1> Mon Portofolio </h1>
        </div><div className="portofolio flex items-center justify-center space-x-4 p-10 shadow-2xl transition transform hover: duration-500 ease-in-out ">
                <Cardportofolio
                    image="https://picsum.photos/500/300?random=1"
                    site="www.google.fr" />
                <Cardportofolio
                    image="https://picsum.photos/500/300?random=2"
                    site={'www.google.fr'} />
                <Cardportofolio
                    image="https://picsum.photos/500/300?random=3"
                    site={'www.google.fr'} />
            </div></>
    )
}

export default Portofolio
