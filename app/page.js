import Image from 'next/image'
import styles from './page.module.css'
import Navbar from './components/navbar'
import Main from './components/main'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Main/>
    </main>
  )
}

