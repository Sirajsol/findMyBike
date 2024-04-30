import Image from 'next/image'
import styles from './page.module.css'
import store from'public/store.jpg'
import thf from'public/thf.jpg'
const Home=()=> {
  return (
    <div className={styles.whole}>
      
<div className={styles.left}>
<div className={styles.l1}>help me finding my bike</div>
<div className={styles.l2}>spot stolen bikes</div>
</div>
<div className={styles.right}>
  <Image src={thf} width={800} height={400}></Image>
</div>

    </div>
  )
}
export default Home
