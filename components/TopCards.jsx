import React from 'react'
import { useTheme } from 'next-themes'

const TopCards = () => {
    const { resolvedTheme } = useTheme()
    return (
        <div className='grid lg:grid-cols-5 gap-4 px-8 pt-4'>
            <div className={
                resolvedTheme === 'light' ?
                    'lg:col-span-2 col-span-1 flex justify-between w-full border p-8 rounded-3xl'
                    : 'lg:col-span-2 col-span-1 flex justify-between w-full border border-slate-900 p-8 rounded-3xl'
            }
            >
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$7,846</p>
                    <p className='text-slate-400'>Daily Revenue</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center px-4 py-2 rounded-2xl'>
                    <span className='text-green-700 text-lg'>+18%</span>
                </p>
            </div>
            <div className={
                resolvedTheme === 'light' ?
                    'lg:col-span-2 col-span-1 flex justify-between w-full border p-8 rounded-3xl'
                    : 'lg:col-span-2 col-span-1 flex justify-between w-full border border-slate-900 p-8 rounded-3xl'
            }>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$1,437,876</p>
                    <p className='text-slate-400'>YTD Revenue</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center px-4 py-2 rounded-2xl'>
                    <span className='text-green-700 text-lg'>+11%</span>
                </p>
            </div>
            <div className='flex justify-between w-full shadow-xl p-8 rounded-3xl'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>11,437</p>
                    <p className='text-slate-400'>Customers</p>
                </div>
                <p className='bg-green-200 flex justify-center items-center px-4 py-2 rounded-2xl'>
                    <span className='text-green-700 text-lg'>+17%</span>
                </p>
            </div>
        </div>
    )
}

export default TopCards