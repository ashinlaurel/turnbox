import React from "react";
const Three = () => {
  return (
    <div>
      <div class="my-8 font-sans container w-full m-auto flex flex-col md:flex-row sm:items-center">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-start px-6 py-0 md:py-8 md:px-8 lg:items-start">
          <label
            for="tagline"
            class="uppercase tracking-wide text-gray-700 font-bold"
          >
            various aspects
          </label>
          <h1 class="mt-2 mb-4 font-medium">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </h1>
          <p class="leading-normal mb-4 text-gray-700">
            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
            euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat. Praesent dapibus, neque id cursus faucibus, tortor neque
            egestas auguae, eu vulputate magna eros eu erat. Aliquam erat
            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
            luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus.
            Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla
            quam, gravida non, commodo a, sodales sit amet, nisi.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex flex-row md:flex-col justify-between md:justify-center items-center p-2 md:p-8 items-center md:items-start">
          <div class="flex items-center sm:border-r md:border-b md:border-r-0 p-4 w-1/2 md:w-auto">
            <div
              class="w-14 h-14 rounded-full mr-4 bg-gray-300"
              alt="Avatar of Jonathan Reinink"
            ></div>
            <div class="">
              <h2 class="text-black font-medium">
                Aliquam tincidunt mauris eu risus.
              </h2>
              <p class="text-gray-700 leading-normal">
                Praesent dapibus, neque id cursus faucibus, tortor neque egestas
                auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                luctus, metus.
              </p>
            </div>
          </div>
          <div class="flex items-center p-4 w-1/2 md:w-auto">
            <div
              class="w-14 h-14 rounded-full mr-4 bg-gray-300"
              alt="Avatar of Jonathan Reinink"
            ></div>
            <div class="">
              <h2 class="text-black font-medium">
                Vestibulum auctor dapibus neque.
              </h2>
              <p class="text-gray-700 leading-normal">
                Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
                euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
                consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
