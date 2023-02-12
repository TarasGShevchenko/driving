import React from 'react'
import { styled } from '@mui/material'
import { advantages } from '../../data '
import { isMobile } from '../../utils'
import { CardAdvantages } from '../../components/CardAdvantages'

const AboutContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
}))
const AboutTitle = styled('div')(() => ({
  color: '#1B1B1B',
  fontSize: `${isMobile() ? '36px' : '48px'}`,
  fontWeight: 500,
  textAlign: 'center',
  position: 'relative',
  margin: 40,
}))
const Advantages = styled('div')(() => ({
  display: 'flex',
  flexDirection: `${isMobile() ? 'column' : 'row'}`,
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 40,
}))
const AboutContentText = styled('p')(() => ({
  margin: 10,
  textAlign: 'center',
  maxWidth: 1024,
}))

export const AboutPage = () => {
  return (
    <AboutContainer>
      <AboutTitle>Про компанію</AboutTitle>
      <Advantages>
        {advantages.map(({ icon, position, name, content }, i) => (
          <CardAdvantages key={i} icon={icon} position={position} name={name} content={content} />
        ))}
      </Advantages>
      <AboutContentText>
        «Driving» – це місце, де Ви дійсно навчитеся керувати автомобілем. Наші інструктори з навчання водінню підходять
        індивідуально до кожного учня. Наша школа комерційна, але в ній набагато більше душі і любові до своєї справи,
        ніж комерції. Ви не пошкодуєте про проведений тут час і витрачені гроші, якісне навчання ми Вам гарантуємо! А ще
        у нас хороші машини, на яких навчимо їздити. Приходьте до нас, ми з радістю допоможемо Вам сісти за кермо,
        розуміти свій автомобіль і не боятися дороги.
      </AboutContentText>
      <AboutContentText>
        Наші автошколи знаходяться в двох районах Києва – Оболонському та Деснянському, за адресами вул. Малиновського
        19-А та вул. Сабурова 13.
      </AboutContentText>
      <AboutContentText>
        <strong>До зустрічі в автошколі!</strong>
      </AboutContentText>
    </AboutContainer>
  )
}
