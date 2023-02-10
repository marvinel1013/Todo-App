import React from "react";
import { MdDelete } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { BsCheck2Square, BsSquare } from "react-icons/bs";

function TodoCard() {
  return (
    <div className="flex items-center justify-between bg-whiteApp-0 p-4 border-2 rounded-lg">
      <div className="flex items-center gap-5">
        <span className="cursor-pointer">
          <BsSquare size={20} color={"gray"} />
        </span>
        <div>
          <h4 className="text-lg mb-0">Learn React</h4>
          <small className="font-thin">{new Date().toLocaleString()}</small>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-blueApp-0 p-1 rounded-md hover:opacity-90 cursor-pointer text-slate-200">
          <MdDelete size={20} />
        </span>
        <span className="bg-blueApp-0 p-1 rounded-md hover:opacity-90 cursor-pointer text-slate-200">
          <GoPencil size={20} />
        </span>
      </div>
    </div>
  );
}

export default TodoCard;
