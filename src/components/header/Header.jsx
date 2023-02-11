import React from "react";
import { format } from "date-fns";
import { GiMoon } from "react-icons/gi";
import { HiSun } from "react-icons/hi";
import { motion } from "framer-motion";

function Header(props) {
  const { darkMode, setDarkMode } = props;
  return (
    <div className="h-20 bg-white dark:bg-slate-800 px-8 w-full border-b dark:border-none flex items-center justify-between lg:px-[20%] md:px-[10%]">
      <div>
        <h2 className=" text-blueApp-0 text-xl md:text-3xl font-bold">
          {format(new Date(), "eeee")}
        </h2>
        <h3 className="text-[10px] md:text-sm dark:text-slate-400">
          {format(new Date(), "MMMM d, yyyy")}
        </h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 1 }}
      >
        {darkMode ? (
          <span onClick={() => setDarkMode(false)} className="cursor-pointer">
            <HiSun size={25} color={"gold"} />
          </span>
        ) : (
          <span onClick={() => setDarkMode(true)} className=" cursor-pointer">
            <GiMoon size={20} />
          </span>
        )}
      </motion.div>
    </div>
  );
}

export default Header;
