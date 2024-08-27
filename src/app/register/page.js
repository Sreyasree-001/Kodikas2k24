'use client'

import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
// import { baseURL } from "../baseURL";
// import axios from "axios";

export default function register() {
    const [data, setData] = useState({
        teamname: "",
        name1: "",
        email1: "",
        phone1: "",
        name2: "",
        email2: "",
        phone2: "",
        mode: ""
    })
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
            <main className="bg-violet-800 flex flex-col items-center justify-center min-h-screen py-10">
                <form>
                    <div>
                        <label htmlFor="username">Team Name: </label>
                        <input className="border border-slate-700" id="username" type="text" name="teamname" onChange={handleChange}></input>
                    </div>
                    <div>
                        Member 1 Details:
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input className="border border-slate-700" id="name1" type="text" name="name1" onChange={handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input className="border border-slate-700" id="email1" type="email" name="email1" onChange={handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone: </label>
                            <input className="border border-slate-700" id="phone1" type="number" name="phone1" onChange={handleChange}></input>
                        </div>
                    </div>
                    <div>
                        Member 2 Details:
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input className="border border-slate-700" id="name2" type="text" name="name2" onChange={handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input className="border border-slate-700" id="email2" type="email" name="email2" onChange={handleChange}></input>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone: </label>
                            <input className="border border-slate-700" id="phone2" type="number" name="phone2" onChange={handleChange}></input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="payment">Payment Mode: </label>
                        <select className="border border-slate-700" name="mode" onChange={handleChange}>
                            <option value="offline">Offline</option>
                            <option value="online">Online</option>
                        </select>
                    </div>
                    <button className="border border-slate-700 bg-green-400" type="submit" onClick={handleSubmit}>Register Now</button>
                </form>
            </main>
        </>
    )
}