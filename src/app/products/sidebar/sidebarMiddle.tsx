// components/SidebarMiddle.js
"use client"
import React from 'react';
import { useFilter } from '../../../../context/page';


const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing", 
];

export default function SidebarMiddle(){
    const {selectedCategories, setSelectedCategories} = useFilter();

    const handleCategoryChange = (category:string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div className='pt-3 pb-5 border-b border-gray-300'>
            <h3 className='font-semibold mb-2'>Product Categories</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category} className="mb-2 whitespace-nowrap">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox"
                                name="category"
                                value={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategoryChange(category)}
                            />
                            <span className={`ml-2 ${selectedCategories.includes(category) ? "font-semibold" : "font-normal"}`}>
                                {category}
                            </span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};
