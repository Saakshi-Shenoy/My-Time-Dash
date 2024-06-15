import React from "react";
import Analysis from "./analysis"; 

function Dashboard() {
  return (
    <div className="dashboard bg-white w-full h-95vh ml-2 p-4 rounded-lg">
      <div className="dash-content text-center">
        <h1
          className="text-2xl font-bold mb-4"
          style={{ fontSize: "30px", paddingBottom: "1%" }}
        >
          Dashboard
        </h1>
        <div className="flex justify-center items-center gap-4 text-2xl">
          <button
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            type="button"
          >
            Daily
          </button>
          <button
            class="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            type="button"
          >
            Monthly
          </button>
          <button
            class="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            type="button"
          >
            Quaterly
          </button>
          <button
            class="text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            type="button"
          >
            Yearly
          </button>
        </div>
        <Analysis />
      </div>
    </div>
  );
}

export default Dashboard;
