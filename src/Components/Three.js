import React from "react";
const Three = () => {
  return (
    <div>
      <div class="mb-4 mt-10 md:mt-0 md:-mt-16 font-sans container w-full m-auto flex flex-col md:flex-row sm:items-center">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-start px-6 py-0 md:py-8 md:px-8 lg:items-start">
          <label
            for="tagline"
            class="uppercase tracking-tight text-black text-6xl leading-none font-bold"
          >
            Your Business Your Rules
          </label>
          <h1 class="mt-2 mb-4 font-medium">
            The need for custom made websites
          </h1>
          <p class="leading-normal mb-4 text-gray-700">
            In an era where online directories are replacing the yellow pages,
            it is essential for your business to have an online presence.
            Cosumer behaviour is rapidly changing to adapt to the evolving
            technologies and it is time for you to take your business online as
            well. Custom made websites adds credibility to your brand as well as
            helps in increasing your social media reach.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex flex-row md:flex-col justify-between md:justify-center items-start p-2 md:p-8  md:items-start">
          <div class="flex items-center sm:border-r md:border-b md:border-r-0 p-4 w-1/2 md:w-auto">
            <div class="w-14 h-14 rounded-full mr-4 bg-gray-300" alt=""></div>
            <div class="">
              <h2 class="text-black font-bold text-2xl tracking-tight ">
                As unique as your business
              </h2>
              <p class="text-gray-700 leading-normal">
                Development and deployment of a unique website that is packed
                with the features you require for your business
              </p>
            </div>
          </div>
          <div class="flex items-center p-4 w-1/2 md:w-auto">
            <div class="w-14 h-14 rounded-full mr-4 bg-gray-300" alt=""></div>
            <div class="">
              <h2 class="text-black font-bold text-2xl tracking-tight ">
                Hassle free experience
              </h2>
              <p id="team"  class="text-gray-700 leading-normal">
                We will take care of all the work of planning, designing and
                deployment with atmost care while you can concentrate on your
                business. Our team delivers superior support for all your
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
