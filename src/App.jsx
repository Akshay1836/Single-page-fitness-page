import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Customers from "./components/Customers/Customers";
import Features from "./components/Features/Features";
import Values from "./components/Values/Values";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import Announcement from "./components/Announcement/Announcement";
import Navbar from "./components/Navbar/Navbar";

function App() {


  return (
    <div className="bg-gradient-to-l from-slate-800 to-violet-900 overflow-hidden">
      <Navbar/>
      <Home />
      <Customers />
      <Features/>
      <Values/>
      <Booking/>
      <Announcement/>
      <Footer/>
    </div>
  );
}

export default App;
