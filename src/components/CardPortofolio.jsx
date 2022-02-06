// import * as React from 'react'
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import Typography from '@mui/material/Typography'
// import { CardActionArea } from '@mui/material'

// export default function Cardportofolio({ image, typo,site,onClick }) {
//   return (
//     <Card onClick={onClick} className="cursor-pointer hover:transition-all"sx={{ maxWidth: 500, textAlign: 'center' }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image={image}
//           alt="green iguana"
//         />
//         <CardContent>

//           <Typography gutterBottom variant="h5" component="div">
//             {typo}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   )
// }
/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Share from '@material-ui/icons/Share'
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope'
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01'
import TextInfoContent from '@mui-treasury/components/content/textInfo'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
    margin: 'auto',
    cursor: 'pointer',
  },
  content: {
    padding: 24,
  },
}))

export const Cardportofolio = React.memo(function PostCard({
  image,
  heading,
  body,
  onClick,
  p,
}) {
  const cardStyles = useStyles()
  const mediaStyles = useSlopeCardMediaStyles()
  const shadowStyles = useSoftRiseShadowStyles()
  const textCardContentStyles = useN01TextInfoContentStyles()
  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={image} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={heading}
          body={body}
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton onClick={onClick}>
          <Share />
        </IconButton>
      </Box>
    </Card>
  )
})

export default Cardportofolio
