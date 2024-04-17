import React from 'react';

const LocationForm:React.FC = () => {
    return (
        <div>
                    <div className='md:mt-28'>
            <h1 className='text-xl text-text dark:text-darktext py-2'>Please enter your information in the next form:</h1>
            <form className="md:px-12 mx-auto md:py-12 bg-[#a0b6ae] dark:bg-[#495E57] text-text dark:text-darktext font-semibold text-xl rounded-md  pt-2 border-gray-700">
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-white dark:border-gray-600 dark:focus:border-darkactext-darkaccent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-text dark:text-darktext duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-darkaccent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-white dark:border-gray-600 dark:focus:border-darkactext-darkaccent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-text dark:text-darktext duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-darkaccent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-white dark:border-gray-600 dark:focus:border-darkactext-darkaccent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-text dark:text-darktext duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-darkaccent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-white dark:border-gray-600 dark:focus:border-darkactext-darkaccent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-text dark:text-darktext duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-focus:dark:text-darkaccent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="relative z-0 w-full group">
                        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-white dark:border-gray-600 dark:focus:border-darkactext-darkaccent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-text dark:text-darktext duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-darkaccent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="relative z-0 w-full group">
                        <input type="message" name="floating_message" id="floating_message" className="block py-2.5 px-0 w-full text-sm text-text bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-darktext dark:border-gray-600 dark:focus:border-darkaccent focus:outline-none focus:ring-0 focus:border-accent peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-text dark:text-darktext duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-accent peer-focus:dark:text-darkaccent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                    </div>
                </div>

                <button type="submit" className="bg-primary dark:bg-darkprimary text-background px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-100 dark:hover:bg-yellow-300 hover:text-yellow-700 w-52 mx-14 my-4">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default LocationForm;