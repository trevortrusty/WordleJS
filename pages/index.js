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

      {/* <div>
        <Square color="white" place={1} />
        <Square color="white" place={2} />
        <Square color="white" place={3} />
        <Square color="white" place={4} />
        <Square color="white" place={5} />
      </div>
      <div>
        <Square color="white" place={1} />
        <Square color="white" place={2} />
        <Square color="white" place={3} />
        <Square color="white" place={4} />
        <Square color="white" place={5} />
      </div>
      <div>
        <Square color="white" place={1} />
        <Square color="white" place={2} />
        <Square color="white" place={3} />
        <Square color="white" place={4} />
        <Square color="white" place={5} />
      </div>
      <div>
        <Square color="white" place={1} />
        <Square color="white" place={2} />
        <Square color="white" place={3} />
        <Square color="white" place={4} />
        <Square color="white" place={5} />
      </div>
      <div>
        <Square color="white" place={1} />
        <Square color="white" place={2} />
        <Square color="white" place={3} />
        <Square color="white" place={4} />
        <Square color="white" place={5} />
      </div>
      <div>
        <Square color="white" place={1} />
        <Square color="white" place={2} />
        <Square color="white" place={3} />
        <Square color="white" place={4} />
        <Square color="white" place={5} />
      </div> */}
    </div>
  )
}
