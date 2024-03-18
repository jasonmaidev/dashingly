import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useDataContext } from '@/context/dataContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = useDataContext()

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: data.map((order) => order.date),
      datasets: [
        {
          label: 'Sales $',
          data: data.map((order) => order.total),
          borderColor: 'rgb(7, 217, 189)',
          borderWidth: 2,
          backgroundColor: 'rgb(84, 255, 232, 0.3)',
          borderRadius: 16,
          borderSkipped: false,
        },
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenue',
          color: '#f472b6'
        }
      },
      maintainAspectRatio: false,
      responsive: true,
    })
  }, [])

  return (
    <>
      <div className='w-full md:col-span-5 lg:col-span-5 xl:col-span-2 relative h-[40vh]  xl:h-[70vh]  m-auto p-4 md:p-12 shadow-xl rounded-3xl'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
