import React from "react";

const footer = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="font-Lato">
        <ul className="flex gap-6 text-gray-400">
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">instagram</a>
          </li>
          <li>
            <a href="#">twitter</a>
          </li>
        </ul>
        <br></br>
        <br></br>
        <div className="flex gap-2">
          <img src="..\Assets\Help Avatar.svg" alt="Help-Avatar"></img>
          <div className="">
            <p className="font-Playfair">Have any Questions?</p>
            <a href="" className="font-Lato font-medium">
              Talk to a specialist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
