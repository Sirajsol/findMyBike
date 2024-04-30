
'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import Style from './page.module.css'
import Loading from "@/components/loading/loading"
import Ab from "@/components/ab/Ab"
const Bike = ({params}) => {
    const[data,setData]=useState(null)
    const[loading,setLoading]=useState(false)
    const{serial}=params
    // {`https://bikeindex.org:443/api/v3/bikes/${card.id}`}

    useEffect(()=>{
        const f=async()=>{
            setLoading(true)
            const {bike}= await fetch(`https://bikeindex.org:443/api/v3/bikes/${serial}`).then(
                res=>
                {
                    // return res.json()

                    // if(res!=null){
                        // setData(res.json())
                    // }
                 
                    return res.json()
                }
            )
           setData(bike)
           setLoading(false)
            console.log(bike)
        }
        f()

    },[])
    return  <div className={Style.cont}>
    
        {loading?<Loading/>:null} 
       <div className={Style.lo}>
      
      
        </div>
        
        <div className={Style.cov}>
        {data?.thumb?<Image fill src={data.thumb?data.thumb:""} className={Style.img}/>:null}

        </div>
        <div className={Style.imgcon}>
{data?.thumb?<Image fill src={data.thumb?data.thumb:""} className={Style.img}/>:null}
</div>

{data?<div className={Style.inner}>
    <div className={Style.j}>jjjj</div>
    
<h1>{data.title}</h1>
<h5 className={Style.h5}>{data.description}</h5>
<div className={Style.h5}>
<h5 className={Style.h14} >theft   date  </h5> 
{data.date_stolen?<h5 className={Style.h14} >{new Date(data.date_stolen*1000).toLocaleString().substring(0,new Date(data.date_stolen*1000).toLocaleString().indexOf("،"))}</h5>:null}
</div>
<div className={Style.h5}>
<h5 className={Style.h14}>report date 
</h5>
<h5 className={Style.h14}>{new Date(data.registration_created_at*1000).toLocaleString().substring(0,new Date(data.registration_created_at*1000).toLocaleString().indexOf("،"))}</h5>
</div>
<div className={Style.h5}>
<h5 className={Style.h14}>location 
</h5>
<h5 className={Style.h14}>{data.stolen_location}</h5>

</div>
</div>:null}
{/* <Ab/> */}
    </div>
}
 
export default Bike;