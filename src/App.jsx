import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
/*-----Routes---*/
import Home from "./assets/Pages/Home"
import Offer from "./assets/Pages/Offer"
/*-----Compossant----*/
import Header from "./assets/Components/Header"
import Hero from './assets/Components/Hero';
import Offers from './assets/Components/Offers';



function App() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers");
        console.log(response.data);
        //console.log(setData);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  return (

    <Router>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="*" element={<p>Error 404</p>} />


      </Routes>
    </Router>

  )
}

export default App
