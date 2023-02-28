import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('https://strapi-production-ca04.up.railway.app/api/about')
      .then((res) => res.json())
      .then((data) => {
        setAboutData(data.data.attributes)
      })
  }, [])
  console.log(aboutData);
  // const { title, slogan } = aboutData;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>{aboutData?.title}</p>
        <p>{aboutData?.slogan}</p>
      </main>
    </>
  )
}
