'use client'

import { useState } from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
// import { baseURL } from "../baseURL";
// import axios from "axios";

export default function register() {
    const [data, setData] = useState({})
    const [uid, setUid] = useState("")

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData(vals => ({...vals, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data)
        // let resp = await axios({
        //     url: baseURL,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     method: 'POST',
        //     data: formData
        // });
        // if (resp.status) {
        //     setUid(resp.data.UID);
        // }
    }

    return (
        <>
            <Navbar/>
            <main className="bg-slate-900 flex flex-col items-center justify-center min-h-screen py-10">
                <div className="mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
                <h2 className="text-2xl font-bold text-white mb-6">Register Here</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-300">Team Name</label>
                        <input className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white" id="username" type="text" name="teamname" onChange={handleChange}></input>
                    </div>
                    
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Team Leader Name </label>
                            <input className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white" id="name1" type="text" name="name1" onChange={handleChange}></input>
                        </div><br></br>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                            <input className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white" id="email1" type="email" name="email1" onChange={handleChange}></input>
                        </div><br></br>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone No</label>
                            <input className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white" id="phone1" type="number" name="phone1" onChange={handleChange}></input>
                        </div><br></br>
                    
                    
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Teammate Name</label>
                            <input className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white" id="name2" type="text" name="name2" onChange={handleChange}></input>
                        </div><br></br>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                            <input className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white" id="email2" type="email" name="email2" onChange={handleChange}></input>
                        </div><br></br>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone No</label>
                            <input className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white" id="phone2" type="number" name="phone2" onChange={handleChange}></input>
                        </div>
                        <br></br>
                    <div>
                        <label htmlFor="payment" className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80">
                        Payment Mode
                        </label>
                        <br></br>
                        <br></br>
                        <select className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80" name="mode" onChange={handleChange}>
                            <option value="offline">Offline</option>
                            <option value="online">Online</option>
                        </select>
                    </div>
                    <br></br>
                    <button className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" type="submit" onClick={handleSubmit}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Register
                    </span>
                    <div className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all">
                    <div className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-16 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
                    <div className="rounded-sm bg-black py-1 px-2">
                    <p className="whitespace-nowrap">Click Here!</p>
                    </div>
                    <div
                    className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
                    </div>
                    </div>
                    </button>
                </form>
                </div>
            </main>
        </>
    )
}