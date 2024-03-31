import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import Link from 'next/link';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsBarChartLine } from "react-icons/bs";

const Header = ({ pageType }) => {
  return (
    <div className='flex flex-row justify-between px-4 pt-4 gap-4'>
      <h2 className='hidden sm:block font-bold'>{pageType}</h2>
      <Link className='block sm:hidden' href='/dashboard'><BsBarChartLine size={20} /></Link>
      <Link className='block sm:hidden' href='/orders'><HiOutlineShoppingBag size={20} /></Link>
      <ThemeSwitch />
    </div>
  )
}

export default Header