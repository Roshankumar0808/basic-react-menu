import React, { useEffect, useState } from "react";
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import { apiUrl,filterData } from "./data";
import { toast } from "react-toastify";
import Footer from "./Components/Footer";


const App = () => {
  const[courses,setcourse]=useState(null);
  const[loading,setLoading]=useState(true);
  const[category,setcategory]=useState(filterData[0].title);
    async function fetchData(){
      setLoading(true);
      try{
       let res=await fetch(apiUrl);
       let output=await res.json();
       setcourse(output.data);
     //  console.log(data);
      }
      catch(error){
       toast.error("Something Went Wrong");
      }
      setLoading(false);
    }
    
 
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 app-container">
    <div className="content-wrapper">
    <div>
    <Navbar/>
    </div>
    <div className="bg-bgDark2">
    <div>
    <Filter filterData={filterData} category={category} setcategory={setcategory}/>
    </div>
    </div>
    <div>
    {
      loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
    }
    
    </div>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
};


export default App;
