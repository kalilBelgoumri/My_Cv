import React from 'react'
import { Image } from 'semantic-ui-react'

const Cardportofolio = ({ image, site }) => (
  <div>
    <Image.Group>
      <Image src={image} href={site} />
    </Image.Group>
  </div>
)

export default Cardportofolio
