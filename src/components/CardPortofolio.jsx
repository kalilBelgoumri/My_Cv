import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise'
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope'
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01'
import TextInfoContent from '@mui-treasury/components/content/textInfo'

const useStyles = makeStyles(() => ({
  root: {
    width: '300',
  },
  content: {},
}))

export const Cardportofolio = React.memo(function PostCard({
  image,
  heading,
  body,
  onClick,
  className,
}) {
  const cardStyles = useStyles()
  const mediaStyles = useSlopeCardMediaStyles()
  const shadowStyles = useSoftRiseShadowStyles()
  const textCardContentStyles = useN01TextInfoContentStyles()
  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={image} />
      <CardContent className={` cursor-pointer ${cardStyles.content}`}>
        <TextInfoContent
          className={className}
          classes={textCardContentStyles}
          heading={heading}
          body={body}
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <IconButton onClick={onClick}></IconButton>
      </Box>
    </Card>
  )
})

export default Cardportofolio
