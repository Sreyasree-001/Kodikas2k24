'use client'

import { useState } from "react";
// import axios from "axios"
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer";
// import { baseURL } from "../baseURL";

export default function login() {
    const [uid, setUid] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(uid);
        // let resp = await axios({
        //     url: baseURL,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     method: 'POST',
        //     data: uid
        // });
        // if (resp.status) {
        //     setUid(resp.data.teamStatus);
        // }
    }

    return (
        <>
        
            <Navbar/>
            <main className="bg-slate-950 flex flex-col items-center justify-center min-h-screen py-10">
            <div className="mb-4">
            <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none" onClick={handleSubmit} type="submit">
            <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]">
            </span>
            <span
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
             Check Here
            </span>
            </button>
            </div>
            <form>
                    
                    <label htmlFor="uid"></label>
                    <input className="mb-4 text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" aria-label="Team-Name" placeholder="Team Name" id="uid" type="text" name="uid" onChange={e => setUid(e.target.value)}></input>
            </form>
                    <div classNmae="mb-4">
                    <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none" onClick={handleSubmit}>
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                    Submit
                    </span>
                    </button>
                    </div>
                
            </main>
            <Footer/>
        
        </>
    )
}