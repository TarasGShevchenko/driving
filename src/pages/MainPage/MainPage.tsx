import React from 'react'
import { styled } from '@mui/material'

import { Button } from '../../components/Button'
import { Link } from '../../enums'
import home from '../../assets/home.jpg'
import { isMobile } from '../../utils'
import { CardPrice } from '../../components/CardPrice'
import { advantages, cards } from '../../data '
import { CardAdvantages } from '../../components/CardAdvantages'
import aboutImage from '../../assets/about.jpg'
import { NavLink } from 'react-router-dom'

const MainContainer = styled('div')(() => ({
  background: `url(${home}) center center/cover no-repeat`,
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: 700,
}))
const MainOverlay = styled('div')(() => ({
  position: 'absolute',
  backgroundColor: '#000000',
  opacity: 0.5,
  transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
  width: '100%',
  height: '100%',
}))
const MainContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  height: 'inherit',
  position: 'relative',
  zIndex: 2,
}))
const MainTitle = styled('div')(() => ({
  textAlign: 'center',
  marginTop: 40,
  marginBottom: 40,
  fontSize: 40,
  fontWeight: 600,
  color: '#F6EC00',
  ...(isMobile() && {
    fontSize: 39,
  }),
}))
const MainSubTitle = styled('p')(() => ({
  fontSize: 24,
  fontWeight: 600,
  color: '#F6EC00',
  lineHeight: '5px',
  ...(isMobile() && {
    marginTop: 30,
  }),
}))
const MainActions = styled('div')(() => ({
  textAlign: 'center',
  marginTop: 60,
}))
const MainPrices = styled('div')(() => ({
  position: 'relative',
  top: 650,
}))
const CardPriceWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: `${isMobile() ? 'column' : 'row'}`,
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
}))
const Title = styled('div')(() => ({
  color: '#1B1B1B',
  fontSize: 48,
  fontWeight: 500,
  textAlign: 'center',
  position: 'relative',
  margin: 40,
  top: 650,
}))
const Advantages = styled('div')(() => ({
  display: 'flex',
  flexDirection: `${isMobile() ? 'column' : 'row'}`,
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  top: 650,
}))
const AboutContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: `${isMobile() ? 'column' : 'row'}`,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  top: 650,
}))
const AboutImage = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 480,
  '& > img': {
    width: '100%',
  },
}))
const AboutContent = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  maxWidth: 800,
  margin: 20,
}))
const AboutContentTitle = styled('h2')(() => ({}))
const AboutContentText = styled('p')(() => ({
  color: '#7c7c7c',
}))
const AboutContentLink = styled(NavLink)(() => ({
  color: '#F6EC00',
  textDecoration: 'none',
  cursor: 'pointer',
}))

export const MainPage = () => {
  return (
    <>
      <MainContainer>
        <MainOverlay />
        <MainContent>
          <MainTitle>Даруємо кожному подарунки!</MainTitle>
          <MainSubTitle>&#8226; Навчальна література</MainSubTitle>
          <MainSubTitle>&#8226; Проходження мед-комісії</MainSubTitle>
          <MainActions>
            <Button label={'Подивитись ціни'} to={Link.price} />
            <Button label={'Замовити двінок'} modal />
          </MainActions>
        </MainContent>
      </MainContainer>
      <Title>Чим ми кращі за інших</Title>
      <Advantages>
        {advantages.map(({ icon, position, name, content }, i) => (
          <CardAdvantages key={i} icon={icon} position={position} name={name} content={content} />
        ))}
      </Advantages>
      <Title>Перша лекція безкоштовно!</Title>
      <MainPrices>
        <CardPriceWrapper>
          {cards.map(({ name, price, description }, i) => (
            <CardPrice key={i} name={name} price={price} description={description} />
          ))}
        </CardPriceWrapper>
      </MainPrices>
      <Title>Про компанію</Title>
      <AboutContainer>
        <AboutImage>
          <img src={aboutImage} alt={'about'} />
        </AboutImage>
        <AboutContent>
          <AboutContentTitle>АВТОШКОЛА DRIVING</AboutContentTitle>
          <AboutContentText>
            «Driving» – це місце, де Ви дійсно навчитеся керувати автомобілем. Наші інструктори з навчання водінню
            підходять індивідуально до кожного учня. Наша школа комерційна, але в ній набагато більше душі і любові до
            своєї справи, ніж комерції. Ви не пошкодуєте про проведений тут час і витрачені гроші, якісне навчання ми
            Вам гарантуємо! А ще у нас хороші машини, на яких навчимо їздити. Приходьте до нас, ми з радістю допоможемо
            Вам сісти за кермо, розуміти свій автомобіль і не боятися дороги.
          </AboutContentText>
          <AboutContentLink to={Link.about}>Детальніше</AboutContentLink>
        </AboutContent>
      </AboutContainer>
    </>
  )
}
