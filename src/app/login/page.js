import Navbar from "../Components/Navbar/Navbar";

export default function login() {
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
                        <button 
                            className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-pink-300 hover:to-blue-50 text-white w-30 font-sans py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-1/2">
                                Login
                        </button>
                    </div>
                </form>
            </main>
        </>
    )
}