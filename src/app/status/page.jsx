'use client'

import { useState } from "react";
// import axios from "axios"
import Navbar from "../Components/Header/Navbar/Navbar";
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
            <main className="bg-violet-800 flex flex-col items-center justify-center min-h-screen py-10">
                <form>
                    <div>
                        <label htmlFor="uid">Unique ID: </label>
                        <input id="uid" type="text" name="uid" onChange={e => setUid(e.target.value)}></input>
                    </div>
                    <button className="border border-slate-700 bg-green-400" onClick={handleSubmit}>Check</button>
                </form>
            </main>
        </>
    )
}