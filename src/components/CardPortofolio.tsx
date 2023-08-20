import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@material-ui/core/Box'
import { IconButton } from '@mui/material'

type CardportofolioProps = {
  image?: string
  typo: string
  heading: string
  onClick: () => void
}
const Cardportofolio = ({ image, heading, onClick }: CardportofolioProps) => {
  return (
    <Card sx={{ width: 400, height: 400 }}>
      <CardMedia
        className="bg-top bg-cover"
        style={{
          height: 10,
          paddingTop: '80%',
        }}
        image={image}
      />
      <CardContent className="text-center">
        <Typography
          className="cursor-pointer "
          gutterBottom
          variant="h5"
          component="div"
        >
          {heading}
        </Typography>
        <Box px={2} pb={2} mt={-1}>
          <IconButton onClick={onClick}></IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}
export default Cardportofolio
