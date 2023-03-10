import React, { useEffect } from 'react'
import { IconButton, styled } from '@mui/material'

import { isMobile } from '../../utils'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
// import { ReactComponent as Email } from '../../assets/icons/email.svg'
import { ReactComponent as Map } from '../../assets/icons/map.svg'
import logo from '../../assets/logo.png'

const ContactContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  marginTop: 40,
}))
const ContactTitle = styled('div')(() => ({
  color: '#1B1B1B',
  fontSize: `${isMobile() ? '36px' : '48px'}`,
  fontWeight: 500,
  textAlign: 'center',
  position: 'relative',
  margin: 40,
}))
const NavBarLogo = styled('div')(() => ({
  margin: '0 8px',
  display: 'flex',
  alignItems: 'center',
  width: isMobile() ? 300 : 512,
  '& > img': {
    width: '100%',
  },
}))
const ContactItemContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: isMobile() ? 'column' : 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 1000,
  '& > a': {
    textDecoration: 'none',
    color: '#1b1b1b',
  },
}))
const ContactItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 40,
}))
const PhoneIcon = styled(Phone)(() => ({
  color: '#ffca3e',
}))
// const EmailIcon = styled(Email)(() => ({
//   color: '#ffca3e',
// }))
const MapIcon = styled(Map)(() => ({
  color: '#ffca3e',
}))
const ContactItemText = styled('div')(() => ({
  fontSize: 20,
  fontWeight: 500,
}))
const ContactIFrame = styled('div')(() => ({
  width: isMobile() ? 320 : 1000,
  height: 320,
  margin: 40,
  boxShadow: '0px 0px 12px 10px #c5c5c5',
}))

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <ContactContainer>
      <ContactTitle>Контакти</ContactTitle>
      <NavBarLogo>
        <img src={logo} alt={'logo'} />
      </NavBarLogo>
      <ContactItemContainer>
        <a href="tel:+380996008008">
          <ContactItem>
            <IconButton>
              <PhoneIcon />
            </IconButton>
            <ContactItemText>+38 099 600 80 08</ContactItemText>
          </ContactItem>
        </a>
        {/*<ContactItem>*/}
        {/*  <IconButton>*/}
        {/*    <EmailIcon />*/}
        {/*  </IconButton>*/}
        {/*  <ContactItemText>sashapasha@gmail.com</ContactItemText>*/}
        {/*</ContactItem>*/}
        <ContactItem>
          <IconButton>
            <MapIcon />
          </IconButton>
          <ContactItemText>вул. Машинобудівників, 5д</ContactItemText>
        </ContactItem>
      </ContactItemContainer>
      <ContactIFrame>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6286.170272404772!2d30.427339000000003!3d50.342369000000005!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDIwJzMyLjUiTiAzMMKwMjUnNDAuNyJF!5e1!3m2!1sru!2sua!4v1678051300815!5m2!1sru!2sua"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={'contactMap'}
        ></iframe>
      </ContactIFrame>
    </ContactContainer>
  )
}
