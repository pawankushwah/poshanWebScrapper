import React from "react";

export default function Main() {
  let date = new Date();
  let dd = String(date.getDay() - 1).padStart(2, "0");
  let mm = String(date.getMonth()).padStart(2, "0");
  let yyyy = date.getFullYear();
  let today = `${yyyy}-${mm}-${dd}`;

  return (
    <div className="w-screen h-screen p-4 space-x-4 flex justify-around items-center bg-gray-200">
      <div className="w-5/12 h-3/4 rounded-lg bg-white p-4 flex flex-col justify-center items-center space-y-2">
        <div class="relative w-full">
          <input
            type="date"
            id="date"
            class="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-2 border-gray-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            max={today}
            placeholder=" "
          />
          <label
            for="date"
            class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Date
          </label>
        </div>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Start Hacking
        </button>
      </div>

      <div className="w-5/12 h-3/4 rounded-lg bg-white p-4 flex flex-col items-center space-y-2">
        <h1 className="text-2xl border-b-2 w-full text-center bg-blue-600 text-white">
          AWCs
        </h1>
        <div></div>
      </div>
      <div className="w-5/12 h-3/4 rounded-lg bg-white p-4 flex flex-col items-center space-y-2">
        <h1 className="text-2xl border-b-2 w-full text-center bg-blue-600 text-white">
          Activity
        </h1>
        <div></div>
      </div>
    </div>
  );
}
