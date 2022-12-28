import Head from 'next/head'
import Image from 'next/image'
import { Inter, Lancelot } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { lutimes } from 'fs/promises'
import Date from '../components/date';


const inter = Inter({ subsets: ['latin'] })

export default function Home({ launches }: any) {

 const launchArray = launches.results;
console.log(launches)
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
          { <ul>
              {launchArray.map((launch: any) => (
                <li className={styles.card} key={launch.id}>
                   <h2>{launch.name}</h2>
                    <h4>
                      {launch.launch_service_provider.name}
                    </h4>  
                    <Date dateString={launch.window_start}></Date>
                    <p className={styles.description}>
                      Launch Description: {launch.mission.description}
                    </p>
                </li>
              ))}
            </ul>}
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(){
  //Rocket Launch API v

  // const requestOptions = {
  //   headers: { 'Authorization': `Bearer ${process.env.API_KEY}` }
  // };
  // const res = await fetch('https://fdo.rocketlaunch.live/json/launches', requestOptions);

  //The Space Devs API v
  
  const res = await fetch('https://lldev.thespacedevs.com/2.2.0/launch/upcoming/');
  const launches = await res.json();

    return{
      props:{
        launches
      },
    };

  
}