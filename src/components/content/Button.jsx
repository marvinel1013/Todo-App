import React from "react";

function Button(props) {
  const { handleOpenAddModal } = props;
  return (
    <div className="flex justify-between py-8">
      <button
        onClick={handleOpenAddModal}
        className="bg-blueApp-0 hover:opacity-90 duration-300 text-white p-3 px-8 rounded-lg"
      >
        Add Task
      </button>
      <select className="bg-slate-400 hover:opacity-90 duration-300 text-white p-3.5 rounded-lg cursor-pointer">
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default Button;
