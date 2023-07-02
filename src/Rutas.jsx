import App from "./App";
import { Home } from "./Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
export function Rutas(){
    return <Router>{/*Todo se debe encapsular en los router */}
    <Routes>
       <Route path="/" element={<App />} />
       <Route  path="/Login" element={<Home/>} />
  
    </Routes>
  </Router>
  }