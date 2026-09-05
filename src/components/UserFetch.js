import React from 'react'

import { useState,useEffect } from 'react'

export const API_URL ="https://www.themealdb.com/api/json/v1/1/"

export const UserFetch = (url) => {

 const [data,setData]=useState(null)
 const [eroor,setEroor]=useState(null)
 const [loading,setLoading]=useState(true)

useEffect(() => {
  
if(!url){
    setLoading(false)
    return;
}

const fetchdata = async ()=>{

    try{
    setLoading(true);
    setEroor(null);
    const rsp=await fetch(url);
    if(!rsp.ok)throw new Error("eroor:${rsp.status}");
    const json=await rsp.json();
    setData(json);
    }catch(error){
      setEroor(error.message);
    }finally{
      setLoading(false);
    }
};
fetchdata();

}, [url]);


return {data,loading,eroor};
  
}
