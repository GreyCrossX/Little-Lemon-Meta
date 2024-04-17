import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className='py-6'>

        <main className='w-[90%] m-auto rounded-lg h-auto flex flex-col justify-center items-left px-6  bg-[#a0b6ae] dark:bg-[#495E57] py-10 text-text dark:text-darktext text-left
        '>
            <h1 className='text-2xl md:text-4xl font-bold mb-4'>Little Lemon</h1>
            <h2 className='text-xl md:text-4xl font-semibold mb-4'>CDMX</h2>
            <p className='text-sm md:text-xl mb-8 text-background'>We are a family-owned Mediterranean restaurant, focused on traditional recipes with a modern twist</p>
            <a href='/Reservations' className='text-center bg-primary dark:bg-darkprimary text-background px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-100 dark:hover:bg-yellow-300 hover:text-yellow-700 w-52 self-center'>Reserve a table</a>
        </main>
        </div>
    );
};

export default Hero;
