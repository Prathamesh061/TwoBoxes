import React, { useState } from "react";
import "./../App.css";
import { Link } from "react-router-dom";

const TwoBoxesType2 = () => {
  const [leftBoxItems, setLeftBoxItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);
  const [rightBoxItems, setRightBoxItems] = useState(["Item 7", "Item 8"]);
  const [selectedLeftItems, setSelectedLeftItems] = useState([]);
  const [selectedRightItems, setSelectedRightItems] = useState([]);

  const moveToLeft = () => {
    setLeftBoxItems([...leftBoxItems, ...selectedRightItems]);
    setRightBoxItems(
      rightBoxItems.filter((item) => !selectedRightItems.includes(item))
    );
    setSelectedRightItems([]);
  };

  const moveToRight = () => {
    setRightBoxItems([...rightBoxItems, ...selectedLeftItems]);
    setLeftBoxItems(
      leftBoxItems.filter((item) => !selectedLeftItems.includes(item))
    );
    setSelectedLeftItems([]);
  };

  const toggleLeftSelection = (item) => {
    if (selectedLeftItems.includes(item)) {
      setSelectedLeftItems(
        selectedLeftItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedLeftItems([...selectedLeftItems, item]);
    }
  };

  const toggleRightSelection = (item) => {
    if (selectedRightItems.includes(item)) {
      setSelectedRightItems(
        selectedRightItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedRightItems([...selectedRightItems, item]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Link
        to={"/"}
        className="m-4 mb-8 font-bold font-serif border-2 border-gray-500 rounded-lg hover:shadow-lg px-4 py-2 hover:scale-105 transition-all"
      >
        Normal Version {"->"}
      </Link>

      <div className="flex items-center space-x-4">
        <div
          className="border p-4 rounded-md"
          style={{ width: "300px", maxHeight: "250px" }}
        >
          <div className="text-xl font-semibold">Left Box</div>
          <div className="overflow-y-auto h-40">
            <ul className="mt-4 space-y-2">
              {leftBoxItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div
                    className={`${
                      selectedLeftItems.includes(item)
                        ? "bg-blue-200"
                        : "hover:bg-blue-100"
                    } p-2 rounded-md cursor-pointer`}
                    onClick={() => toggleLeftSelection(item)}
                  >
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={moveToLeft}
            disabled={selectedRightItems.length === 0}
            className="bg-red-500 text-white rounded-full p-2 mt-2"
          >
            {"<"}
          </button>
          <button
            onClick={moveToRight}
            disabled={selectedLeftItems.length === 0}
            className="bg-green-500 text-white rounded-full p-2 mt-2"
          >
            {">"}
          </button>
        </div>

        <div
          className="border p-4 rounded-md"
          style={{ width: "300px", maxHeight: "250px" }}
        >
          <div className="text-xl font-semibold">Right Box</div>
          <div className="overflow-y-auto h-40">
            <ul className="mt-4 space-y-2">
              {rightBoxItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div
                    className={`${
                      selectedRightItems.includes(item)
                        ? "bg-blue-200"
                        : "hover:bg-blue-100"
                    } p-2 rounded-md cursor-pointer`}
                    onClick={() => toggleRightSelection(item)}
                  >
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoBoxesType2;
