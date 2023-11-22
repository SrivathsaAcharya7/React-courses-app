import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const[category,setCategory]=useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();

  },[])

  return (
    <div className="min-h-screen flex flex-col bg-purple-950">
      <div>
      <Navbar></Navbar>
      </div>
      <div>
      <div>
      <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>
      
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">{loading ? <Spinner /> : <Cards courses={courses} category={category}/>}</div>
        
      </div>
      
      
    </div>
  );
}

export default App;
