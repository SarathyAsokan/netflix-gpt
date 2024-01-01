import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-1/3 mt-52 pl-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-extrabold text-3xl">{title}</h1>
      <p className="">{overview}</p>
      <div className="m-3">
        <button className="bg-white rounded-lg w-24 h-10 text-black mx-2 hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-600 rounded-lg w-24 h-10 text-white mx-2 hover:bg-opacity-80">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};
