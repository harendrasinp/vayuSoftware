import React from 'react'
const AdminLogin = () => {
    // Header is fixed at 6rem height, so subtract that from min-h-screen
    return (
        <div className="bg-violet-200 w-full min-h-[calc(100vh-6rem)] flex justify-center items-center">
            <div className='bg-cyan-950 w-96 h-96 rounded-lg shadow-lg flex flex-col justify-center items-center'>
                <h2 className='text-amber-50 text-2xl font-bold mb-6 text-center'>Admin Login</h2>
                <form action="" className='flex flex-col items-center w-full'>
                    <input type="text" placeholder='Username' className='border border-gray-300 rounded-md p-2 w-64 mb-4 text-white' />
                    <input type="password" placeholder='Password' className='border border-gray-300 rounded-md p-2 w-64 mb-4 text-white ' />
                    <button className='bg-blue-500 text-white rounded-md p-2 w-64'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin