import React from 'react';
import Hero from './Hero';
import QuickMenu from './QuickMenu';

const Home = () => {
    return (
        <div className="w-full pt-20 bg-background dark:bg-darkbackground">
            <Hero />
            <QuickMenu />
        </div>
    );
};

export default Home;