import React from 'react';

interface MenuCardsProps {
    title:string;
    text:string;
    price:string;
    img:string
}

const MenuCards: React.FC<MenuCardsProps> = ({ title, text, price, img }) => {
    return (
        <a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex-shrink-0 w-3/4 p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal max-h-14 overflow-hidden text-sm text-gray-700 dark:text-gray-400">{text}</p>
                <h6 className='mb-2 text-xl font-semibold text-text'>{price}</h6>
            </div>
            <div className="flex-shrink-0 w-1/4 px-1 py-4">
                <img className="w-24 h-24  md:w-32 md:h-32 rounded-full" src={img} alt={title} />
            </div>
        </a>
    );
};

export default MenuCards;
