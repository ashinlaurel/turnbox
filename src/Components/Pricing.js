import React from "react";
const Pricing = () => {
  return (
    <div>
      <div class="font-sans container m-auto w-full flex flex-col flex-wrap sm:flex-row justify-center">
        <div class="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
          <label for="" class="uppercase tracking-loose font-bold text-sm">
            Basic Plan
          </label>
          <h1 for="" class="uppercase tracking-loose font-bold text-5xl my-2">
            $29<span class="text-gray-700 font-light text-xs">/mo</span>
          </h1>
          <p class="my-2 text-gray-700">
            <strong class="text-black pr-2">5</strong>Projects
          </p>
          <p class="my-2 text-gray-700">
            <strong class="text-black pr-2">20</strong>Images
          </p>
          <p class="mt-2 mb-6 text-gray-700">
            <strong class="text-black pr-2">9/5</strong>Support
          </p>
          <button class="bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
            Buy Now
          </button>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
          <label for="" class="uppercase tracking-loose font-bold text-sm">
            Team Plan
          </label>
          <h1 for="" class="uppercase tracking-loose font-bold text-5xl my-2">
            $59<span class="text-gray-700 font-light text-xs">/mo</span>
          </h1>
          <p class="my-2 text-gray-700">
            <strong class="text-black pr-2">10</strong>Projects
          </p>
          <p class="my-2 text-gray-700">
            <strong class="text-black pr-2">40</strong>Images
          </p>
          <p class="mt-2 mb-6 text-gray-700">
            <strong class="text-black pr-2">12/7</strong>Support
          </p>
          <button class="bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
            Buy Now
          </button>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
          <label for="" class="uppercase tracking-loose font-bold text-sm">
            Corporate Plan
          </label>
          <h1 for="" class="uppercase tracking-loose font-bold text-5xl my-2">
            $79<span class="text-gray-700 font-light text-xs">/mo</span>
          </h1>
          <p class="my-2 text-gray-700">
            <strong class="text-black pr-2">Unlimited</strong>Projects
          </p>
          <p class="my-2 text-gray-700">
            <strong class="text-black pr-2">Unlimited</strong>Images
          </p>
          <p class="mt-2 mb-6 text-gray-700">
            <strong class="text-black pr-2">24/7</strong>Support
          </p>
          <button class="bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
            Buy Now
          </button>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/4 text-center py-8">
          <label for="" class="uppercase tracking-loose font-bold text-sm">
            Enterprise Plan
          </label>
          <h1 for="" class="uppercase tracking-loose font-bold text-5xl my-2">
            $199<span class="text-gray-700 font-light text-xs">/mo</span>
          </h1>
          <p class="my-2 text-gray-700">
            <strong class="text-black pr-2">Unlimited</strong>Projects
          </p>
          <p class="my-2 text-gray-700">
            <strong class="text-black pr-2">Unlimited</strong>Images
          </p>
          <p class="mt-2 mb-6 text-gray-700">
            <strong class="text-black pr-2">24/7</strong>Support
          </p>
          <button class="bg-transparent hover:bg-black text-black-dark font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
