import Head from 'next/head'
import Image from 'next/image'
import Attempt from '../components/Attempt'
import Square from '../components/Square'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        <Attempt></Attempt>
        <Attempt></Attempt>
        <Attempt></Attempt>
        <Attempt></Attempt>
        <Attempt></Attempt>
        <Attempt></Attempt>

      </div>

      
    </div>
  )
}
