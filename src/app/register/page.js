import Navbar from "../Components/Navbar/Navbar";

export default function register() {
    return (
        <>
            <Navbar/>
            <main className="bg-violet-800 flex flex-col items-center justify-center min-h-screen py-10">
                <form>
                    <div>
                        <label htmlFor="username">Team Name: </label>
                        <input id="username" type="text" name="username"></input>
                    </div>
                    <div>
                        <label htmlFor="username">Password: </label>
                        <input id="password" type="password" name="password"></input>
                    </div>
                    <div>
                        Member 1 Details:
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input id="name1" type="text" name="name"></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input id="email1" type="email" name="email"></input>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone: </label>
                            <input id="phone1" type="number" name="Phone"></input>
                        </div>
                    </div>
                    <div>
                        Member 2 Details:
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input id="name1" type="text" name="name"></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input id="email1" type="email" name="email"></input>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone: </label>
                            <input id="phone1" type="number" name="Phone"></input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="payment">Payment Mode: </label>
                        <select>
                            <option value="offline">Offline</option>
                            <option value="online">Online</option>
                        </select>
                    </div>
                    <div>
                        <button 
                            className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-pink-300 hover:to-blue-50 text-white w-30 font-sans py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-1/2">
                                Register Now
                        </button>
                    </div>
                </form>
            </main>
        </>
    )
}