import React from 'react'
import './Header.css'

export const Header = ({ children }) => {
  return (
    <header className='header-app'>{children}</header>
  )
}

