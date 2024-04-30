
const getData =async()=>{
   
    const data=await fetch("http://localhost:3000/api/see?k=15",{
    
    cache:"no-store"
    });
    if(!data.ok){
    throw new Error("faild to retrive data");
    }
    return data.json();
    }
const See=async({params})=>{


    const {k}=params
    console.log('request '+k)
    const d=await getData()
  
    if(d.ok){
        
      
    }
    return<div>wow!! {d}</div>

}
export default See