import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDataContext } from '@/context/dataContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
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
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgb(53, 162, 235',
          borderRadius: 16,
          borderSkipped: false,
          borderWidth: 8,
          pointRadius: 4,
          tension: 0.3
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
          text: 'Daily Revenue'
        }
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    })
  }, [])

  return (
    <div className='w-full md:col-span-5 lg:col-span-3 xl:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg'>
      <Line data={chartData} options={chartOptions} />
    </div>
  )
}

export default LineChart