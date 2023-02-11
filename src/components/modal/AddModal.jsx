import { nanoid } from "@reduxjs/toolkit";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, todoValue } from "../../redux/todoSlice";

const dropIn = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: "scale(0.9)",
    opacity: 0,
  },
};

function AddModal(props) {
  const { setIsAddModalOpen, setTaskFilter } = props;
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const dispatch = useDispatch();
  const todos = useSelector(todoValue);

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (title.trim().length > 0) {
      dispatch(
        addTodo([
          ...todos,
          {
            id: nanoid(),
            title: title,
            status: status,
            time: new Date().toLocaleString(),
          },
        ])
      );
      setIsAddModalOpen(false);
      setTaskFilter("all");
      toast.success("Task Added Successfully!🙂", {
        className: "bg-green-100",
        duration: 3000,
      });
    } else {
      toast.error("Task Must Have a Title!🙄", {
        className: "bg-red-100",
        duration: 3000,
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0 }}
        className="fixed z-10 bg-black bg-opacity-40 top-0 left-0 bottom-0 w-full flex items-center justify-center px-3"
      >
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white dark:bg-slate-800 md:h-[350px] md:w-[350px] w-[300px] h-[300px] rounded-lg p-5 px-7 relative"
        >
          <motion.div
            initial={{ opacity: 0, top: 10 }}
            animate={{ opacity: 1, top: -45 }}
            exit={{ top: 45, opacity: 0 }}
            onClick={() => setIsAddModalOpen(false)}
            className="absolute cursor-pointer duration-300 hover:bg-red-500 right-0 top-[-45px] text-white bg-red-600 p-1.5 rounded-md"
          >
            <MdClose size={25} />
          </motion.div>
          <h1 className="md:text-xl text-lg text-center text-slate-600 dark:text-slate-400 font-semibold mb-3 underline">
            Add Todo
          </h1>
          <form>
            <label
              htmlFor="title"
              className=" block font-semibold text-slate-600 md:text-lg text-sm dark:text-slate-400"
            >
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              type="text"
              className="bg-white border-2 hover:border-blue-300 border-gray-300 rounded-lg outline-blue-300 block w-full md:p-3 p-1.5 mb-5"
            />
            <label
              htmlFor="status"
              className=" block font-semibold text-slate-600 md:text-lg text-sm dark:text-slate-400"
            >
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              name="status"
              id="status"
              className="md:p-3 p-2 w-48 bg-slate-300 duration-300 hover:bg-slate-200 rounded-md cursor-pointer mb-5"
            >
              <option value="incomplete">Incomplete</option>
              <option value="completed">Completed</option>
            </select>
            <div className="mt-5 flex gap-3">
              <button
                onClick={handleAddTodo}
                type="submit"
                className="bg-blueApp-0 md:p-3 md:px-4 px-2 p-2 rounded-lg text-white hover:opacity-90 duration-300"
              >
                Add Task
              </button>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="bg-redApp-0 md:p-3 md:px-4 px-2 p-2 rounded-lg text-white hover:opacity-90 duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AddModal;
