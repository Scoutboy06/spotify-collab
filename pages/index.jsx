// import { useState } from 'react';
import Head from 'next/head';
// import Link from 'next/link';


import Navbar from '@/components/Navbar';


import styles from './index.module.css';












export default function Home() {
  // const [ searchValue, setSearchValue ] = useState('');
  // const [ albums, setAlbums ] = useState([]);

  

  return <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />

    {/* <main className={styles.main}>
      <Link href="/api/login">
        <button>Logga in</button>
      </Link>

      <div>
        <input
          type="text"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder="Sök efer album"
        />

        <button onClick={search}>Sök</button>
      </div>

      <div className={styles.albums}>
        { albums.forEach((album, index) => (
          <div key={index} className={styles.album}>
            Album
          </div>
        )) }
      </div>
    </main> */}
  </>
}
