import React from "react";
import demophone from "../Assets/phone.jpg";
const Features = () => {
  return (
    <div className="sm:my-10">
      {" "}
      <div
        id="technology"
        className=" uppercase leading-none text-black text-center font-bold text-6xl pt-10 "
      >
        Our Tech Stack
      </div>
      <div class="font-sans container w-full m-auto flex flex-col lg:flex-row justify-center mt-4 ">
        <div class="px-20 md:px-0 md:mt-8 order-2 lg:order-1 w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 ">
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2"
            alt=""
          >
            <i className="fa fa-desktop text-2xl object-scale-down text-black"></i>
            {/* <img src={ReactIcon} className="p-2" /> */}
          </div>
          <h2 class="text-black mb-2 font-bold">React.js</h2>
          <p class="text-gray-700 leading-normal mb-8">
            Interactive and responsive UIs built using the React framework
          </p>
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2"
            alt=""
          >
            <i className="fa fa-code text-2xl object-scale-down text-black"></i>
          </div>
          <h2 class="text-black mb-2 font-bold">ExpressJS</h2>
          <p class="text-gray-700 leading-normal mb-8">
            Fast and minimalist backends and web frameworks built using Express
          </p>
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2"
            alt=""
          >
            <i className="fa fa-exchange text-2xl object-scale-down text-black"></i>
          </div>
          <h2 class="text-black mb-2 font-bold">Context Api / Redux</h2>
          <p class="text-gray-700 leading-normal">
            Centralised states and logic to maintain maximum performance
          </p>
        </div>
        <div class=" order-1 lg:order-2 w-full lg:w-1/2 max-w-sm m-auto mb-2 lg:mb-0">
          <img
            // src="https://stitches.hyperyolo.com/images/demo-phone.png"
            src={demophone}
            alt=""
            className=" md:-mt-1"
          />
        </div>
        <div class="px-20 md:px-0 order-last w-full lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 mr-8">
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2"
            alt=""
          >
            <i className="fa fa-database text-2xl object-scale-down text-black"></i>
          </div>
          <h2 class="text-black mb-2 font-bold">MongoDB / Firestore</h2>
          <p class="text-gray-700 leading-normal mb-8">
            Modern database solutions for the modern cloud era
          </p>
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2"
            alt=""
          >
            <i
              className="fa fa-feed text-2xl object-scale-down text-black"
              aria-hidden="true"
            ></i>
          </div>
          <h2 class="text-black mb-2 font-bold">Socket.io</h2>
          <p class="text-gray-700 leading-normal mb-8">
            Applications with real-time data transfer ability
          </p>
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2 "
            alt=""
          >
            <i className="fa fa-cloud text-2xl object-scale-down text-black"></i>
          </div>
          <h2 class="text-black mb-2 font-bold ">AWS ec2 / Firebase Hosting</h2>
          <p class="text-gray-700 leading-normal border-b border-gray-500 pb-6 sm:pb-0 sm:border-b-0">
            Secure and scalable deployment solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
