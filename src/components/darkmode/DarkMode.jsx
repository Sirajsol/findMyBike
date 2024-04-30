"use client"
import React, { useContext } from "react";
import styles from './page.module.css'
import { Mycontext } from "@/context/mycontext";
const DarkMode=()=>{
    const mood="dark"
    const {mode,toggle}=useContext(Mycontext)
return<div className={styles.cont}>
    <div className={styles.icn}>Light</div>
    <div className={styles.icn}>Dark</div>
    <div className={styles.ball} style={mode==="dark"?{left:"0px"}:{left:"35px"}}
    onClick={()=>{toggle()}}
    ></div>
</div>
}
export default DarkMode;