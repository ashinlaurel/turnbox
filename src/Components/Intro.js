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
            Higly Responsive Websites.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, ex ea commodo
            consequat. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium natus error sit.
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
