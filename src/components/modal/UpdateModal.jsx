import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/todoSlice";

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

function UpdateModal(props) {
  const { setIsUpdateModalOpen, todos } = props;
  const [updateTitle, setUpdateTitle] = useState(todos.title);
  const [updateStatus, setUpdateStatus] = useState(todos.status);

  const dispatch = useDispatch();

  const handleUpdateTodo = (event, todo) => {
    event.preventDefault();
    if (todos.title !== updateTitle || todos.status !== updateStatus) {
      dispatch(
        updateTodo({ id: todo.id, title: updateTitle, status: updateStatus })
      );
      setIsUpdateModalOpen(null);
      toast.success("Task Updated Successfully!👍", {
        className: "bg-green-100",
      });
    } else {
      toast.error("No Changes Made!🙄", {
        className: "bg-red-100",
      });
      setIsUpdateModalOpen(null);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
        className="fixed z-10 bg-black bg-opacity-40 top-0 left-0 bottom-0 right-0 w-full flex items-center justify-center px-3"
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
            onClick={() => setIsUpdateModalOpen(null)}
            className="absolute cursor-pointer duration-300 hover:bg-red-500 right-0 top-[-45px] text-white bg-red-600 p-1.5 rounded-md"
          >
            <MdClose size={25} />
          </motion.div>
          <h1 className="md:text-xl text-lg text-center text-slate-600 dark:text-slate-400  font-semibold mb-3 underline">
            Update Todo
          </h1>
          <form>
            <label
              htmlFor="title"
              className=" block font-semibold text-slate-600 md:text-lg text-sm dark:text-slate-400"
            >
              Title
            </label>
            <input
              value={updateTitle}
              onChange={(e) => setUpdateTitle(e.target.value)}
              id="title"
              type="text"
              className=" capitalize bg-white border-2 hover:border-blue-300 border-gray-300 rounded-lg outline-blue-300 block w-full md:p-3 p-1.5 mb-5"
            />
            <label
              htmlFor="status"
              className="block font-semibold text-slate-600 md:text-lg text-sm dark:text-slate-400"
            >
              Status
            </label>
            <select
              value={updateStatus}
              onChange={(e) => setUpdateStatus(e.target.value)}
              name="status"
              id="status"
              className="md:p-3 p-2 w-48 bg-slate-300 duration-300 hover:bg-slate-200 rounded-md cursor-pointer mb-5"
            >
              <option value="incomplete">Incomplete</option>
              <option value="completed">Completed</option>
            </select>
            <div className="mt-5 flex gap-3">
              <button
                onClick={(e) => handleUpdateTodo(e, todos)}
                type="submit"
                className="bg-blueApp-0 md:p-3 md:px-4 px-2 p-2 rounded-lg text-white hover:opacity-90 duration-300"
              >
                Update Task
              </button>
              <button
                onClick={() => setIsUpdateModalOpen(null)}
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

export default UpdateModal;
