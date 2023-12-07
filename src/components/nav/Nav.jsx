import React from 'react'
import { RxAvatar } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='  bg-slate-300 text-black '>
        
        <nav className='container mx-auto px-7 py-4 flex justify-between'>
            <div className='cursor-pointer'><Link to="/" className='font-bold text-xl'>Weather</Link></div>
            <div >
                <i className='cursor-pointer'><RxAvatar size={20} /></i>
            </div>
        </nav>
    </div>
  )
}

export default Nav