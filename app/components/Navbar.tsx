'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Navlink from './Navlink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
]

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className="my-2 flex flex-wrap items-center justify-between mx-auto px-4">
            <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>LOGO</Link>
            <div className="mobile-menu block md:hidden">
                {!navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:border-white hover:text-white transition duration-300 ease-in-out'>
                        <Bars3Icon className='h-5 w-5 text-slate-200' />
                    </button>
                ) : (
                    <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 hover:border-white hover:text-white'>
                        <XMarkIcon className='h-5 w-5 text-slate-200' />
                    </button>
                )}
            </div>
            <div className="menu hidden md:block md:w-auto" id='navbar'>
                <ul className='flex md:flex-row md:space-x-8 p-4 md:p-0 mt-0'>
                    {navLinks.map((link) => (
                    <li key={link.title}>
                        <Navlink href={link.path} title={link.title} />
                    </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  )
}
