import { FaSearch } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to="/">
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-500'>Sahand</span>
                    <span className='text-slate-700'>Estate</span>
                </h1>
            </Link>
            <form action="" className='bg-slate-100 p-1 rounded-lg flex items-center'>
                <input type="text" placeholder='Search...' className='bg-transparent p-2 focus:outline-none w-28 sm:w-64'/>
                <FaSearch className='text-slate-600 mr-2 cursor-pointer'/>
            </form>
            <ul className='text-decoration-none flex gap-4 items-center '>
                <Link to="/" ><li className='hidden sm:inline text-slate-600 hover:text-slate-900 hover:underline cursor-pointer'>Home</li></Link>
                <Link to="/about" ><li className='hidden sm:inline text-slate-600 hover:text-slate-900 cursor-pointer'>About</li></Link>
                <li>Sign In</li>
            </ul>
        </div>
    </header>
  )
}

export default Header