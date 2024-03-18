import React from 'react';
import Link from 'next/link';
import { RxSketchLogo, RxDashboard } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { useTheme } from 'next-themes';

const Sidebar = ({ children }) => {
  const { resolvedTheme } = useTheme();
  return (
    <div className='flex'>
      <div
        className={
          resolvedTheme === 'light' ?
            'hidden fixed w-20 h-screen p-4 border-r-[1px] sm:flex flex-col justify-between text-slate-800'
            :
            'hidden fixed w-20 h-screen p-4 bg-slate-800 border-r-[1px] border-slate-900 sm:flex flex-col justify-between'
        }
      >
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-500 w-full p-2'></span>
          <Link href='/dashboard'>
            <div className='hover:bg-slate-500/30 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/orders'>
            <div className='hover:bg-slate-500/30 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href='#'>
            <div className='hover:bg-slate-500/30 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className='sm:ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
