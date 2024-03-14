import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Header from '@/components/Header.jsx';
import { useDataContext } from '@/context/dataContext';

const orders = ({ handleRemove }) => {
  const data = useDataContext()
  console.log(data)
  return (
    <div className=' min-h-screen'>
      <Header pageType='Orders' />
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg  overflow-y-auto'>
          <div className='flex flex-row gap-2 justify-center'>
            <button className='bg-gray-300 px-4 py-2 rounded-xl'>+</button>
            <button onClick={handleRemove} className='bg-gray-300 px-4 py-2 rounded-xl'>-</button>
          </div>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Order</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className='hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-gray-500 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <FaShoppingBag className='text-purple-800' />
                  </div>
                  <div className='pl-4'>
                    <p className=' font-bold' suppressHydrationWarning>
                      ${order.total.toLocaleString()}
                    </p>
                    <p className=' text-sm'>{order.name.first}</p>
                  </div>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>
                  <span
                    className={
                      order.status == 'Processing'
                        ? 'bg-green-200 p-2 rounded-lg'
                        : order.status == 'Completed'
                          ? 'bg-blue-200 p-2 rounded-lg'
                          : 'bg-yellow-200 p-2 rounded-lg'
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
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
