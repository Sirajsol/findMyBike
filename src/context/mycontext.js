"use client"
const { createContext, useState } = require("react")



   export const Mycontext=createContext();
export const Myprovider=({children})=>{
    const [mode,setMode]=useState("dark");
    const toggle=()=>{
      setMode((prev )=>(prev==="dark"?"light":"dark") )  
    //   alert(mode);
    }
    return <Mycontext.Provider value={
        {mode,
        toggle}

    } > 
<div className={`them ${mode}`}>
{children}
</div>
    </Mycontext.Provider>
};