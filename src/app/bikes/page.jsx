'use client'

import BikeCard from "@/components/bikecard/BikeCard";
import Style from '../../../public/Page.module.css'
// import Style from './page.module.css'
import { useEffect, useState } from "react";
import Loading from "@/components/loading/loading";
import r from '../../../public/thf.jpg'
import Image from "next/image";
const f=async()=>{
    const g=await fetch(`https://bikeindex.org:443/api/v3/search?page=${curresntPage}${query}&per_page=15&location=IP&distance=10&stolenness=stolen`)
const d=await g.json()
if(d.length>0){
    setData(d.bikes)
}
}
const Bicks = ({searchParams}) => {
    const[data,setData]=useState([])
    const[wholeNumber,setWholeNumber]=useState(0)
    const[curresntPage,setCurrentPage]=useState(1)
    const[day,setDay]=useState()
    const[month,setMonth]=useState()
    const[year,setYear]=useState()
    const[title,setTitle]=useState('')
    const[query,setQuery]=useState('')
const[loading,setLoading]=useState(false)
    const cat=searchParams.cat

    useEffect(()=>{
        const pls=async()=>{
            setLoading(true)
           const {bikes}=await fetch(`https://bikeindex.org:443/api/v3/search?${query}page=${curresntPage}&per_page=10&location=IP&distance=10&stolenness=stolen`)
           .then(res=>{
             if(!res.ok) {throw Error("no connection")}
           return  res.json()
        }
             )
             if(bikes){
//                 var  date = new Date(1546108200 * 1000);
// console.log(date.toUTCString())
                // alert((bikes[1].date_stolen*1000))
                setData(bikes)
            }
            setLoading(false)
            }
            pls()
    },[curresntPage,query])


    const daterange=()=>{

        const d=`${month}-${day}-${year}`
       const tim= new Date(d).getTime()
    }
    useEffect(()=>{
        const pls=async()=>{
            setLoading(true)
           const rs=await fetch(`https://bikeindex.org:443/api/v3/search/count?page=${curresntPage}&per_page=10&location=IP&distance=10&stolenness=stolen`)
           .then(res=>{
             if(!res.ok) {throw Error("no connection")}
           
           return  res.json()
        }
             )
             if(rs){
                console.log(rs)
//                 var date = new Date(1546108200 * 1000);
// console.log(date.toUTCString())
                // alert((bikes[1].date_stolen*1000))
                setWholeNumber(rs.stolen)
            }
            // setLoading(false)
            }
            pls()
    },[])
const serchterm=()=>{
    if(title.length>0){
        setData([])
    // setCurrentPage(11)
        setQuery(`query=${title}&`)
        // alert(`https://bikeindex.org:443/api/v3/search?${query}page=${curresntPage}&per_page=10&location=IP&distance=10&stolenness=stolen`)
    }
    else{ setQuery(``)
alert('lll')
}
}

    return <div className={Style.cont}>
      
       {wholeNumber>0?<input className={Style.navtextt} type="text" 
    value={`${wholeNumber} stolen case`} 
    />:null} 

<div className={Style.seachcont}>
<div className={Style.search}>
<div className={Style.serchfields}>
<div className={Style.searchtittle}>
    <label className={Style.lab}>date</label>
    <div className={Style.dat}>
        <input className={Style.tx} type="number" placeholder="year"  value={year} onChange={(e)=>{setYear(e.target.value)}}></input>
        <input className={Style.tx} type="number" placeholder="month"  value={month} max={12} min={1} onChange={(e)=>{setMonth(e.target.value)}}></input>
        <input className={Style.tx} type="number" placeholder="day"  value={day} max={31} min={1} onChange={(e)=>{setDay(e.target.value)}} ></input>
    </div>
    
</div>

<div>
    <label className={Style.lab} >title</label>
    <div>
        <input className={Style.titletx} value={title} onChange={(e)=>{
            setTitle('')
            setTitle(e.target.value)}} type="text" placeholder="title" ></input>
       
    </div>
    </div>
    
</div>

<div>
        <button className={Style.searchbut}
        onClick={()=>{
            serchterm()
        }}
        >search</button>
    </div>

</div>
        </div>


        <div className={Style.nav}>
<div className={Style.navcont}>
    <button className={Style.navbut}
    onClick={()=>{
        if(curresntPage>1)
        setCurrentPage(prev=>{
            return prev-1
        })
        setData([])
        setLoading(true)
    }}
    >prev</button>
    <input className={Style.navtext} type="text" 
    value={curresntPage}
    />
    <button className={Style.navbut}
    onClick={()=>{
        setCurrentPage(prev=>{
            return prev+1
        })
        setData([])
        setLoading(true)
    }}

    
    >next</button>
</div>
</div>
       {loading?
       <div className={Style.lo}><Loading/> </div>
       :null} 
{/* {data.map(dd=>{return<div><h1>{ new Date(dd.date_stolen*1000).toLocaleString().substring(0,11)}</h1>
<h1>{new Date('6-19-2024').getTime()}</h1>
</div>})} */}

{data.map(dd=><BikeCard key={dd.id} card={dd}/>)}

{((data.length==0)&&(!loading) &&(query.length>0))?<div className={Style.nodata}>No Data</div>:null}
<dv lassName={Style.nav}></dv>
{data.length>0?(<div className={Style.nav}>
<div className={Style.navcont}>
    <button className={Style.navbut}
    onClick={()=>{
        if(curresntPage>1)
        setCurrentPage(prev=>{
            return prev-1
        })
        setData([])
        setLoading(true)
    }}
    >prev</button>
    <input className={Style.navtext} type="text" 
    value={curresntPage}
    />
    <button className={Style.navbut}
    onClick={()=>{
        setCurrentPage(prev=>{
            return prev+1
        })
        setData([])
        setLoading(true)
    }}

    
    >next</button>
</div>
</div>):null}

    </div>
}
 
export default Bicks;