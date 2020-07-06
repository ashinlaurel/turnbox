import React from "react";
import demohype from "../Assets/wincuthype2.png";
import demostec from "../Assets/wincutstec.png";
const Two = () => {
  return (
    <div>
      <section class="mb-1 md:mb-4 -mt-20  md:-mt-32 font-sans container w-full mx-auto flex flex-col lg:flex-row text-center lg:text-left sm:items-center">
        <div class="w-full lg:w-3/4">
          <img
            // src="https://stitches.hyperyolo.com/images/demo-phone.png"
            src={demohype}
            alt=""
          />
        </div>
        <div class=" w-full lg:w-1/4 flex flex-col justify-center items-start p-8 items-center lg:items-start">
          <div className="hidden md:flex uppercase leading-none text-black font-bold text-6xl pt-10 ">
            Featured Projects
          </div>
          <label
            for="tagline"
            class="uppercase leading-none text-gray-700 font-bold text-4xl mt-8"
          >
            Hype Digital Website
          </label>

          <p class="leading-normal mb-4 text-gray-700 my-2">
            A front-end heavy website custom made for a digital marketing
            startup. Features like blog page and instant contact us form mailing
            service are all embedded within the website.
          </p>
          <a
            href="https://hypedigi.com/"
            target="_blank"
            class="my-1 font-normal bg-gray-600 hover:bg-gray-700 px-2 py-1 rounded text-white"
          >
            Check it out
          </a>
        </div>
      </section>
      <section class=" md:my-8 pt-2  md:pt-8 font-sans container w-full m-auto flex flex-col-reverse lg:flex-row text-center lg:text-left sm:items-center">
        <div class="w-full lg:w-1/4 flex flex-col justify-center items-start p-8 items-center lg:items-start">
          <label
            for="tagline"
            class="uppercase leading-none text-gray-700 font-bold text-4xl"
          >
            Stec Systems Website
          </label>

          <p class="leading-normal mb-4 text-gray-700 my-2">
            Pleasant UI packed with an admin dashboard with a complete secure
            authentication solution. Facilitates the company to collect orders
            from customers online and view them in a custom made dashboard.
          </p>
          <a
            href="https://stecsystems.in/"
            target="_blank"
            class="my-1 font-normal bg-gray-600 hover:bg-gray-700 px-2 py-1 rounded text-white"
          >
            Check it out
          </a>
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
