import React, { useState } from 'react'
import { Zap, Search } from 'lucide-react'
import { Link,useNavigate } from 'react-router-dom'




const Navbar = ({handleSearch}) => {


    const [input, setInput] = useState('')
    const navigate=useNavigate();


    const work = (e) => {
        e.preventDefault();

        if (input.trim()) {
            handleSearch(input.trim())
            navigate(`search/${input}`)
            setInput("");
        }
    };
    return (
        <>
            <nav className='sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-blue-900/50 '>

                <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>

                    <div className='flex  justify-between items-center h-16'>

                        <Link to={"/"} className='flex text-white items-center font-black text-2xl hover:text-blue-400 transition duration-300 tracking-widest'>
                            <Zap className='w-7 h-7 mr-2 text-yellow-400 font-bold hover:text-amber-500 transaction duration-200  fill-yellow-400/20' />
                            <span className='text-blue-300 hover:text-white transaction duration-200'>INFO</span>PRO
                        </Link>

                        <form onSubmit={work} className='flex-1 max-w-lg mx-4 hidden sm:flex'>
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder=" Search ingredients, dishise Couisine" className='w-full px-4 py-2 bg-gray-700 border-gray-900 text-gray-50 rounded-l-full  focus:ring-4 focus:outline-none focus:ring-blue-500/50 transition placeholder-gray-500 shadow-inner shadow-black' />
                            <button className='bg-linear-to-r from-blue-600 to-cyan-500 text-white p-2.5 rounded-r-full hover:from-blue-700 hover:to-cyan-600 transition duration-200 shadow-lg shadow-blue-500/50'>
                                <Search />
                            </button>
                        </form>
                    </div>

                </div>

            </nav>


        </>
    )
}

export default Navbar