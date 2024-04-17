import React, { useEffect, useState } from 'react';

const Header = () => {

    const [navBarOpen, setNavBarOpen] = useState(false)

    const toggleNavBar = () => {
        setNavBarOpen(!navBarOpen)
    }
    const [darkMode, setDarkMode] = React.useState("light")

    const toggleDarkMode = () => {
        setDarkMode(darkMode==="light" ? "dark" : "light")
    }

    useEffect (() => {
        if (darkMode === "dark") {
            document.querySelector("html").classList.add("dark")
        } else {
            document.querySelector("html").classList.remove("dark")
        } [darkMode]
    })


    return (
        <nav>
            <header className='z-40 fixed flex justify-between items-center px-4 md:px-12 h-20 bg-background dark:bg-darkbackground w-full '>
                <a href="/" className='flex gap-3'>
                    <img src="./littlelemon.svg" alt="Little Lemon CDMX Logo" className='h-10' />
                    <h1 className='text-text dark:text-darktext text-lg md:text-xl lg:text-2xl font-extrabold'>LITTLE LEMON</h1>
                </a>

                <div className='hamburger-Menu'>
                    <button className='md:hidden' onClick={toggleNavBar}>
                        {navBarOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-text dark:text-darktext">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-text dark:text-darktext" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        }

                    </button>
                    <ul className={`fixed text-right pr-12 left-0 right-0 min-h-screen bg-background dark:bg-darkbackground text-text dark:text-darktext space-y-6 py-6 mt-5 bg-opacity-80 dark:bg-opacity-80
                        transform ${navBarOpen ? 'translate-x-0 transition ease-in-out duration-300' : 'translate-x-full transition ease-out duration-300'}
                        md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:translate-x-0 md:text-xl md:py-0`}
                    >
                        <li className='hover:text-darkprimary transition delay-50'><a href="/location">Location</a></li>
                        <li className='hover:text-darkprimary transition delay-50'><a href="/reservation">Make a reservation</a></li>
                        <li className='hover:text-darkprimary transition delay-50'><a href="/order">Order online</a></li>
                        <button onClick={toggleDarkMode}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 fill-text hover:fill-darkprimary hover:text-darkprimary transition delay-50">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        </button>

                    </ul>
                </div>
            </header>
        </nav>
    );
};

export default Header;