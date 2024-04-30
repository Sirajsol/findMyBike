import Image from 'next/image'
import styles from './page.module.css'
import store from'public/store.jpg'

const About=()=> {
  return (
    <div className={styles.whole}>
      <div className={styles.up}>
        <Image src={store} className={styles.uimg} ></Image>
        <div className={styles.uttl}>here it is, some fake text to give some meaning to this design</div>
      </div>
      <div className={styles.bottom}>
      <div className={styles.bleft}>ff</div>
      <div className={styles.bright}>ff</div>
      </div>
    </div>
  )
}
export default About