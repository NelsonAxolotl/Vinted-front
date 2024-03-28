import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*-----Routes---*/
import Home from "./assets/Pages/Home"
import Offer from "./assets/Pages/Offer"
import Signup from "./assets/Pages/Signup"
/*-----Compossant----*/
import Header from "./assets/Components/Header"
import NotFound from './assets/Components/NotFound';

function App() {

  return (

    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Router>
  )

}

export default App
