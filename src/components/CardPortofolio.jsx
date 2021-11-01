import React from 'react'
import { Image } from 'semantic-ui-react'

const Cardportofolio = ({image , site }) => (
  <Image src={image} rounded={true} as='a'size='' href={site} target='_blank'/>
)

export default Cardportofolio