import Head from 'next/head'

import styles from '@/pages/index.module.css'
import DataFetcher from '@/components/DataFetcher'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main role="main">
        <DataFetcher url="https://api.chucknorris.io/jokes/categories" />
      </main>
    </div>
  )
}
