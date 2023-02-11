import React from 'react'
import { styled } from '@mui/material'

import { Button } from '../../components/Button'
import { Link } from '../../enums'
import home from '../../assets/home.jpg'

const MainContainer = styled('div')(() => ({
  background: `url(${home}) center center/cover no-repeat`,
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: 600,
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
  height: 'inherit',
  position: 'relative',
  zIndex: 2,
}))
const MainTitle = styled('div')(() => ({
  marginTop: 40,
  fontSize: 40,
  fontWeight: 600,
  color: '#F6EC00',
}))
const MainSubTitle = styled('p')(() => ({
  fontSize: 24,
  fontWeight: 600,
  color: '#F6EC00',
  lineHeight: '5px',
}))
const MainActions = styled('div')(() => ({
  marginTop: 20,
}))

export const MainPage = () => {
  return (
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
  )
}
