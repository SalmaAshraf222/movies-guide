
import About from "../components/details/about";
import Cast from "../components/details/cast";
import Trailer from "../components/details/trailer";
import "../components/carousel/carousel.css"
import Nav from "../components/Navbar/navbar";


const Details=()=>{
    // const [favorites,setFavorites]=useState([])

    return(
        <div className="container-fluid backgroundColor ">
            <div className="row ">
            <Nav 
            // favorites={favorites}
            />

            </div>
           

 <div className="row">
 <About 
//  favorites={favorites} setFavorites={setFavorites}
 />  

 </div>

 <div className="row">
 <Cast/>    
<Trailer/>
 </div>

 </div>
       
    )
}
export default Details