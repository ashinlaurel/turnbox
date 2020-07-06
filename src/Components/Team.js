import React from "react";
import AshinPic from "../Assets/ashin.png";
import AlanPic from "../Assets/alan.png";
const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-300 py-5 ">
      <div className="text-6xl my-2 border-b border-black">Our Team</div>
      <div class=" flex items-center justify-center my-10">
        <div class="mx-4 flex flex-col items-center justify-center bg-white p-4 shadow-xl rounded-lg">
          <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
              src={AshinPic}
              alt=""
              class="h-full w-full object-cover"
            />
          </div>

          <h2 class="mt-4 font-bold text-xl">Ashin Laurel</h2>
          <h6 class="mt-2 text-sm font-medium">Founder</h6>

          <p class="text-xs text-gray-500 text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
            molestiae nulla.
          </p>

          <ul class="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fa fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="mx-4 flex flex-col items-center justify-center bg-white p-4 shadow-xl rounded-lg">
          <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
              src={AlanPic}
              alt=""
              class="h-full w-full object-cover"
            />
          </div>

          <h2 class="mt-4 font-bold text-xl">Alan Tom Jose</h2>
          <h6 class="mt-2 text-sm font-medium">Founder</h6>

          <p class="text-xs text-gray-500 text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
            molestiae nulla.
          </p>

          <ul class="flex flex-row mt-4 space-x-2">
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href=""
                class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
              >
                <i class="fa fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
