import Navbar from "../Components/Navbar/Navbar";

export default function contact() {
    return (
        <>
            <Navbar/>
            <main className="bg-violet-800 flex flex-col items-center justify-center min-h-screen py-10">
                <form>
                    <div>
                        <label htmlFor="username">Name</label>
                        <input className="borderColor-red" id="name" type="text" name="name"></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email"></input>
                    </div>
                    <div>
                        <label htmlFor="textarea">Enter your message</label>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button 
                            className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-pink-300 hover:to-blue-50 text-white w-20 font-sans py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-1/2">
                                Send
                        </button>
                    </div>
                </form>
            </main>
        </>
    )
}