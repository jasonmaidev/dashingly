import React from 'react';
import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiHomeLine } from "react-icons/ri";
import { IoReload } from "react-icons/io5";
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';


const Sidebar = ({ children }) => {
  const router = useRouter();
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
              <RiHomeLine size={20} />
            </div>
          </Link>
          <span className={
            resolvedTheme === 'light' ?
              'border-b-[1px] w-full p-2'
              : 'border-b-[1px] border-slate-900 w-full p-2'
          }
          ></span>
          <Link href='/dashboard'>
            <div className='hover:bg-slate-500/30 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard data-tooltip-placement="right" size={20} />
            </div>
          </Link>
          <Link href='/orders'>
            <div className='hover:bg-slate-500/30 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href='#'>
            <div className='hover:bg-slate-500/30 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <IoReload onClick={() => router.reload()} size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className='sm:ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
