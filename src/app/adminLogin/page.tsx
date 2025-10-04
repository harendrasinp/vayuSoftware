const Loginpage = () => {
    return (
        <div className="h-screen w-full flex justify-center bg-gray-200">
            <div className="mt-10 w-[25rem] h-fit p-8 bg-gradient-to-r from-slate-500 to-slate-800 flex flex-col justify-center items-center rounded-lg shadow-lg">
                <div className="text-amber-50 text-2xl">Admin Login</div>
                <input type="email" placeholder="Email" className="mb-4 p-2 focus:outline-non rounded w-full border-2 border-amber-100"/>
                <input type="password" placeholder="Password" className="mb-4 p-2 not-even:focus:outline-non rounded w-full border-2 border-amber-100 "/>
                <button className="bg-black text-white p-2 rounded w-full cursor-pointer">Login</button>
            </div>
        </div>
    )
}
export default Loginpage