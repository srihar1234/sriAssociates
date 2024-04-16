import './App.css'
import {Routes,Route} from "react-router-dom";
import Home from "../Routes/Home";
import Startup from "../Routes/Startup";
import Gst from "../Routes/Gst";
import IncomeTax from "../Routes/IncomeTax";
import TaxCompliance from "../Routes/TaxCompliance";
import Contact from "../Routes/Contact";



function App() {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/startup" element={<Startup/>}/>
          <Route path="/gst" element={<Gst/>}/>
          <Route path="/incometax" element={<IncomeTax/>}/>
          <Route path="/tax/compliance" element={<TaxCompliance/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
