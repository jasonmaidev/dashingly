import React from 'react'
import { useTheme } from 'next-themes'
import { useDataContext } from '@/context/dataContext';

const TopCards = () => {
    const data = useDataContext()
    const { resolvedTheme } = useTheme()

    const dailyTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        data.reduce((total, item) => total + item.total, 0)
    );

    const yearTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        data.reduce((total, item) => total + item.total, 0) + 1000000
    );

    const totalCustomers = data.length

    return (
        <div className='grid lg:grid-cols-5 gap-4 px-8 pt-4'>
            <div className={
                resolvedTheme === 'light' ?
                    'col-span-1 md:col-span-5 lg:col-span-5 xl:col-span-2 flex justify-between w-full border p-8 rounded-3xl'
                    : 'col-span-1 md:col-span-5 lg:col-span-5 xl:col-span-2 flex justify-between w-full border border-slate-900 p-8 rounded-3xl'
            }
            >
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-xl md:text-2xl font-bold' suppressHydrationWarning>{dailyTotal}</p>
                    <p className='text-slate-400'>Daily Revenue</p>
                </div>
                <p className='bg-green-200 border-2 border-green-300 flex justify-center items-center px-4 py-2 rounded-2xl'>
                    <span className='text-green-700 text-lg'>+18%</span>
                </p>
            </div>
            <div className={
                resolvedTheme === 'light' ?
                    'md:col-span-5 lg:col-span-5 xl:col-span-2 col-span-1 flex justify-between w-full border p-8 rounded-3xl'
                    : 'md:col-span-5 lg:col-span-5 xl:col-span-2 col-span-1 flex justify-between w-full border border-slate-900 p-8 rounded-3xl'
            }>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-xl md:text-2xl font-bold' suppressHydrationWarning>{yearTotal}</p>
                    <p className='text-slate-400'>YTD Revenue</p>
                </div>
                <p className='bg-green-200 border-2 border-green-300 flex justify-center items-center px-4 py-2 rounded-2xl'>
                    <span className='text-green-700 text-lg'>+11%</span>
                </p>
            </div>
            <div className='md:col-span-5 lg:col-span-5 xl:col-span-1 col-span-1 flex justify-between w-full shadow-xl p-8 rounded-3xl'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-xl md:text-2xl font-bold' suppressHydrationWarning>{totalCustomers}</p>
                    <p className='text-slate-400'>Sales</p>
                </div>
                <p className='bg-green-200 border-2 border-green-300 flex justify-center items-center px-4 py-2 rounded-2xl'>
                    <span className='text-green-700 text-lg'>+17%</span>
                </p>
            </div>
        </div>
    )
}

export default TopCards