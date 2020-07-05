import React from "react";
import "./App.css";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Intro />
      <Two />
      <Three />
      <Features />
      <div className="w-full h-10"></div>
      {/* <WhatWeDo /> */}
      <Team />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
