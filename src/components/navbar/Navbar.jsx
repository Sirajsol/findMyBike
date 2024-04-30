import Link from "next/link"
import React from "react"
import styles from'./page.module.css'
import logo from'../../../public/wanted.jpeg'
import Image from "next/image"
import DarkMode from "../darkmode/DarkMode"
const Navbar=()=>{
    return<div className={styles.whole}>
     <div className={styles.logo}>
     <Link href="/" className={styles.ln}>
        <Image src={logo} className={styles.im}></Image>
        </Link>
        </div>   
    <div className={styles.cont}>
    <Link href="/" className={styles.ln}>Home</Link>
    {/* <Link href="/portfolio"  className={styles.ln}>Portfolio</Link> */}
    {/* <Link href="/dashboard"  className={styles.ln}>Dashboard</Link> */}
    {/* <Link href="/blog"  className={styles.ln}>Blog</Link> */}
    {/* <Link href="/about"  className={styles.ln}>About</Link> */}
    <Link href="/bikes"  className={styles.ln}>Bikes</Link>
    <DarkMode/>
    </div>
    
    </div>
}
export default Navbar