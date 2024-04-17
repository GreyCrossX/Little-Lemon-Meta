import React from 'react';
import PillButtonMenu from './PillButtonMenu';
import MenuCards from './MenuCards';
import bruschetta_0 from "../../assets/bruschetta_0.jpg.webp";
import greekSalad_0 from "../../assets/greek-salad-2-580x756.jpg"
import grilledfish_0 from "../../assets/Greek-Style-Grilled-Fish-1.jpg"
import pasta_0 from "../../assets/carbonara.jpg"

interface MenuItem {
    title:string;
    text:string;
    price:string;
    img:string
}

const QuickMenu: React.FC = () => {
    const MenuCardsItems: MenuItem[] = [
        { title: "Greek Salad", text: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", price: "$12.99", img: bruschetta_0 },
        { title: "Bruschetta", text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.", price: "$7.99", img: greekSalad_0 },
        { title: "Grilled Fish", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.", price: "$20.00", img: grilledfish_0 },
        { title: "Pasta", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.", price: "$18.99", img: pasta_0 }
    ];
    
    return (
        <div className='bg-inherit'>
            <h1 className='px-6 text-text dark:text-darktext text-2xl font-extrabold'>Order for delivery!</h1>
            <div className='flex justify-center items-center h-18 overflow-scroll w-full py-2 px-2'>
                <div className="flex overflow-x-auto py-2 px-2">
                    <PillButtonMenu text="Launch" onClick={() => {}}/>
                    <PillButtonMenu text="Mains" onClick={() => {}}/>
                    <PillButtonMenu text="Desserts" onClick={() => {}}/>
                    <PillButtonMenu text="A la Carte" onClick={() => {}}/>
                    <PillButtonMenu text="Specials" onClick={() => {}}/>
                </div>
            </div>
            <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {MenuCardsItems.map((item, index) => (
                    <MenuCards key={index} title={item.title} text={item.text} price={item.price} img={item.img} />
                ))}
            </div>
        </div>
    );
};

export default QuickMenu;
