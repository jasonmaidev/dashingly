import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import { Providers } from '@/components/providers';
import { data } from "@/data/data";
import { DataContext } from "@/context/dataContext";
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [, forceUpdate] = useState();
  const handleRemove = () => {
    data.pop()
    forceUpdate(Math.random())
  };

  return (
    <Providers>
      <Sidebar>
        <DataContext.Provider value={data}>
          <Component {...pageProps} handleRemove={handleRemove} />
        </DataContext.Provider>
      </Sidebar>
    </Providers>
  );
}
