import "react-alice-carousel/lib/alice-carousel.css"
import './carousel.css';
import axios from "axios";
import { useState } from "react";                     
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Icon } from "@iconify/react";


const Slideshow=()=>{

    const [data,setData]=useState({})
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDRjZmJiZDFkNGVkMDI0MmMxMjIwODdhYTBmZWE0MCIsInN1YiI6IjY0YzkwNzVmMWZhMWM4MDE1MTQ0ZDhiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gwz_Tq1TlLyBw0FpA5vOHLaZkAGYu9XJSJU9YsQBgS8'
    const navigate=useNavigate()

    const url=`https://api.themoviedb.org/3/trending/all/day`

    
    useEffect(() => {
        axios.get(url,{headers: { Authorization: `Bearer ${token}` }}).then((response)=>{
            setData(response.data)
            console.log(response.data);
        }).catch((error)=>{
          if(error.response){
            console.log(error.response.data);
            // setErr(error.response.data.message)
          //   alert(`Error:${error.response.data.message}`)
          }
        })

            //    setMovies(data)

    },[])

    return(
      <div className="container-fluid " style={{height:"100vh"}}>

   <div className='row ms-2  mb-2 '>
<h1 className="d-flex justify-content-center mt-3">Trending now<Icon icon="streamline:food-popcorn-cook-corn-movie-snack-cooking-nutrition-bake"  className="popcornIcon mt-2"/></h1>
   </div>
    <div className="row mx-md-5" >
    
    <Swiper
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
      pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
               {data.results?.map((movie)=>
                <SwiperSlide>
 <div 
   style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
    height:"70vh",
  width: "100%",
  backgroundSize:"cover",
backgroundPosition: "center",
backgroundRepeat:"no-repeat",

}}>
<div className='row bg-dark h-100 bg-opacity-75 d-flex flex-column justify-content-end' style={{color:"white"}}>
  <div className='col-8 col-sm-8 col-md-6 ms-5 mb-5'>
  <h1>{movie.title}</h1>
<p>{movie.overview}</p>
<p>Rating : {movie.vote_average}<FaStar className='ms-2 mb-1'/></p>
  </div>
</div>
</div>
 

                </SwiperSlide>
                )}
                </Swiper>
                </div>

<div className='d-flex justify-content-center mt-5 mb-3'>
<button className='btn btn-light' onClick={()=>{navigate('/dashboard')}}>Explore more<FaLongArrowAltRight className='ms-2'/></button>
   </div>



        
</div>   
   

    )
}
export default Slideshow;




