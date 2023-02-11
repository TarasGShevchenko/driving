import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Link } from './enums'
import { MainPage } from './pages/MainPage'
import { PricePage } from './pages/PricePage'
import { IndividuallyPage } from './pages/IndividuallyPage'
import { AboutPage } from './pages/AboutPage'
import { FAQPage } from './pages/FAQPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={Link.main} element={<MainPage />} />
        <Route path={Link.price} element={<PricePage />} />
        <Route path={Link.individually} element={<IndividuallyPage />} />
        <Route path={Link.about} element={<AboutPage />} />
        <Route path={Link.faq} element={<FAQPage />} />
        <Route path={Link.contact} element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App
