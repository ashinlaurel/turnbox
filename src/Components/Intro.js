import React from "react";
const Intro = () => {
  return (
    <section class=" bg-gray-300 font-sans">
      <div class="container m-auto  flex flex-col md:flex-row w-screen">
        <div class="flex flex-col w-full lg:w-1/2 justify-center items-start py-8">
          <label for="tagline" class="uppercase tracking-loose text-3xl">
            TurnBox
          </label>
          <p class="leading-normal mb-4">
            Need a custom made modern and innovative website for your business?
            Need features like database integration and authentication to be
            embedded your website? Look no further. Here at TurnBox we strive to
            deliver the best web solutions for businesses by building
            innovative, inituitve and secure websites and web apps.
          </p>
          <button class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
            Learn More
          </button>
        </div>
        <div class="w-full lg:w-1/2 lg:py-6">
          <img
            src="https://stitches.hyperyolo.com/images/demo-devices.png"
            alt="image"
            class="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
