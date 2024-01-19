import { SimpleWidget } from "@/components";
import React from "react";

const CounterPage = () => {
  return (
    <div className="w-full ">
      <h1 className="text-7xl">Main Page</h1>
      <div className="flex mt-10 items-center justify-center ">
        <SimpleWidget />
      </div>
    </div>
  );
};

export default CounterPage;
