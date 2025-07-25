import { useState } from "react";
import "./App.css";

const imagess = [
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1016/800/400",
  "https://picsum.photos/id/1018/800/400",
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeImg = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === imagess.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imagess.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row w-fit items-center">
        <button
          className="w-16 h-10 bg-blue-500 text-white rounded-sm mx-4"
          onClick={() => handleChangeImg("prev")}
        >
          Prev
        </button>

        <img
          src={imagess[currentIndex]}
          alt={`Image ${currentIndex}`}
          className="w-[800px] h-[400px] object-cover rounded"
        />

        <button
          className="w-16 h-10 bg-blue-500 text-white rounded-sm mx-4"
          onClick={() => handleChangeImg("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
