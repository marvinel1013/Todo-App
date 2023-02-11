import React from "react";

function Button(props) {
  const { setIsAddModalOpen, setTaskFilter, taskFilter } = props;
  return (
    <div className="flex justify-between py-8">
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="bg-blueApp-0 hover:opacity-90 duration-300 text-white md:p-3 md:text-[16px] text-sm px-6 md:px-8 rounded-lg"
      >
        Add Task
      </button>
      <select
        value={taskFilter}
        onChange={(e) => setTaskFilter(e.target.value)}
        className="bg-slate-400 hover:opacity-90 duration-300 text-white md:p-3.5 md:text-[16px] text-sm px-2 p-3 rounded-lg cursor-pointer outline-none"
      >
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default Button;
