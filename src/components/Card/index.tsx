import React from 'react'
import { Container } from './styles'

interface CardProps {
  img: any
  title: string
  text?: string
}

const Card = (props: CardProps) => {
  const { img, title, text } = props

  return (
    <Container>
      <div>
        <img src={img} alt="cardLogo.png" />
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </Container>
  )
}

export default Card
