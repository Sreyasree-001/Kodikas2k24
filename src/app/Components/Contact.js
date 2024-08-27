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
        <form>
            <div id="contact">
                <label htmlFor="username">Name</label>
                <input className="border border-slate-700" id="username" type="text" name="name" onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input className="border border-slate-700" id="email" type="email" name="email" onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input className="border border-slate-700" id="phone" type="number" name="phone" onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="textarea">Enter your message</label>
                <textarea className="border border-slate-700" name="message" onChange={handleChange}></textarea>
            </div>
            <button className="border border-slate-700 bg-green-400" onClick={handleSubmit} type="submit">Send</button>
        </form>
    )
}