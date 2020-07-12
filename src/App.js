import React from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Head from "./Components/Head";
import Intro from "./Components/Intro";
import Portfolio from "./Components/Two";
import Two from "./Components/Two";
import Three from "./Components/Three";
import Features from "./Components/Features";
import WhatWeDo from "./Components/WhatWeDo";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import Contactus from "./Components/Contactus";

axios.defaults.baseURL =
  "https://us-central1-turnbox-app.cloudfunctions.net/app";
// axios.defaults.baseURL = "http://localhost:3001/";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Intro />
      <Two />
      <Features />
      <Three />
      {/* <div className="w-full h-10"></div> */}
      {/* <WhatWeDo /> */}
      <Team />
      <Contactus />
      {/* <Pricing /> */}
      <Footer />
    </div>
  );
}

export default App;
