import React from 'react'
import { Image } from 'semantic-ui-react'

const Cardportofolio = ({image , site }) => (
  <div>
  <Image.Group size='small'>
  <Image src={image} href={site} />
</Image.Group>
  </div>
)

export default Cardportofolio