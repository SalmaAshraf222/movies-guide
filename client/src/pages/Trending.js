import Slideshow from "../components/carousel/carousel";
import Nav from "../components/Navbar/navbar";
import '../components/carousel/carousel.css';

const Trending=()=>{
console.log("trending")
    return(
        <div className="container-fluid backgroundColor">
          <div className="row  ">      
              <Nav/>
</div>
          <div className="row">
            <Slideshow/>      
</div>

  </div>
  )
}
export default Trending;