import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='min-h-screen flex flex-col align-middle items-center justify-between mx-auto text-center p-8'>
          <Header />
          <div>
            <p className='md:text-3xl pb-2'>Robust Data Synchronicity.</p>
            <p className='md:text-8xl pb-8 font-medium'>
              <span className='
              pr-2
              block 
              sm:inline 
              text-transparent 
              bg-clip-text 
              bg-gradient-to-br from-teal-300 to-fuchsia-500
              hover:text-transparent 
              hover:bg-gradient-to-bl from-teal-300 to-fuchsia-500
              '>
                Dashingly
              </span>
              Elegant.
            </p>
            <Link href='/dashboard'>
              <button
                className='
               py-4 
               px-12 
               hover:bg-slate-700 
               rounded-2xl 
               border
               border-1 
               text-xs
               sm:text-lg
               '>
                View Dashboard
              </button>
            </Link>
          </div>
          <h4 className='text-xs sm:text-sm'>Built with 💛 by JasonMai.dev</h4>

        </div >
      </main >
    </>
  );
}
