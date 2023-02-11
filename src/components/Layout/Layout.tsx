import React, { FC, ReactNode } from 'react'
import { styled } from '@mui/material'

import { Header } from '../Header'

const LayoutContainer = styled('div')(() => ({
  maxWidth: 1320,
  margin: 'auto',
}))

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <React.Fragment>
    <Header />
    <LayoutContainer>{children}</LayoutContainer>
  </React.Fragment>
)
