import React from "react";
const Navbar = () => {
  return (
    <div className="">
      <nav class="font-sans bg-white text-center flex justify-between my-4 mx-auto container overflow-hidden">
        <a href="/" class="block text-left">
          {/* <img src="" class="h-10 sm:h-10 rounded-full" alt="logo" /> */}
          <div className="text-3xl font-bold">TurnBox</div>
        </a>
        <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
          <li>
            <a
              href="#"
              class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >
              Technology
            </a>
          </li>
          <li class="pr-2">
            <a
              href="#"
              class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >
              Team
            </a>
          </li>
          <li class="pr-2">
            <a
              href="#"
              class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >
              Contant Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
