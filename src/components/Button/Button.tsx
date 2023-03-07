import React, { FC, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ModalPopup } from '../Modal'
import { keyframes, styled } from '@mui/material'

const anim = keyframes`
  0% {
    -webkit-transform: skew(340deg) translateX(0);
    -moz-transform: skew(340deg) translateX(0);
    -o-transform: skew(340deg) translateX(0);
  }
  10% {
    -webkit-transform: skew(340deg) translateX(12px);
    -moz-transform: skew(340deg) translateX(12px);
    -o-transform: skew(340deg) translateX(12px);
  }
  25% {
    -webkit-transform: skew(340deg) translateX(0);
    -moz-transform: skew(340deg) translateX(0);
    -o-transform: skew(340deg) translateX(0);
  }
  50% {
    -webkit-transform: skew(340deg) translateX(8px);
    -moz-transform: skew(340deg) translateX(8px);
    -o-transform: skew(340deg) translateX(8px);
  }
  75% {
    -webkit-transform: skew(340deg) translateX(0);
    -moz-transform: skew(340deg) translateX(0);
    -o-transform: skew(340deg) translateX(0);
  }
  90% {
    -webkit-transform: skew(340deg) translateX(4px);
    -moz-transform: skew(340deg) translateX(4px);
    -o-transform: skew(340deg) translateX(4px);
  }
  100% {
    -webkit-transform: skew(340deg) translateX(0);
    -moz-transform: skew(340deg) translateX(0);
    -o-transform: skew(340deg) translateX(0);
  }
`

const ButtonContainer = styled('button')<{ isMain?: boolean }>(({ isMain }) => ({
  margin: isMain ? '5px 90px' : '5px 30px',
  fontSize: isMain ? 18 : 13,
  fontWeight: 600,
  color: '#f67e00',
  backgroundColor: 'rgba(2, 1, 1, 0)',
  borderStyle: 'solid',
  borderWidth: 3,
  borderRadius: 10,
  borderColor: '#f67e00',
  width: isMain ? 220 : 150,
  height: isMain ? 80 : 50,
  transform: 'skew(340deg)',
  webkitTransform: 'skew(340deg)',
  mozTransform: 'skew(340deg)',
  oTransform: 'skew(340deg)',
  '&:hover': {
    backgroundColor: '#f67e00',
    color: 'black',
    boxShadow: '0 0 10px 0 #c76600',
    cursor: 'pointer',
    animation: `${anim} 0.7s linear`,
  },
}))

interface ButtonProps {
  label: string
  modal?: boolean
  to?: string
  isMain?: boolean
}

export const Button: FC<ButtonProps> = ({ label, modal, to, isMain }) => {
  const [open, setOpen] = useState(false)
  const history = useNavigate()
  const openModal = useCallback(() => {
    modal && setOpen(true)
    to && history(to)
  }, [history, modal, to])

  return (
    <>
      <ButtonContainer isMain={isMain} onClick={openModal}>
        {label}
      </ButtonContainer>
      <ModalPopup open={open} closeModal={setOpen} />
    </>
  )
}
