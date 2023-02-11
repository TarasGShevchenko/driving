import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { styled } from '@mui/material'

import { Button } from '../Button'
import { Link } from '../../enums'

const NavBarWrapper = styled('div')<{ main: boolean }>(({ main }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  backgroundColor: '#1b1b1b',
  zIndex: 9,
  ...(main && {
    marginTop: 40,
    backgroundColor: 'transparent',
  }),
}))
const NavBarContainer = styled('div')(() => ({
  maxWidth: 1320,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}))
const NavBarLinks = styled('ul')(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}))
const NavBarLink = styled('li')(() => ({
  color: '#FCFCFC',
  listStyle: 'none',
}))
const StyledNavLink = styled(NavLink)(() => ({
  color: '#FCFCFC',
  textDecoration: 'none',
  padding: '8px 10px',
  fontSize: 13,
  fontWeight: 500,
  '&.active': {
    borderBottom: '3px solid #F6EC00',
  },
  '&:hover': {
    borderBottom: '3px solid #F6EC00',
  },
}))
const NavbarInfo = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}))
const NavbarInfoContent = styled('div')(() => ({
  '& > span': {
    color: '#F6EC00',
    fontSize: 13,
    fontWeight: 700,
  },
  '& > p': {
    color: '#FCFCFC',
    fontSize: 13,
    fontWeight: 500,
    lineHeight: '6px',
  },
}))

export const Header = () => {
  const location = useLocation()
  return (
    <NavBarWrapper main={location.pathname === Link.main}>
      <NavBarContainer>
        <NavBarLinks>
          <NavBarLink>
            <StyledNavLink to={Link.main}>Головна</StyledNavLink>
          </NavBarLink>
          <NavBarLink>
            <StyledNavLink to={Link.price}>Вартість</StyledNavLink>
          </NavBarLink>
          <NavBarLink>
            <StyledNavLink to={Link.individually}>Індивідуально</StyledNavLink>
          </NavBarLink>
          <NavBarLink>
            <StyledNavLink to={Link.about}>Про компанію</StyledNavLink>
          </NavBarLink>
          <NavBarLink>
            <StyledNavLink to={Link.faq}>FAQ</StyledNavLink>
          </NavBarLink>
          <NavBarLink>
            <StyledNavLink to={Link.contact}>Контакти</StyledNavLink>
          </NavBarLink>
        </NavBarLinks>
        <NavbarInfo>
          <NavbarInfoContent>
            <span>Школа на троєщині</span>
            <p>+380 68 88 00</p>
            <p>вул. Сабурова, 13</p>
          </NavbarInfoContent>
          <Button label={'Замовити дзвінок'} modal />
        </NavbarInfo>
      </NavBarContainer>
    </NavBarWrapper>
  )
}
