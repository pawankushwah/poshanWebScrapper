import React, { useEffect, useState } from "react";
import { protocol, hostname, port } from "./env";

export default function Main() {
  const [AWCs, setAWCs] = useState([]);
  const [activity, setActivity] = useState([]);
  const [AWCsProgress, setAWCsProgress] = useState([]);
  const [activityProgress, setActivityProgress] = useState([]);

  const [_date, set_date] = useState("");
  const [AWCStart, setAWCStart] = useState(0);
  const [AWCEnd, setAWCEnd] = useState(188);

  const handleDate = (e) => set_date(e.target.value);
  const handleAWCStart = (e) => setAWCStart(e.target.value);
  const handleAWCEnd = (e) => setAWCEnd(e.target.value);

  let date = new Date();
  let dd = String(date.getDay() - 1).padStart(2, "0");
  let mm = String(date.getMonth()).padStart(2, "0");
  let yyyy = date.getFullYear();
  let today = `${yyyy}-${mm}-${dd}`;

  useEffect(() => {
    const eventSource = new EventSource("/scrap");

    eventSource.addEventListener("activity_change", (event) => {
      const newData = JSON.parse(event.data);
      setActivityProgress((prevData) => [...prevData, newData.result]);
    });

    eventSource.addEventListener("AWC_change", (event) => {
      const newData = JSON.parse(event.data);
      setAWCsProgress((prevData) => [...prevData, newData.result]);
    });

    eventSource.addEventListener("close", (data) => {
      alert(data);
    });

    return () => {
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await collectData("AWCs");
        setAWCs(response);
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await collectData("activity");
        setActivity(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  });

  function StartHacking() {
    async function fetchData() {
      try {
        const path = "scrap";
        let response = await fetch(
          `${protocol}://${hostname}:${port}/${path}`,
          {
            method: "post",
            body: JSON.stringify({ _date, AWCStart, AWCEnd }),
            headers: { "Content-Type": "Application/json" },
          }
        );
        response = await response.json();
        setAWCs(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }

  return (
    <div className="w-screen h-screen p-4 space-x-4 flex justify-around items-center bg-gray-200">
      <div className="w-5/12 h-3/4 rounded-lg bg-white p-4 flex flex-col justify-center items-center space-y-4">
        <p className="text-blue-500">Enter the date </p>
        <div className="relative w-full">
          <input
            type="date"
            id="date"
            className="block px-8 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-2 border-gray-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            max={today}
            placeholder=" "
            value={_date}
            onChange={handleDate}
          />
          <label
            htmlFor="date"
            className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-5"
          >
            Date
          </label>
        </div>

        <p className="text-blue-500">
          (OPTIONAL) Enter below fields in the range of 0 - 188
        </p>
        <div className="relative w-full">
          <input
            type="number"
            id="AWCFrom"
            className="block px-8 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-2 border-gray-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            min={0}
            max={188}
            placeholder=" "
            value={AWCStart}
            onChange={handleAWCStart}
          />
          <label
            htmlFor="AWCFrom"
            className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-5"
          >
            AWC starts from
          </label>
        </div>
        <div className="relative w-full">
          <input
            type="number"
            id="AWCTo"
            className="block px-8 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent rounded-lg border-2 border-gray-800 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            min={0}
            max={188}
            placeholder=" "
            value={AWCEnd}
            onChange={handleAWCEnd}
          />
          <label
            htmlFor="AWCTo"
            className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-5"
          >
            AWC Ends At
          </label>
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
          onClick={StartHacking}
        >
          Start Hacking
        </button>
      </div>

      <div className="w-1/4 h-3/4 rounded-lg bg-white p-4 flex flex-col items-center space-y-2">
        <h1 className="text-2xl border-b-2 w-full text-center bg-blue-600 text-white">
          AWCs
        </h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="text-md text-left text-gray-500 dark:text-gray-400 overflow-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  s.no.
                </th>
                <th scope="col" className="px-6 py-3">
                  AWCs
                </th>
                <th scope="col" className="px-6 py-3">
                  {" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {AWCs.map((obj, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{obj.title}</td>
                  <td className="px-6 py-4">
                    {progressCodeDecode(AWCsProgress[index])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-5/12 h-3/4 rounded-lg bg-white p-4 flex flex-col items-center space-y-2 overflow-auto">
        <h1 className="text-2xl border-b-2 w-full text-center bg-blue-600 text-white">
          Activity
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-md text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">s.no.</th>
                <th className="px-6 py-3">activity</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {activity.map((obj, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{obj.title}</td>
                  <td className="px-6 py-4">
                    {progressCodeDecode(activityProgress[index])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

async function collectData(path) {
  let result = await fetch(`${protocol}://${hostname}:${port}/${path}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
  result = await result.json();
  return result;
}

function progressCodeDecode(value) {
  switch (value) {
    case 1:
      return (
        <svg
          className="w-5 h-5 text-green-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      );

    case 2:
      return "Exist";

    default:
      return (
        <svg
          className="w-5 h-5 text-red-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
  }
}
