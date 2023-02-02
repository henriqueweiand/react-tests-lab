import Head from 'next/head'

import styles from '@/pages/index.module.css'
import Counter from '@/components/Counter'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main role="main">
        <Counter />
      </main>
    </div>
  )
}
