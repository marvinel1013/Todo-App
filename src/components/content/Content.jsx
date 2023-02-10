import React, { useState } from "react";
import Button from "./Button";
import TodoCard from "./TodoCard";
import AddModal from "../modal/AddModal";
import UpdateModal from "../modal/UpdateModal";

function Content() {
  /* Modal STATE */
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenAddModal = (event) => {
    event.preventDefault();
    setIsAddModalOpen((prevModal) => !prevModal);
  };

  return (
    <div className="px-8">
      <h1 className="text-blueApp-0 text-center mt-5 font-bold text-3xl">
        TODO LIST
      </h1>
      <div>
        <Button handleOpenAddModal={handleOpenAddModal} />
      </div>
      <div className="min-h-full p-3 bg-slate-100 rounded-md">
        <TodoCard />
      </div>
      <div>
        {isAddModalOpen && <AddModal handleOpenAddModal={handleOpenAddModal} />}
        {/* <UpdateModal /> */}
      </div>
    </div>
  );
}

export default Content;
