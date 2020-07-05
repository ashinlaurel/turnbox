import React from "react";
import demophone from "../Assets/phone.png";
const Features = () => {
  return (
    <div>
      <div class="font-sans container w-full m-auto flex flex-col lg:flex-row justify-center my-8">
        <div class="order-2 lg:order-1 w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 mt-8">
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2"
            alt=""
          >
            <i className="fa fa-rocket text-2xl text-blue-700"></i>
          </div>
          <h2 class="text-black mb-2 font-normal">React.js</h2>
          <p class="text-gray-700 leading-normal mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2"
            alt=""
          >
            <i className="fa fa-rocket text-2xl text-blue-700"></i>
          </div>
          <h2 class="text-black mb-2 font-normal">ExpressJS</h2>
          <p class="text-gray-700 leading-normal mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2"
            alt=""
          >
            <i className="fa fa-rocket text-2xl text-blue-700"></i>
          </div>
          <h2 class="text-black mb-2 font-normal">Context Api / Redux</h2>
          <p class="text-gray-700 leading-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div class="order-1 lg:order-2 w-full lg:w-1/2 max-w-sm m-auto mb-6 lg:mb-0">
          <img
            // src="https://stitches.hyperyolo.com/images/demo-phone.png"
            src={demophone}
            alt=""
          />
        </div>
        <div class="order-last w-full lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 mr-8">
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2"
            alt=""
          >
            <i className="fa fa-rocket text-2xl text-blue-700"></i>
          </div>
          <h2 class="text-black mb-2 font-normal">MongoDB / Firestore</h2>
          <p class="text-gray-700 leading-normal mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2"
            alt=""
          >
            <i className="fa fa-rocket text-2xl text-blue-700"></i>
          </div>
          <h2 class="text-black mb-2 font-normal">Socket.io</h2>
          <p class="text-gray-700 leading-normal mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 mb-2"
            alt=""
          >
            <i className="fa fa-rocket text-2xl text-blue-700"></i>
          </div>
          <h2 class="text-black mb-2 font-normal">
            AWS ec2 / Firebase Hosting
          </h2>
          <p class="text-gray-700 leading-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
