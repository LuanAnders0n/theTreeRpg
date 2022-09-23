import React from 'react'
import { Container } from './styles'

interface CardProps {
<<<<<<< Updated upstream
  img: any
  title: string
=======
  img?: any
  tittle?: string
>>>>>>> Stashed changes
  text?: string
}

const Card = (props: CardProps) => {
<<<<<<< Updated upstream
  const { img, title, text } = props
=======
  const { img, tittle, text } = props
>>>>>>> Stashed changes

  return (
    <Container>
      <div>
        <img src={img} alt="cardLogo.png" />
<<<<<<< Updated upstream
        <h1>{title}</h1>
=======
        <h1>{tittle}</h1>
>>>>>>> Stashed changes
        {text && <p>{text}</p>}
      </div>
    </Container>
  )
}

export default Card
