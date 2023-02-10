import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import axios from 'axios'

import spinner from './assets/icons/Spinner.gif'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [tell, setTell] = useState('')

  const openForm = useCallback(() => {
    setOpen(!open)
  }, [open])

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
    },
    [name, tell],
  )

  return (
    <div className="container">
      <img src={spinner} alt="spinner" />
      <div className="text" onClick={openForm}>
        Coming soon...
      </div>
      {open && (
        <form onSubmit={sendForm}>
          <input type="text" value={name} placeholder={'Name'} name="name" onChange={typingName} />
          <input type="number" value={tell} placeholder={'(000) 000 00 00'} name="tell" onChange={typingTell} />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}

export default App
