import React, { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react'
import { styled } from '@mui/material'
import footerImage from '../../assets/footer.png'
import { isMobile } from '../../utils'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from '../../enums'
import { useLocation } from 'react-router-dom'

const FooterContainer = styled('footer')<{ main: boolean }>(({ main }) => ({
  width: '100%',
  ...(main && {
    position: 'relative',
    top: 850,
  }),
}))
const FooterForm = styled('div')(() => ({
  display: 'flex',
  flexDirection: `${isMobile() ? 'column' : 'row'}`,
  justifyContent: 'space-around',
  alignItems: 'center',
  minHeight: 400,
  backgroundImage: `url(${footerImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'relative',
}))
const FooterOverlay = styled('div')(() => ({
  position: 'absolute',
  backgroundColor: '#000000',
  opacity: 0.5,
  transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
  width: '100%',
  height: '100%',
}))
const FooterFormContent = styled('div')(() => ({
  maxWidth: 750,
  zIndex: 99,
  padding: 20,
}))
const FooterFormContentTitle = styled('h2')(() => ({
  fontSize: 48,
  fontWeight: 600,
  color: '#FCFCFC',
}))
const FooterFormContentText = styled('h3')(() => ({
  fontSize: 30,
  color: '#FCFCFC',
}))
const FormInput = styled('input')(() => ({
  width: `${isMobile() ? '300px' : '400px'}`,
  height: 40,
  padding: '6px 20px',
  border: 'none',
  background: 'transparent',
  color: '#FCFCFC',
  fontSize: 18,
  '&:focus-visible': {
    outline: 'none',
  },
}))

const Form = styled('form')(() => ({
  padding: 20,
}))
const FormInputWrap = styled('div')(() => ({
  transform: 'skew(-20deg)',
  backgroundColor: 'rgba(246, 236, 0, 0)',
  color: '#F6EC00',
  fontSize: 14,
  textTransform: 'capitalize',
  border: '3px solid #fcfcfc',
  borderRadius: 10,
  margin: 10,
}))
const FormButton = styled('button')(() => ({
  width: 200,
  height: 40,
  padding: '6px 20px',
  transform: 'skew(-20deg)',
  backgroundColor: 'rgba(246, 236, 0, 0)',
  color: '#F6EC00',
  fontSize: 14,
  textTransform: 'capitalize',
  border: '3px solid #F6EC00',
  borderRadius: 10,
  margin: 10,
  cursor: 'pointer',
}))
const FooterBottom = styled('div')(() => ({
  background: '#000000',
  color: '#FCFCFC',
  textAlign: 'center',
}))

export const Footer: FC = () => {
  const location = useLocation()
  const [name, setName] = useState('')
  const [tell, setTell] = useState('')

  const typingName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }, [])

  const typingTell = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTell(event.currentTarget.value)
  }, [])

  const sendForm = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const token = process.env.REACT_APP_TELEGRAM_TOKEN
      const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID
      const urlApi = `https://api.telegram.org/bot${token}/sendMessage`

      const mail = `
      <b>New request!</b>\n
      <b>Name: </b> ${name}\n
      <b>Tell: </b> ${tell}
    `

      axios.post(urlApi, {
        chat_id: chatId,
        parse_mode: 'html',
        text: mail,
      })

      toast.success('Ваш запит відправлено', { theme: 'colored' })
    },
    [name, tell],
  )

  return (
    <FooterContainer main={location.pathname === Link.main}>
      <FooterForm>
        <FooterOverlay />
        <FooterFormContent>
          <FooterFormContentTitle>
            Хочеш записатися на навчання <strong>прямо зараз?</strong>
          </FooterFormContentTitle>
          <FooterFormContentText>
            Заповнюй форму і наш менеджер зв’яжеться з тобою в найкоротші терміни!
          </FooterFormContentText>
        </FooterFormContent>
        <Form onSubmit={sendForm}>
          <FormInputWrap>
            <FormInput placeholder={"Введіть Ваше ім'я"} value={name} onChange={typingName} />
          </FormInputWrap>
          <FormInputWrap>
            <FormInput placeholder={'Введіть Ваш телефон'} value={tell} onChange={typingTell} />
          </FormInputWrap>
          <FormButton type={'submit'}>Надіслати</FormButton>
        </Form>
      </FooterForm>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d204450.6709985166!2d30.560180003058402!3d50.41451025864461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1676157141325!5m2!1sru!2sua"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <FooterBottom>&#169;Driving 2023</FooterBottom>
    </FooterContainer>
  )
}