import React, { useState } from "react";
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';
import LineChart from "@/components/LineChart";

const dashboard = () => {
  return (
    <main className='min-h-screen'>
      <Header pageType='Overview' />
      <TopCards />
      <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
        <BarChart />
        <LineChart />
        <RecentOrders />
      </div>
    </main>
  );
};

export default dashboard;
