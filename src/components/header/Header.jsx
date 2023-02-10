import React from "react";
import { format } from "date-fns";

function Header() {
  return (
    <div className="h-20 bg-white px-8 w-full border-b flex items-center justify-between">
      <div>
        <h2 className=" text-blueApp-0 text-3xl font-bold">
          {format(new Date(), "eeee")}
        </h2>
        <h3 className=" text-sm">{format(new Date(), "MMMM d, yyyy")}</h3>
      </div>
      <div>oo</div>
    </div>
  );
}

export default Header;
