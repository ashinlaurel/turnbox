import React from "react";
import AshinPic from "../Assets/ashin.jpg";
import AlanPic from "../Assets/alan.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-300 py-5 ">
      <ScrollAnimation animateIn="fadeIn" animateOnce="true">
        <div className="text-5xl tracking-tight leading-tight font-bold my-2 border-b border-black">
          Our Team
        </div>
      </ScrollAnimation>

      <div class=" flex items-center w-full justify-center my-10  ">
        <div class="mx-1 xl:mx-8 w-1/2 xl:w-1/6 flex flex-col items-center justify-center bg-white p-4 shadow-xl rounded-lg">
          <ScrollAnimation animateOnce="true" animateIn="fadeIn">
            <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
              <img src={AshinPic} alt="" class="h-full w-full object-cover" />
            </div>

            <h2 class="mt-4 font-bold text-xl">Ashin Laurel</h2>
            <h6 class="mt-2 text-sm font-medium">Founder</h6>

            <p class=" hidden text-xs text-gray-500 text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
              molestiae nulla.
            </p>

            <ul class="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/ashin-laurel-49a476171/"
                  target="_blank"
                  class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ashinlaurel"
                  target="_blank"
                  class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9496249657"
                  target="_blank"
                  class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <i class="fa fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </ScrollAnimation>
        </div>
        <div class="mx-1 xl:mx-8 w-1/2 xl:w-1/6 flex flex-col items-center justify-center bg-white p-4 shadow-xl rounded-lg">
          <ScrollAnimation animateOnce="true" animateIn="fadeIn">
            <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
              <img src={AlanPic} alt="" class="h-full w-full object-cover" />
            </div>

            <h2 class="mt-4 font-bold text-xl">Alan Tom Jose</h2>
            <h6 class="mt-2 text-sm font-medium">Founder</h6>

            <p class=" hidden text-xs text-gray-500 text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
              molestiae nulla.
            </p>

            <ul class="flex flex-row mt-4 space-x-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/alan-tom-jose-7665b3197/"
                  target="_blank"
                  class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/wilderbe4st/"
                  target="_blank"
                  class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <i class="fa fa-github"></i>
                </a>
              </li>
              <li id="contact">
                <a
                  href="https://wa.me/9995131244"
                  target="_blank"
                  class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
                >
                  <i class="fa fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Team;
