import React from 'react';

const LocationSum:React.FC = () => {
    return (
        <div className='text-text dark:text-darktext h-96 py-[25%] px-[10%]'>
            <h1 className='text-4xl font-bold'>LOCATION</h1>
            <a href="https://www.google.com/maps/place/Sepia/@19.4196865,-99.1713255,15z/data=!4m6!3m5!1s0x85d1ff489d627d11:0xcd1e6f0501b1194c!8m2!3d19.4196865!4d-99.1713255!16s%2Fg%2F11c6cqw574?entry=ttu"><h2>Sinaloa 170, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX</h2></a>
            <h4>Hours:</h4>
            <h4>Moday-Closed</h4>
            <h4>Tuesday-Saturday 5pm-9m</h4>
            <h4>Sunday-Closed</h4>
        </div>
    );
};

export default LocationSum;