import React from "react";
import { MdDelete } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { BsCheck2Square, BsSquare } from "react-icons/bs";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../redux/todoSlice";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

function TodoCard(props) {
  const { todos, setIsUpdateModalOpen } = props;

  const dispatch = useDispatch();

  const handleCompletedTodo = (todos, stats) => {
    dispatch(completeTodo({ id: todos.id, status: stats }));
    if (stats === "completed") {
      toast.success("Task Completed!🎉", { className: "bg-green-100" });
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id: id }));
    toast.success("Task Deleted Successfully!🙂", {
      className: "bg-red-100",
      duration: 3000,
    });
  };

  return (
    <div
      className={`flex items-center justify-between mb-3 ${
        todos.status === "completed"
          ? "bg-[#c7b89d] border-green-300"
          : "bg-whiteApp-0"
      } p-4 border-2 rounded-lg overflow-x-auto`}
    >
      <div className="flex items-center gap-5">
        <span className="cursor-pointer">
          {todos.status === "completed" ? (
            <span onClick={() => handleCompletedTodo(todos, "incomplete")}>
              <BsCheck2Square size={20} color={"green"} />
            </span>
          ) : (
            <span onClick={() => handleCompletedTodo(todos, "completed")}>
              <BsSquare size={20} color={"gray"} />
            </span>
          )}
        </span>
        <div>
          <h4
            className={`md:text-lg text-sm mb-0 capitalize pr-5 ${
              todos.status === "completed"
                ? "line-through text-gray-700 decoration-red-500"
                : ""
            }`}
          >
            {todos.title}
          </h4>
          <small className="font-light text-[9px] md:text-[12px]">
            {format(new Date(todos.time), "p,  M/d/yyyy")}
          </small>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span
          title="Delete"
          onClick={() => handleDeleteTodo(todos.id)}
          className="bg-blueApp-0 text-sm md:text-lg p-1 rounded-md hover:opacity-90 cursor-pointer text-slate-200"
        >
          <MdDelete />
        </span>
        <span
          onClick={() => setIsUpdateModalOpen(todos.id)}
          className="bg-blueApp-0 p-1 text-sm md:text-lg rounded-md hover:opacity-90 cursor-pointer text-slate-200"
        >
          <GoPencil />
        </span>
      </div>
    </div>
  );
}

export default TodoCard;
