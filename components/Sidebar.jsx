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
            <div className="p-3">
              <div className="group relative w-max">
                <RiHomeLine size={20} />
                <span
                  className={
                    resolvedTheme === 'light' ?
                      "pointer-events-none absolute -top-2 left-8 w-max bg-slate-300 py-2 px-4 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                      : "pointer-events-none absolute -top-2 left-8 w-max text-white bg-slate-700 py-2 px-4 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                  }
                >
                  Home
                </span>
              </div>
            </div>
          </Link>
          <span className={
            resolvedTheme === 'light' ?
              'border-b-[1px] w-full p-2'
              : 'border-b-[1px] border-slate-900 w-full p-2'
          }
          ></span>
          <Link href='/dashboard'>
            <div className="p-10">
              <div className="group relative w-max">
                <RxDashboard size={20} />
                <span
                  className={
                    resolvedTheme === 'light' ?
                      "pointer-events-none absolute -top-2 left-8 w-max bg-slate-300 py-2 px-4 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                      : "pointer-events-none absolute -top-2 left-8 w-max text-white bg-slate-700 py-2 px-4 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                  }
                >
                  Dashboard
                </span>
              </div>
            </div>
          </Link>
          <Link href='/orders'>
            <div className="p-10">
              <div className="group relative w-max">
                <HiOutlineShoppingBag size={20} />
                <span
                  className={
                    resolvedTheme === 'light' ?
                      "pointer-events-none absolute -top-2 left-8 w-max bg-slate-300 py-2 px-4 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                      : "pointer-events-none absolute -top-2 left-8 w-max text-white bg-slate-700 py-2 px-4 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                  }
                >
                  Orders
                </span>
              </div>
            </div>
          </Link>
          <Link href='#'>
            <div className="p-10">
              <div className="group relative w-max">
                <IoReload size={20} onClick={() => router.reload()} />
                <span
                  className={
                    resolvedTheme === 'light' ?
                      "pointer-events-none absolute -top-2 left-8 w-max bg-slate-300 py-2 px-4 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                      : "pointer-events-none absolute -top-2 left-8 w-max text-white bg-slate-700 py-2 px-4 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                  }
                >
                  Reset
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <main className='sm:ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
