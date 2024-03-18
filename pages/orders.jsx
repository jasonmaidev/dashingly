import React from 'react';
import { HiShoppingBag } from "react-icons/hi";
import { BsThreeDotsVertical } from 'react-icons/bs';
import Header from '@/components/Header.jsx';
import { useDataContext } from '@/context/dataContext';
import { useTheme } from 'next-themes'
import { FiPlus, FiMinus } from "react-icons/fi";

const orders = ({ handleRemove, handleAdd }) => {
  const { resolvedTheme } = useTheme();
  const data = useDataContext()

  return (
    <div className={
      resolvedTheme === 'light' ?
        'min-h-screen bg-slate-50 text-slate-800'
        :
        'min-h-screen bg-slate-800'
    }>
      <Header pageType='Orders' />
      {/* Buttons */}
      <div className='flex flex-row gap-2 justify-center pt-8 xl:pt-2'>
        <button
          onClick={handleAdd}
          className='bg-teal-400/40 hover:bg-teal-300 border-2 border-teal-300 p-4 rounded-2xl text-xl'>
          <FiPlus />
        </button>
        <button
          onClick={handleRemove}
          className='bg-pink-400/40 hover:bg-pink-300 border-2 border-pink-300 p-4 rounded-2xl text-xl'>
          <FiMinus />
        </button>
      </div>
      <div className='p-8'>
        <div className={
          resolvedTheme === 'light' ?
            'w-full m-auto px-4 md:px-12 py-4 rounded-3xl overflow-y-auto shadow-2xl'
            : 'w-full m-auto px-4 md:px-12 py-4 rounded-3xl overflow-y-auto shadow-[0_20px_30px_-10px_rgba(0,0,0,0.3)]'
        }
        >
          <div className='my-3 py-2 px-4 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span className='font-bold'>Order</span>
            <span className='sm:text-left text-right font-bold'>Status</span>
            <span className='hidden md:grid font-bold'>Last Order</span>
            <span className='hidden sm:grid font-bold'>Method</span>
          </div>
          {/* Items List */}
          <ul>
            {data.map((order, id) => (
              <div className={
                resolvedTheme === 'light' ?
                  'border-t border-slate-200'
                  : 'border-t border-slate-900'
              }
              >
                <li
                  key={id}
                  className={
                    resolvedTheme === 'light' ?
                      'hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-gradient-to-r from-cyan-100 to-pink-100 rounded-xl my-3 py-2 md:px-4 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
                      : 'hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-slate-700 rounded-xl my-3 py-2 md:px-4 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
                  }
                >
                  <div className='flex'>
                    <div className='p-3 rounded-xl'>
                      <HiShoppingBag
                        className={
                          resolvedTheme === 'light' ? 'text-teal-400' : 'text-slate-500'
                        }
                      />
                    </div>
                    <div className='pl-4'>
                      <p className=' font-bold' suppressHydrationWarning>
                        ${order.total.toLocaleString()}
                      </p>
                      <p className=' text-sm'>{order.name.first}</p>
                    </div>
                  </div>
                  <p className='sm:text-left text-right'>
                    <span
                      className={
                        order.status == 'Processing' ?
                          'bg-teal-500/20  border-2 border-teal-300 py-2 px-4 rounded-xl text-sm'
                          : order.status == 'Completed' ?
                            '  border-2 border-slate-500/30 py-2 px-4 rounded-xl text-sm'
                            : 'bg-pink-500/20 border-2 border-pink-300 py-2 px-4 rounded-xl text-sm'
                      }
                    >
                      {order.status}
                    </span>
                  </p>
                  <p className='hidden md:flex' suppressHydrationWarning>{order.date}</p>
                  <div className='sm:flex hidden justify-between items-center'>
                    <p>{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
