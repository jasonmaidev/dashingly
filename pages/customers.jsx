import React from 'react';
import { useDataContext } from '@/context/dataContext';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import Header from '@/components/Header.jsx';

const customers = () => {
  const data = useDataContext()
  return (
    <div className=' min-h-screen'>
      <Header pageType='Customers' />
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg  overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {data?.map((order, id) => (
              <li key={id} className=' hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-gray-500 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <BsPersonFill className='text-purple-800' />
                  </div>
                  <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                </div>
                <p className='sm:text-left text-right'>{order.name.first}@gmail.com</p>
                <p className='hidden md:flex'>{order.date}</p>
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

export default customers;
