import React from "react";

function body() {
  return (
    <div className="space-y-4 lg:flex ">
      <div className="flex items-center justify-center lg:flex-1 lg:order-last">
        <img
          src="..\Assets\Blue Shape.svg"
          alt="1st layer"
          className="-rotate-45 h-64 md:h-72 lg:h-130"
        ></img>
        <img
          src="..\Assets\Pink Shape.svg"
          alt="2nd layer"
          className="absolute -rotate-35 h-64 md:h-72 lg:h-130"
        ></img>
        <img
          src="..\Assets\Purple Shape.svg"
          alt="3rd  layer"
          className="absolute -rotate-15 h-64 md:h-72 lg:h-130"
        ></img>
        <img
          src="..\Assets\Hero Image (Model).png"
          alt="hero"
          className="absolute h-64 md:h-72 lg:h-130"
        ></img>
      </div>
      <div className="lg:flex-1 lg:xl">
        <h1 className="text-5xl font-bold font-Playfair leading-tight lg:text-7xl">
          Host your Website in less than 5 minutes
        </h1>
        <p1 className="font-lato text-gray-400 lg:text-2xl">
          With Hoster , get your website up and running in no less than the 5
          minutes with the most competitive pricing packahe available online
        </p1>
        <br></br>
        <br></br>
        <form action="" className="flex flex-col gap 4 md:flex-row gap-3 ">
          <input
            className="rounded-md px-4 py-3 bg-white border-2 border-s-amber-600 placeholder: text-gray-400 border-r-2 px-"
            type="email"
            placeholder="Enter your email address"
          />
          <br></br>
          <button className="rounded-md px-4 py-1 text-amber-300 bg-blue-400 hover:bg-amber-500 hover:text-white">
            Join Waitlist
          </button>
          <br></br>
        </form>
        <br></br>
        <div className="flex gap-4 lg:h-10">
          <img src="../Assets/Checkmark.svg" alt="checkmark"></img>
          <p className="lg:text w-3xl">No spam, ever . Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
}

export default body;
