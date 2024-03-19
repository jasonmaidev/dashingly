import React, { useState } from "react";
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';
import LineChart from "@/components/LineChart";
import { useTheme } from 'next-themes'

const dashboard = () => {
  const { resolvedTheme } = useTheme();

  return (
    <main className={
      resolvedTheme === 'light' ?
        'min-h-screen bg-slate-50 text-slate-800'
        :
        'min-h-screen bg-slate-700'
    }>
      <Header pageType='Overview' />
      <TopCards />
      <div className='p-8 grid md:grid-cols-5 grid-cols-1 gap-4'>
        <BarChart />
        <LineChart />
        <RecentOrders />
      </div>
    </main>
  );
};

export default dashboard;
