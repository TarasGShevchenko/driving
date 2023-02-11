import React, { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react'
import { Modal, styled, TextField, Button } from '@mui/material'
import axios from 'axios'

interface ModalProps {
  open: boolean
  closeModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalContainer = styled('div')(() => ({
  backgroundColor: '#fefefe',
  margin: '10% auto',
  padding: 20,
  border: '3px solid #F6EC00',
  borderRadius: 20,
  width: 500,
}))
const ModalTitle = styled('div')(() => ({
  color: '#6ec1e4',
  fontSize: 40,
  margin: 10,
}))
const ModalSubtitle = styled('div')(() => ({
  color: '#999999',
  fontSize: 12,
  margin: 10,
}))
const FormContainer = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
}))
const FormInput = styled(TextField)(() => ({
  margin: 10,
}))
const FormButton = styled(Button)(() => ({
  margin: 10,
}))

export const ModalPopup: FC<ModalProps> = ({ open, closeModal }) => {
  const [name, setName] = useState('')
  const [tell, setTell] = useState('')

  const typingName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }, [])

  const typingTell = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTell(event.currentTarget.value)
  }, [])

  const cancel = useCallback(() => {
    closeModal(false)
  }, [closeModal])

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

      closeModal(false)
    },
    [closeModal, name, tell],
  )

  return (
    <Modal open={open} onClose={cancel}>
      <ModalContainer>
        <ModalTitle>Зворотній дзвінок</ModalTitle>
        <ModalSubtitle>Заповнюй форму та наш менеджер зателефонує тобі в найкоротший час</ModalSubtitle>
        <FormContainer onSubmit={sendForm}>
          <FormInput type="text" value={name} label="Name" onChange={typingName} />
          <FormInput type="number" value={tell} label="099 000 00 00" onChange={typingTell} />
          <FormButton variant="contained" type="submit">
            Submit
          </FormButton>
        </FormContainer>
      </ModalContainer>
    </Modal>
  )
}
