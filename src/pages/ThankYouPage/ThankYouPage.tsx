import React, { useCallback, useEffect } from 'react'
import { styled } from '@mui/material'

import { isMobile } from '../../utils'
import { Link } from '../../enums'
import { useNavigate } from 'react-router-dom'

const ThankYouContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  marginTop: 40,
  minHeight: `${isMobile() ? '400px' : '300px'}`,
}))
const ThankYouTitle = styled('div')(() => ({
  color: '#54595F',
  fontSize: `${isMobile() ? '26px' : '46px'}`,
  fontWeight: 500,
  textAlign: 'center',
  position: 'relative',
  margin: 40,
}))

const ThankYouButton = styled('button')(() => ({
  backgroundColor: '#ffca3e',
  padding: '12px 24px',
  borderRadius: 10,
  border: 'none',
  fontWeight: 500,
  lineHeight: 1,
  fontSize: 15,
  color: '1B1B1B',
  '&:hover': {
    backgroundColor: '#ffca3e',
    color: 'black',
    boxShadow: '0px 0px 10px 0px #ffca3e',
    cursor: 'pointer',
  },
}))

export const ThankYouPage = () => {
  const history = useNavigate()
  const goToMain = useCallback(() => {
    history(Link.main)
    window.scroll(0, 0)
  }, [history])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <ThankYouContainer>
      <ThankYouTitle>Дякуємо за ваш запит!</ThankYouTitle>

      <ThankYouButton onClick={goToMain}>На головну</ThankYouButton>
    </ThankYouContainer>
  )
}
