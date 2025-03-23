import React, { useState } from "react";

const App = () => {
  const gridSize = 3; 
  const totalBoxes = gridSize * gridSize;

  const [boxColors, setBoxColors] = useState(Array(totalBoxes).fill("default"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleBoxClick = (index) => {
    if (clickOrder.includes(index)) return;

    const newClickOrder = [...clickOrder, index];
    setClickOrder(newClickOrder);

    const updatedColors = [...boxColors];
    updatedColors[index] = "green";
    setBoxColors(updatedColors);

    if (newClickOrder.length === totalBoxes) {
      changeToOrange(newClickOrder);
    }
  };

  const changeToOrange = (order) => {
    order.forEach((index, i) => {
      setTimeout(() => {
        setBoxColors((prevColors) => {
          const updatedColors = [...prevColors];
          updatedColors[index] = "orange";
          return updatedColors;
        });
      }, i * 500);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">3x3 Matrix Color Game</h1>
      <div className="grid grid-cols-3 gap-4">
        {boxColors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleBoxClick(index)}
            className={`w-24 h-24 flex items-center justify-center border-2 border-gray-700 text-xl font-semibold cursor-pointer transition-colors duration-300 ${
              color === "default"
                ? "bg-gray-300"
                : color === "green"
                ? "bg-green-500 text-white"
                : "bg-orange-500 text-white"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
