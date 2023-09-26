import axios from "axios";
import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
const stateContext = createContext();

export function StateProvider({children}) {
  const [favs,setFavs]=useState([]);

  const getData=(movieId)=>{
    const url=`https://api.themoviedb.org/3/movie/${movieId}`
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDRjZmJiZDFkNGVkMDI0MmMxMjIwODdhYTBmZWE0MCIsInN1YiI6IjY0YzkwNzVmMWZhMWM4MDE1MTQ0ZDhiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gwz_Tq1TlLyBw0FpA5vOHLaZkAGYu9XJSJU9YsQBgS8'

        axios.get(
        url,{headers: { Authorization: `Bearer ${token}` }}).then((response)=>{
        //  if(favs.id!==movieId){
          setFavs((prevState)=> {
                    return[
                        ...prevState , response.data
                    ]
                })
              // }
    }).catch((error)=>{
      if(error.response){
        console.log(error.response.data);
      }
   
    })}
    


  return (
    <stateContext.Provider
    value={{favs, getData,setFavs}}
    >
{children}
    </stateContext.Provider>
  )
  
}
export default stateContext;
