import './App.css';
import Home from './pages/Home'; 
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {BrowserRouter,Route,Routes,   useParams} from 'react-router-dom'
import { StateProvider } from './components/stateContext/stateContext';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Details from './pages/Details';
import Trending from './pages/Trending';
import Favs from './pages/Favorites';



function App() {
   

return(
    <StateProvider>

<div>
<BrowserRouter>
<Routes>

    <Route path='/' exact element={<Home />}/>
    <Route path="/home" exact element={<Trending />} />
<Route path="/login" exact element={<Login />}/>
<Route path="/register" exact element={<Register />} />
<Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/favs" exact element={<Favs />} />

       
</Routes>
        
    </BrowserRouter>
    </div>
    </StateProvider>

)
}
export default App;