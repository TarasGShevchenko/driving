import React, { FC, ReactNode } from 'react'
import { styled } from '@mui/material'

import { NavBar } from '../NavBar'
import { Footer } from '../Footer'

const LayoutContainer = styled('div')(() => ({
  maxWidth: 1320,
  margin: 'auto',
}))

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <React.Fragment>
    <NavBar />
    <LayoutContainer>{children}</LayoutContainer>
    <Footer />
  </React.Fragment>
)
