import Facebook from "../assets/images/icon-facebook.svg";
import Pinstrest from "../assets/images/icon-pinterest.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import { motion } from "framer-motion";

export default function Socials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="clip sm:translate-x-[31%] sm:-translate-y-3/4 right-0 bottom-0 flex sm:w-max w-full gap-4 px-8 py-3 h-4/5 sm:h-max
	 rounded-md absolute sm:top-0 sm:right-0 text-white/50 bg-LightGrayishBlue items-center sm:justify-center justify-start"
    >
      <h1 className="uppercase tracking-widest text-sm ml-4">Share</h1>
      <a href={"#"} className="w-5 h-5 rounded-full">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href={"#"} className="w-5 h-5 rounded-full">
        <img
          src={Twitter}
          className="w-full h-full object-cover"
          alt="Twitter"
        />
      </a>
      <a href={"#"} className="w-5 h-5 rounded-full">
        <img src={Pinstrest} className="" alt="Pinstrest" />
      </a>
      <div className="sm:block hidden triangle absolute bottom-0 left-1/2 -translate-x-1/3 translate-y-[95%]"></div>
    </motion.div>
  );
}
