import React from "react";
import logo from "../Assets/logowhite.png";

const Footer = () => {
  return (
    <div>
      <footer class="font-sans bg-black text-white py-8 px-4">
        <div class="mx-auto container overflow-hidden flex flex-col lg:flex-row justify-between">
          <div className="flex items-start justify-start md:justify-center ">
            <img
              className=" mx-2"
              src={logo}
              alt="logo"
              height=""
              width="40"
            ></img>
            <div className="text-white text-3xl font-bold">TurnBox</div>
          </div>
          <div class="w-1/2 flex text-sm mt-6 lg:mt-0 mx-20">
            {/* <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left">
              <li class="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">
                Product
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Trending
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Catalog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Features
                </a>
              </li>
            </ul> */}
            {/* <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left">
              <li class="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">
                Company
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Press Release
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Strategy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Works
                </a>
              </li>
            </ul> */}
            {/* <ul class="text-gray-700 list-none p-0 font-thin flex flex-col text-left">
              <li class="inline-block py-2 px-3 text-white uppercase no-underline font-medium tracking-wide">
                Info
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Customer Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="inline-block py-2 px-3 text-gray-500 hover:text-gray-500-light no-underline"
                >
                  Started Guide
                </a>
              </li>
            </ul> */}

            {/* <div class="text-gray-700 flex flex-col ">
              <div class="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">
                Follow Us
              </div>
              <div class="flex pl-4 justify-start">
                <a
                  class="block flex items-center text-white hover:text-gray-500 mr-6 no-underline"
                  href="#"
                >
                  <i class="fa fa-github-alt"></i>
                </a>
                <a
                  class="block flex items-center text-white hover:text-gray-500 mr-6 no-underline"
                  href="#"
                >
                  <i class="fa fa-slack"></i>
                </a>
                <a
                  class="block flex items-center text-white hover:text-gray-500 no-underline"
                  href="#"
                >
                  <i class="fa fa-twitter"></i>
                </a>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col ">
            <div className="text-3xl font-bold">Lets keep in touch!</div>
            <div className="text-md font-bold">
              Find us in any of these platforms, we respond in 1-2 business
              days.
            </div>
            <br />
            <div className="text-sm">Phone: +91 9995131244,+91 8848998517 </div>

            <div className="text-sm">
              Email:alantomjose@gmail.com, ashinlaurel9999@gmail.com{" "}
            </div>
          </div>
        </div>
        <div class="pt-4 mt-4 text-gray-700 border-t border-gray-900 text-center">
          ©2020 TurnBox. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
