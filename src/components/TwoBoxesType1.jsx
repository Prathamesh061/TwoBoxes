import React, { useState } from "react";
import "./../App.css";
import { Link } from "react-router-dom";

const App = () => {
  const [leftBoxItems, setLeftBoxItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);
  const [rightBoxItems, setRightBoxItems] = useState(["Item 7", "Item 8"]);

  const moveToLeft = (item) => {
    setLeftBoxItems([...leftBoxItems, item]);
    setRightBoxItems(rightBoxItems.filter((rightItem) => rightItem !== item));
  };

  const moveToRight = (item) => {
    setRightBoxItems([...rightBoxItems, item]);
    setLeftBoxItems(leftBoxItems.filter((leftItem) => leftItem !== item));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Link
        to={"/type2"}
        className="m-4 mb-8 font-bold font-serif border-2 border-gray-500 rounded-lg hover:shadow-lg px-4 py-2 hover:scale-105 transition-all"
      >
        Advanced Version {"->"}
      </Link>

      <div className="flex items-center space-x-4">
        <div
          className="border p-4 rounded-md"
          style={{ width: "300px", maxHeight: "250px" }}
        >
          <div className="text-xl font-semibold">Left Box</div>
          <div className="overflow-y-auto h-40 px-2">
            <ul className="mt-4 space-y-2">
              {leftBoxItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  {item}
                  <button
                    onClick={() => moveToRight(item)}
                    className="bg-green-500 text-white rounded-full p-2"
                  >
                    {">"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border p-4 rounded-md"
          style={{ width: "300px", maxHeight: "250px" }}
        >
          <div className="text-xl font-semibold">Right Box</div>
          <div className="overflow-y-auto h-40 px-2">
            <ul className="mt-4 space-y-2">
              {rightBoxItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <button
                    onClick={() => moveToLeft(item)}
                    className="bg-red-500 text-white rounded-full p-2"
                  >
                    {"<"}
                  </button>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
