import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import { apiURL,filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner"

function App() {
  const[courses,setCourses]=useState([])
  const[loading,setLoading]=useState(true)
  const[category,setCategory]=useState(filterData[0].title);
  useEffect(()=>{
    const fetchData=async()=>{
      setLoading(true)
      try{
        const res=await fetch(apiURL);
        const data=await res.json(); 
        console.log(data)
        setCourses(data.data);
      }
      catch(error){
        toast.error("Something went wrong")
      }
      setLoading(false)
    }
    fetchData();
  },[])
  return (
    <div className="min-h-screen flex flex-col bg-indigo-700">
      <div className="bg-indigo-700 ">
        <Navbar/>

        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}/>

        <div className="w-11/12 max-width-[1200px] flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
          {
            loading ? (<Spinner/>):(<Cards courses={courses}
            category={category}/>)
          }
        </div>
        
      </div>
    </div>
  );
}

export default App;
