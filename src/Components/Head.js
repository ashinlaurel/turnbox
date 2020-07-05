import React from "react";
const Head = () => {
  return (
    <div>
      <div
        class="font-sans h-screen w-full bg-cover text-center flex flex-col items-center justify-center bg-center bg-no-repeat"
        style={{
          background: `url(https://source.unsplash.com/random/1920x1080)`,
        }}
      >
        <div class="bg-white text-black rounded-full h-16 w-16 flex items-center justify-center mb-8">
          <i class="fa fa-rocket  text-2xl"></i>
        </div>

        <h3 class="text-white mx-auto max-w-sm mt-2 font-normal text-2xl leading-normal">
          Welcome To TurnBox!
        </h3>
      </div>
    </div>
  );
};

export default Head;
