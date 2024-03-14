import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import { Providers } from '@/components/providers';
import { data } from "@/data/data";
import { DataContext } from "@/context/dataContext";

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <Sidebar>
        <DataContext.Provider value={data}>
          <Component {...pageProps} />
        </DataContext.Provider>
      </Sidebar>
    </Providers>
  );
}
