import React from 'react';
import LocationSum from './LocationSum';
import ContactInfo from './ContactInfo';
import LocationForm from './LocationForm';

const Location:React.FC = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 p-4 bg-background dark:bg-darkbackground'>
            <LocationSum />
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15051.325864481332!2d-99.1713255!3d19.4196865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff489d627d11%3A0xcd1e6f0501b1194c!2sSepia!5e0!3m2!1ses-419!2smx!4v1710819950533!5m2!1ses-419!2smx" className=" rounded-md border-spacing-0 h-full w-full md:mt-24" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <ContactInfo />
            <LocationForm />
        </div>
    );
};

export default Location