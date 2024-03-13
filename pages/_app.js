import '@/styles/globals.css';
import Sidebar from '../components/Sidebar';
import { Providers } from '@/components/providers';

export default function App({ Component, pageProps }) {
  return (
    <Providers >
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </Providers>
  );
}
