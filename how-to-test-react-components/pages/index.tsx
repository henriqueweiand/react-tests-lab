import Head from 'next/head'

import styles from '@/pages/index.module.css'
import SearchBox from './components/SearchBox'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SearchBox requestSearch={console.log} />
      </main>
    </div>
  )
}
