import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import { Providers } from '@/components/providers';
import { data } from "@/data/data";
import { DataContext } from "@/context/dataContext";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function App({ Component, pageProps }) {
  const [, forceUpdate] = useState();
  const handleRemove = () => {
    data.pop()
    forceUpdate(Math.random())
  };

  const currentDateString = () => {
    const date = new Date();
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const firstNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'George', 'Harry', 'Isaac', 'Jenny'];

  const randomFirstName = () => {
    return firstNames[Math.floor(Math.random() * firstNames.length)];
  };

  const lastNames = ['Adamo', 'Benson', 'Kim', 'Ramirez', 'Evena', 'Frankins', 'Harrington', 'Harley', 'Chang', 'Jennings'];

  const randomLastName = () => {
    return lastNames[Math.floor(Math.random() * lastNames.length)];
  };

  const randomNumber = () => {
    return 10000 + Math.floor(Math.random() * (100000 - 10000 + 1));
  };

  const handleAdd = () => {
    let newData = {
      id: uuidv4(),
      name: {
        first: randomFirstName(),
        last: randomLastName,
      },
      total: randomNumber(),
      status: 'Processing',
      method: 'Visa',
      date: currentDateString(),
    }
    data.unshift(newData);
    console.log(newData);
    console.log(data);
    forceUpdate(Math.random())
  };

  return (
    <Providers>
      <Sidebar>
        <DataContext.Provider value={data}>
          <Component {...pageProps} handleRemove={handleRemove} handleAdd={handleAdd} />
        </DataContext.Provider>
      </Sidebar>
    </Providers>
  );
}
