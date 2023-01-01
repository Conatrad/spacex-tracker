import Head from 'next/head'
import { Inter, Lancelot } from '@next/font/google'
import { lutimes } from 'fs/promises'
import Card from '../components/cards';


const inter = Inter({ subsets: ['latin'] })

export default function Home({ launches }: any) {

 const launchArray = launches.results;
 
  return (
    <>
      <Head>
        <title>Launch Countdown</title>
        <meta name="description" content="A site to keep track of SpaceX launches" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1 className='m-20 text-6xl font-bold text-center'>Upcoming Launches</h1>
          {<ul>
              {launchArray.map((launch: any) => (
                <li className="flex justify-center m-8" key={launch.id}>
                  <Card
                  header={launch.name}
                  subheader={launch.launch_service_provider.name}
                  location={launch.pad.location.name}
                  date={launch.window_start}
                  description="Here is a description for my card"
                  />
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