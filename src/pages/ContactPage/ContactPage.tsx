import React from 'react'
import { IconButton, styled } from '@mui/material'

import { isMobile } from '../../utils'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
// import { ReactComponent as Email } from '../../assets/icons/email.svg'
import { ReactComponent as Map } from '../../assets/icons/map.svg'

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
const ContactSubTitle = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '5px 20px',
  fontSize: isMobile() ? 16 : 20,
  fontWeight: 700,
  color: '#1b1b1b',
  backgroundColor: '#f67e00',
  borderStyle: 'solid',
  borderWidth: 3,
  borderRadius: 10,
  borderColor: '#f67e00',
  width: isMobile() ? 300 : 700,
  height: 50,
  textTransform: 'uppercase',
  transform: 'skew(340deg)',
}))
const ContactItemContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: isMobile() ? 'column' : 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 1000,
}))
const ContactItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 40,
}))
const PhoneIcon = styled(Phone)(() => ({
  color: '#f67e00',
}))
// const EmailIcon = styled(Email)(() => ({
//   color: '#f67e00',
// }))
const MapIcon = styled(Map)(() => ({
  color: '#f67e00',
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
  return (
    <ContactContainer>
      <ContactTitle>Контакти</ContactTitle>
      <ContactSubTitle>Автошкола Driving Чабани</ContactSubTitle>
      <ContactItemContainer>
        <ContactItem>
          <IconButton>
            <PhoneIcon />
          </IconButton>
          <ContactItemText>+38 099 600 80 08</ContactItemText>
        </ContactItem>
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
        ></iframe>
      </ContactIFrame>
    </ContactContainer>
  )
}
