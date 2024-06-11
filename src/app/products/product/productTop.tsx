"use client"
import React from 'react';
import { IoClose } from "react-icons/io5";
import { useFilter } from '../../../../context/page';


export default function ProductTop(){
 
    const { selectedCategories, setSelectedCategories } = useFilter();

    const handleCategoryClose = (category:string) => {
        setSelectedCategories(selectedCategories.filter(item => item !== category));
    };

    return (
        <>
            <div className="flex flex-wrap space-y-2 space-x-2 mb-5">
                {selectedCategories.map(category => (
                    <div key={category} className="px-2 py-1 flex items-center rounded-lg">
                        <span>{category}</span>
                        <button className="ml-1" onClick={() => handleCategoryClose(category)}>
                            <IoClose className="h-4 w-4 text-gray-600 hover:text-red-600" />
                        </button>
                    </div>
                ))}
            </div>
            <div style={{ backgroundImage: 'url(/images/Banner.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="p-8 space-y-2">
                    <button className='border bg-orange-200 font-semibold text-xs p-1 rounded-md text-amber-950 mb-3'>Only this week</button>
                    <h2 className='font-bold text-3xl w-3/4'>Grocery store with different treasures</h2>
                    <p className='text-xm text-gray-600 w-3/4'>We have prepared special discounts for you on grocery products...</p>
                    <button className='border bg-white text-black font-semibold rounded-xl py-1 px-2'>Shop Now &rarr;</button>
                </div>
            </div>
        </>
    )
}

