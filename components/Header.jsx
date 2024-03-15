import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Header = ({ pageType }) => {
  return (
    <div className='flex flex-row justify-between px-4 pt-4'>
      <h2 className='font-bold'>{pageType}</h2>
      <ThemeSwitch />
    </div>
  )
}

export default Header