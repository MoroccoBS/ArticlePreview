import "./App.css";
import Image from "./components/Image";
import Profile from "./components/Profile";
import share from "./assets/images/icon-share.svg";
import { useState } from "react";
import Socials from "./components/Socials";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sm:h-2/5 h-max min-h-max flex sm:flex-row flex-col items-center justify-center max-w-3xl w-5/6 bg-white">
      <Image />
      <div className="sm:w-3/5 w-full sm:h-full h-3/5 flex flex-col justify-center">
        <div
          className={`w-full h-full flex flex-col justify-center gap-6 pt-6 px-6`}
        >
          <h1 className="text-xl font-bold">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-sm text-LightGrayishBlue">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <div className="flex justify-between items-center relative p-6">
          <Profile />
          <button
            className={`flex p-2 aspect-square rounded-full bg-LightGrayishBlue z-50 transition-all ${
              isHovered ? "translate-y-1/4 scale-110" : ""
            }`}
            onClick={() => setIsHovered(!isHovered)}
          >
            <img src={share} alt="" className="fill-amber-500 m-auto svg" />
          </button>
          <AnimatePresence mode="wait">
            {isHovered && (
              <>
                <Socials />
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
