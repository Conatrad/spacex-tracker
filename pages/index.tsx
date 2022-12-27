import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { lutimes } from 'fs/promises'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ launches }: any) {
 
  return (
    <>
      <Head>
        <title>Launch Countdown</title>
        <meta name="description" content="A site to keep track of SpaceX launches" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <h1>Upcoming Launches</h1>
          <ul>
              {launches.map((launch: any) => (
                <li className={styles.card} key={launch.id}>
                  <h2>{launch.name}</h2>
                  <p> Launch Date:{launch.date_local}</p>
                </li>
              ))}
            </ul>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(){

  const res = await fetch('https://api.spacexdata.com/v4/launches/upcoming');
  const launches = await res.json();

    return{
      props:{
        launches
      },
    };

  
}