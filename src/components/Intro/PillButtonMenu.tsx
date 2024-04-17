import React from 'react';

const PillButtonMenu = ({text, onClick}) => {
    return (

        <button
            type="button"
            onClick={onClick}
            className="h-8 min-w-24 text-text bg-secondary hover:bg-text hover:text-white focus:outline-none focus:ring-4 focus:text-white focus:bg-text focus:ring-blue-300 font-medium rounded-full text-sm px-5  text-center me-2 mb-2 dark:bg-darksecondary dark:hover:bg-text dark:focus:ring-blue-500">
            {text}
        </button>

    );
};

export default PillButtonMenu;