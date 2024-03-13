import React from 'react';
import { data } from '../data/data.js';
import { FaShoppingBag } from 'react-icons/fa';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg  overflow-y-scroll no-scrollbar'>
      <h1>Recent Orders</h1>
      <ul>
        {data?.map((order, id) => (
          <li
            key={id}
            className='hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-gray-500 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-purple-100 rounded-lg p-3'>
              <FaShoppingBag className='text-purple-800' />
            </div>
            <div className='pl-4'>
              <p className=' font-bold' suppressHydrationWarning >${order.total}</p>
              <p className='text-gray-400 text-sm'>{order.name.first}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm' suppressHydrationWarning >{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
