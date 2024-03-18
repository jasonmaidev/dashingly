import { useDataContext } from '@/context/dataContext';
import { FaShoppingBag } from 'react-icons/fa';
import { useState } from 'react';
import { useTheme } from 'next-themes'
const RecentOrders = () => {
  const data = useDataContext()
  const { resolvedTheme } = useTheme()

  return (
    <div className={
      resolvedTheme === 'light' ?
        'w-full col-span-1 md:col-span-5 lg:col-span-2 xl:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-3xl overflow-y-scroll no-scrollbar'
        : 'w-full col-span-1 md:col-span-5 lg:col-span-2 xl:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border border-slate-900 rounded-3xl overflow-y-scroll no-scrollbar'
    }
    >
      <div className='flex justify-between items-center'>
        <h1>Recent Orders</h1>
      </div>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className={
              resolvedTheme === 'light' ?
                'hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-gradient-to-r from-cyan-100 to-pink-100 rounded-lg my-3 px-4 py-2 flex items-center cursor-pointer'
                : 'hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-slate-700 rounded-lg my-3 px-4 py-2 flex items-center cursor-pointer'
            }
          >
            <div className='flex'>
              <FaShoppingBag className={
                resolvedTheme === 'light' ? 'text-teal-400' : 'text-slate-500'
              } />
            </div>
            <div className='pl-4'>
              <p className=' font-bold' suppressHydrationWarning >${order.total}</p>
              <p className='text-slate-400 text-sm'>{order.name.first}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm' suppressHydrationWarning >{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
