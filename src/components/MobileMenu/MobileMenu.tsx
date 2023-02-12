import React, { FC } from 'react'
import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

interface MobileMenuProps {
  open: boolean
  close: () => void
  items: { to: string; value: string }[]
}

const Menu = styled('div')<{ open: boolean }>(({ open }) => ({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: 64,
  left: 0,
  transform: 'translateX(-100%)',
  transition: 'all .2s',
  ...(open && {
    transform: 'translateX(0)',
  }),
}))
const MenuContent = styled('div')(() => ({
  width: '80%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  background: '#FFFFFF',
}))
const MenuUl = styled('ul')(() => ({}))
const MenuLi = styled('li')(() => ({
  listStyle: 'none',
  padding: '8px 0',
}))
const MenuLink = styled(NavLink)(() => ({
  color: '#1b1b1b',
  textDecoration: 'none',
  fontSize: 20,
  fontWeight: 500,
  '&.active': {
    borderBottom: '3px solid #F6EC00',
  },
}))

export const MobileMenu: FC<MobileMenuProps> = ({ open, close, items }) => {
  return (
    <Menu open={open} onClick={() => close()}>
      <MenuContent onClick={(e) => e.stopPropagation()}>
        <MenuUl>
          {items.map(({ to, value }, index) => (
            <MenuLi key={index}>
              <MenuLink to={to} onClick={() => close()}>
                {value}
              </MenuLink>
            </MenuLi>
          ))}
        </MenuUl>
      </MenuContent>
    </Menu>
  )
}
