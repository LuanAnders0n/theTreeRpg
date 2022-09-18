import React from 'react'
import { Container } from './styles'

interface CardProps {
  img: any
  tittle: string
  text?: string
}

const Card = (props: CardProps) => {
  const { img, tittle, text } = props

  return (
    <Container>
      <div>
        <img src={img} alt="cardLogo.png" />
        <h1>{tittle}</h1>
        {text && <p>{text}</p>}
      </div>
    </Container>
  )
}

export default Card
