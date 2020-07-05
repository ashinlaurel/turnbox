import React from "react";
import demohype from "../Assets/wincuthype2.png";
import demostec from "../Assets/wincutstec.png";
const Two = () => {
  return (
    <div>
      <section class="mb-4 -mt-20 font-sans container w-full m-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center">
        <div class="w-full lg:w-3/4">
          <img
            // src="https://stitches.hyperyolo.com/images/demo-phone.png"
            src={demohype}
            alt=""
          />
        </div>
        <div class="w-full lg:w-1/4 flex flex-col justify-center items-start p-8 items-center lg:items-start">
          <label
            for="tagline"
            class="uppercase tracking-wide text-gray-700 font-bold"
          >
            TurnBox
          </label>
          <h1 class="my-4 font-normal">Our Work Flow</h1>
          <p class="leading-normal mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <section class="my-8 pt-8 font-sans container w-full m-auto flex flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center">
        <div class="w-full lg:w-1/4 flex flex-col justify-center items-start p-8 items-center lg:items-start">
          <label
            for="tagline"
            class="uppercase tracking-wide text-gray-700 font-bold"
          >
            TurnBox
          </label>
          <h1 class="my-4 font-normal">Our Work Flow</h1>
          <p class="leading-normal mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="w-full lg:w-3/4 ">
          <img
            // src="https://stitches.hyperyolo.com/images/demo-phone.png"
            src={demostec}
            alt=""
            className=" "
          />
        </div>
      </section>
    </div>
  );
};

export default Two;
