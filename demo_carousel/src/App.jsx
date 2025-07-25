import { useState, useSyncExternalStore } from "react";
import "./App.css";

const imagess = [
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1016/800/400",
  "https://picsum.photos/id/1018/800/400",
];
function App() {
  const [swapImg, setSwapImg] = useState("");

  const handleChangeImg = (index, name) => {
    //change img
  };
  return (
    <div className="flex justify-center items-center">
      {imagess?.length > 0
        ? imagess?.map((items, index) => (
            <div key={index} className={`flex flex-row w-fit items-center `}>
              {/* {index > 0 ? (
                ""
              ) : (
                <> */}
              <button
                className={`w-16 h-10 bg-blue-500 rounded-sm mx-4 ${
                  index > 0 ? "hidden" : ""
                }`}
                onClick={() => handleChangeImg(index, "prev")}
              >
                Prev
              </button>
              <img
                src={items}
                alt={items}
                className={`w-full ${index > 0 ? "hidden" : ""}`}
              />
              <button
                className={`w-16 h-10 bg-blue-500 rounded-sm mx-4 ${
                  index > 0 ? "hidden" : ""
                }`}
                onClick={() => handleChangeImg(index, "next")}
              >
                Next
              </button>
              {/* </>
              )} */}
            </div>
          ))
        : "No data"}
    </div>
  );
}

export default App;
