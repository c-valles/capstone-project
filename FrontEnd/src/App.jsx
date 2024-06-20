//Dependencies
import { useEffect, useState } from "react"
import "./App.css"
import axios from "axios";
import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";

//Pages Imports
import Homepage from "../src/Pages/Homepage";
import Account from "../src/Pages/Account";
import FishPage from "../src/Pages/FishPage";
import BugPage from "../src/Pages/BugPage";
import FossilsPage from "../src/Pages/FossilsPage";
import SeaPage from "../src/Pages/SeaPage";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("https://api.nookipedia.com/nh/fish", {
          headers: {
            "X-API-KEY": import.meta.env.VITE_NOOK_API_KEY
          }
        });
      
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/fish' element={<FishPage/>}/>
        <Route path='/seacreatures' element={<SeaPage/>}/>
        <Route path='/bugs' element={<BugPage/>}/>
        <Route path='/fossils' element={<FossilsPage/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
