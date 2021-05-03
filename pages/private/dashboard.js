import React from "react";
import Admin from "../../layouts/Admin";

// components

// layout for page



export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          123
        </div>
        <div className="w-full xl:w-4/12 px-4">
          456
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          7         89
        </div>
        <div className="w-full xl:w-4/12 px-4">
 xxxx
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
