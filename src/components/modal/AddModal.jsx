import React from "react";
import { MdClose } from "react-icons/md";

function AddModal(props) {
  const { handleOpenAddModal } = props;
  return (
    <div className="fixed z-10 bg-black bg-opacity-40 top-0 left-0 bottom-0 w-full flex items-center justify-center px-3">
      <div className="bg-white h-[350px] w-[350px] rounded-lg p-5 px-7 relative">
        <div
          onClick={handleOpenAddModal}
          className="absolute cursor-pointer duration-300 hover:bg-red-500 right-0 top-[-45px] text-white bg-red-600 p-1.5 rounded-md"
        >
          <MdClose size={25} />
        </div>
        <h1 className="text-xl text-center text-slate-600 font-semibold mb-3 underline">
          Add Todo
        </h1>
        <form>
          <label
            htmlFor="title"
            className=" block font-semibold text-slate-600"
          >
            Title
          </label>
          <input
            autoFocus
            id="title"
            type="text"
            className="bg-white border-2 hover:border-blue-300 border-gray-300 rounded-lg outline-blue-300 block w-full p-3 mb-5"
          />
          <label
            htmlFor="status"
            className=" block font-semibold text-slate-600"
          >
            Status
          </label>
          <select
            name="status"
            id="status"
            className="p-3 w-48 bg-slate-300 duration-300 hover:bg-slate-200 rounded-md cursor-pointer mb-5"
          >
            <option value="incomplete">Incomplete</option>
            <option value="completed">Completed</option>
          </select>
          <div className="mt-5 flex gap-3">
            <button className="bg-blueApp-0 p-3 px-4 rounded-lg text-white hover:opacity-90 duration-300">
              Add Task
            </button>
            <button
              onClick={handleOpenAddModal}
              className="bg-redApp-0 p-3 px-4 rounded-lg text-white hover:opacity-90 duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
