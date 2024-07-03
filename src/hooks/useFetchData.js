import React, { useEffect, useState } from 'react'

const useFetchData = (url) => {
  const [data,setDate]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  useEffect(()=>{
    setLoading(true);
    const fetchData=async()=>{
        try {
       const data=await fetch(url);
       const res=await data.json();
       setDate(res.data.date);
        } catch (error) {
            setError(error)
        }finally {
            setLoading(false);
        }
    }
    fetchData();
  },[]);

  return {loading,error,data}
}

export default useFetchData
