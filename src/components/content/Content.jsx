import React, { useState } from "react";
import Button from "./Button";
import AddModal from "../modal/AddModal";
import UpdateModal from "../modal/UpdateModal";
import { todoValue } from "../../redux/todoSlice";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Content() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(null);
  const [taskFilter, setTaskFilter] = useState("all");
  const todos = useSelector(todoValue);
  const todoList = [...todos];
  todoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="px-8 lg:px-[25%] md:px-[10%]"
    >
      <h1 className="text-blueApp-0 text-center mt-5 font-bold text-2xl md:text-3xl">
        TODO LIST
      </h1>
      <div>
        <Button
          setIsAddModalOpen={setIsAddModalOpen}
          setTaskFilter={setTaskFilter}
          taskFilter={taskFilter}
        />
      </div>
      <motion.div variants={child}>
        <TodoList
          todoList={todoList}
          taskFilter={taskFilter}
          setIsUpdateModalOpen={setIsUpdateModalOpen}
        />
      </motion.div>
      <div>
        {isAddModalOpen && (
          <AddModal
            setIsAddModalOpen={setIsAddModalOpen}
            setTaskFilter={setTaskFilter}
          />
        )}
        {todos.map((todo) =>
          isUpdateModalOpen === todo.id ? (
            <UpdateModal
              key={todo.id}
              setIsUpdateModalOpen={setIsUpdateModalOpen}
              todos={todo}
            />
          ) : null
        )}
      </div>
    </motion.div>
  );
}

export default Content;
