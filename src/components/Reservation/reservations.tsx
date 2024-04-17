import React, { useState } from 'react';
import rest from "../../assets/Recurso-1.png"
import ReservationForm from './reservationForm';
import ConfirmationDialog from './ConfirmationDialog';

import { FormValues } from './reservationForm';

const Reservations: React.FC = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [formData, setFormData] = useState<FormValues | null>(null);

    const handleDialog = (value: { showDialog: boolean; formData: FormValues }) => {
        const { showDialog, formData } = value;
        setShowDialog(showDialog);
        setFormData(formData);
    }
    return (
        <div className='pt-2 px-6 min-h-screen bg-background text-text dark:bg-darkbackground dark:text-darktext'>
            <h1 className='text-text dark:text-darktext md:text-6xl text-2xl font-bold text-center py-4'>MAKE A RESERVATION</h1>
            <div className='flex flex-col md:grid md:grid-cols-2 justify-center px-4'>
                <div>
                    <ReservationForm onDialog={handleDialog} />
                    <p className='py-2 text-center'>For reservations of 7+ guests, please contact us by telephone or email</p>
                </div>
                <div className='px-4'>
                    <img src={rest} alt="Little Lemon Mexico interior" className='top-0 mt-8 md:mt-0' />
                    <h3 className='text-text dark:text-darktext text-md py-4'>Nestled in the heart of Mexico City, there's a culinary gem known as "Little Lemon." But the story of Little Lemon doesn't begin in the bustling streets of Mexico City; rather, it starts in a quaint Mediterranean village, where the fragrance of olive groves and the azure hues of the sea set the backdrop for a family's culinary adventure.

                    </h3>
                    <h3 className='text-text dark:text-darktext text-md py-4'>Generations ago, the Athie family, with roots deeply entrenched in Mediterranean cuisine, crafted recipes passed down through the ages. Their secret ingredient? Love. Each dish was prepared with care and tradition, infused with the vibrant flavors of sun-ripened tomatoes, fragrant herbs, and the zest of fresh lemons.</h3>
                    <h3 className='text-text dark:text-darktext text-md py-4'>Wanna join us? Book a table now</h3>

                </div>
            </div>
            <div>
                {showDialog && (
                <ConfirmationDialog
                onDialog={(value: boolean) => handleDialog({ showDialog: value, formData: formData })}
                name={formData?.name}
                email={formData?.emailAddress}
                guests={formData?.guests}
            />
                )}

            </div>

        </div>
    );
};

export default Reservations;
