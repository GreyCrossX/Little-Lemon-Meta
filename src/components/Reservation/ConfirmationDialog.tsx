import React from 'react';

interface ConfirmationDialogProps {
    onDialog: (valie:boolean) => void;
    name: string;
    email: string;
    guests:number
}


const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({onDialog, name, email, guests}) => {
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-50 bg-opacity-70' onClick={() => onDialog(false)}>
            <div className='flex flex-col items-center justify-center absolute top-[50%] left-[25%] translate-x-1/2 translate-y-1/2 bg-background text-text dark:bg-darkbackground dark:text-darktext p-5 rounded-md'>
<h1 className='text-center left-0'>Hi {name}! Thank you for your reservation for {guests} guests.<br></br> You will receive your confirmation at {email}</h1>
            </div>
        </div>
    );
};

export default ConfirmationDialog;