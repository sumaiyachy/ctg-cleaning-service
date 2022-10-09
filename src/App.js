import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { allRoute} from "./routes/allRoute";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

   useEffect(() => {
    AOS.init();
   }, []);

  return (
      <Navbar>   
  <Routes>
      {
        allRoute.map(({path, Component}, index) =>(<Route key={index} path={path} element={<Component/>}/>))
      }
      </Routes>
        </Navbar> 
    
  );
}

export default App;
