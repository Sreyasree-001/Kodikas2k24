"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer";
import { baseURL } from "../baseURL";

import "./page.css";

export default function login() {
  const [uid, setUid] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);
  const [teamData, setTeamData] = useState({});

  useEffect(() => {
    console.log(teamData);
  }, [teamData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log(uid);
    try {
      const response = await axios.get(baseURL);
      const allTeamData = response.data;
      const filteredTeamData = allTeamData.data.filter(
        (team) => team.teamName === uid
      );

      if (filteredTeamData.length > 0) {
        setTeamData(filteredTeamData[0]);
        setDataLoaded(true);
      } else {
        alert("No team data found");
      }
    } catch (err) {
      console.log(err);
    }
    // let resp = await axios({
    //     url: baseURL,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     method: 'GET',
    //     data: uid
    // });
    // if (resp.status) {
    //     setUid(resp.data.teamStatus);
    // }
  };
  const handleReset = () => {
    setDataLoaded(false);
    setTeamData({});
  }

  return (
    <>
      <div
        className="w-full min-h-screen bg-[url('/bg6.jpg')] bg-cover bg-center bg-no-repeat 
    flex flex-col items-center justify-center"
      >
        <Navbar />
        {dataLoaded ? (
          <>
            <div className="flex flex-col items-center justify-center min-h-screen py-10">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                Team name: {teamData.teamName}
              </h2>
              <div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
                <div>
                  <div className="p-8 bg-gray-900 rounded">
                    <div className="mb-4 text-center">
                      <p className="text-xl font-medium tracking-wide text-white">
                        Team Member 1
                      </p>
                    </div>
                    <ul className="mb-8 space-y-2">
                      <li className="flex items-center">
                        <div className="mr-3">
                          <svg
                            className="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="font-medium text-gray-300">
                          Name: {teamData.firstMemName}
                        </p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3">
                          <svg
                            className="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="font-medium text-gray-300">
                          Email: {teamData.firstMemEmail}
                        </p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3">
                          <svg
                            className="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="font-medium text-gray-300">
                          Department: {teamData.firstMemClass}
                        </p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3">
                          <svg
                            className="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="font-medium text-gray-300">
                          Roll: {teamData.firstMemRoll}
                        </p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3">
                          <svg
                            className="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="font-medium text-gray-300">
                          Phone no.: {teamData.firstMemPh}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                  <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                  <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                </div>
                <div>
                  <div className="p-8 bg-gray-900 rounded">
                    <div className="mb-4 text-center">
                      <p className="text-xl font-medium tracking-wide text-white">
                        Team member 2
                      </p>
                    </div>
                    <ul className="mb-8 space-y-2">
                      <li className="flex items-center">
                        <div className="mr-3">
                          <svg
                            className="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="font-medium text-gray-300">
                          Name: {teamData.secMemName}
                        </p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3">
                          <svg
                            className="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="font-medium text-gray-300">
                          Email: {teamData.secMemEmail}
                        </p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3">
                          <svg
                            className="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="font-medium text-gray-300">
                          Department: {teamData.secMemClass}
                        </p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3">
                          <svg
                            className="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="font-medium text-gray-300">
                          Roll: {teamData.secMemRoll}
                        </p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-3">
                          <svg
                            className="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                        <p className="font-medium text-gray-300">
                          Phone no.: {teamData.secMemPh}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                  <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                  <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                </div>
              </div>
              <div className="mb-4">
                <button
                  id="btn"
                  className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                  onClick={handleReset}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                    Reset
                  </span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <main className="flex flex-col items-center justify-center min-h-screen py-10">
              <div className="mb-4">
                <div className="card">
                  <div className="loader">
                    <p>loading</p>
                    <div className="words">
                      <span className="word">registration</span>
                      <span className="word">done?</span>
                      <span className="word">payment</span>
                      <span className="word">done?</span>
                      <span className="word">check now</span>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <label htmlFor="uid"></label>
                <input
                  className="mb-8 text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                  aria-label="Team-Name"
                  placeholder="Team Name"
                  id="uid"
                  type="text"
                  name="uid"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                ></input>
              </form>
              <div className="mb-4">
                <button
                  id="btn"
                  className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                  onClick={handleSubmit}
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                    Submit
                  </span>
                </button>
              </div>
            </main>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
