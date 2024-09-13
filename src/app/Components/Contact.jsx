'use client'

import { useState } from "react"
// import axios from "axios"
// import { baseURL } from "../baseURL"

export default function Contact() {
    const [data, setData] = useState({})

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData(vals => ({...vals, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        // let resp = await axios({
        //     url: baseURL,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     method: 'POST',
        //     data: data
        // });
    }

    return (
        <form className="text-white w-80 max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0" role="form text-left">
            <p class="mb-4 bg-purple-950 text-purple-500 border border-purple-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span class="bg-puple-400 shadow-purple-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
             Contact Us
            </p>
            
            <div className="relative z-0 flex flex-col min-w-0 break-words bg-black border-0 shadow-soft-xl rounded-2xl bg-clip-border">
            <div id="contact" className="mb-4">
                <label htmlFor="username"></label>
                <input className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" aria-label="Name" placeholder="Name" id="username" type="text" name="name" onChange={handleChange}></input>
            </div>
            <div className="mb-4">
                <label htmlFor="email"></label>
                <input className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" aria-label="Email" placeholder="Email" id="email" type="email" name="email" onChange={handleChange}></input>
            </div>
            <div className="mb-4">
                <label htmlFor="phone"></label>
                <input className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" aria-label="Phone" placeholder="Phone" id="phone" type="number" name="phone" onChange={handleChange}></input>
            </div>
            <div className="mb-4">
                <label htmlFor="textarea"></label>
                <textarea className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" aria-label="Message" placeholder="Enter your message" name="message" onChange={handleChange}></textarea>
            </div>
            <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none" onClick={handleSubmit} type="submit">
            <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]">
            </span>
            <span
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
             Send
             <svg
                 stroke="currentColor"
                 fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path
             d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
             ></path>
            </svg>
            </span>
            </button>
            </div>
        </form>
    );
};