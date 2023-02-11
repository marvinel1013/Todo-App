import React from "react";
import TodoCard from "./TodoCard";
import { AnimatePresence, motion } from "framer-motion";

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

function TodoList(props) {
  const { todoList, taskFilter, setIsUpdateModalOpen } = props;
  return (
    <AnimatePresence>
      <motion.div variants={container} initial="hidden" animate="visible">
        {todoList.length ? (
          <div className="min-h-full p-3 bg-slate-100 dark:bg-slate-800 rounded-md ">
            {taskFilter === "all" ? (
              <div>
                {taskFilter === "all" &&
                  todoList.map((todo) => (
                    <motion.div variants={child} key={todo.id}>
                      <TodoCard
                        todos={todo}
                        setIsUpdateModalOpen={setIsUpdateModalOpen}
                      />
                    </motion.div>
                  ))}
              </div>
            ) : taskFilter === "incomplete" ? (
              <div>
                {" "}
                {todoList.filter((todo) => todo.status === "incomplete")
                  .length ? (
                  taskFilter === "incomplete" &&
                  todoList
                    .filter((todo) => todo.status === "incomplete")
                    .map((todo) => (
                      <motion.div variants={child} key={todo.id}>
                        <TodoCard
                          todos={todo}
                          setIsUpdateModalOpen={setIsUpdateModalOpen}
                        />
                      </motion.div>
                    ))
                ) : (
                  <div className="min-h-full flex justify-center items-center  text-center md:p-5 bg-slate-100 dark:bg-slate-800 rounded-md">
                    <motion.span
                      variants={child}
                      className=" bg-whiteApp-0 p-3 rounded-lg text-sm md:tex-[16px]  "
                    >
                      No Incomplete Tasks! Nice Job 😊
                    </motion.span>
                  </div>
                )}
              </div>
            ) : taskFilter === "completed" ? (
              <div>
                {todoList.filter((todo) => todo.status === "completed")
                  .length ? (
                  taskFilter === "completed" &&
                  todoList
                    .filter((todo) => todo.status === "completed")
                    .map((todo) => (
                      <motion.div variants={child} key={todo.id}>
                        <TodoCard
                          todos={todo}
                          setIsUpdateModalOpen={setIsUpdateModalOpen}
                        />
                      </motion.div>
                    ))
                ) : (
                  <div className="min-h-full flex justify-center items-center text-center md:p-5 p-2 bg-slate-100 dark:bg-slate-800  rounded-md">
                    <motion.span
                      variants={child}
                      className=" bg-whiteApp-0 p-3 rounded-lg text-sm md:tex-[16px] "
                    >
                      <p>No Completed Tasks yet!</p>
                      <p>You can Do IT! 😊</p>
                    </motion.span>
                  </div>
                )}
              </div>
            ) : (
              <div>no todo</div>
            )}
          </div>
        ) : (
          <div className="min-h-full text-center p-5 bg-slate-100 dark:bg-slate-800  rounded-md">
            <span className=" bg-whiteApp-0 p-3 rounded-lg ">
              Add Your Tasks for Today 📋
            </span>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default TodoList;
