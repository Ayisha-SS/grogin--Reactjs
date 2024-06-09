"use client"
import React from 'react';
import Slider from 'react-slider';
import { useFilter } from '../../../../context/page';

export default function SidebarTop(){
    const { priceRange, handlePriceRangeChange} = useFilter()

    const handleSliderChange = (newPriceRange:number[]) => {
        handlePriceRangeChange(newPriceRange);
    };

    return (
        <>
            <div className='border-b border-gray-300 pb-2 w-full space-y-4'>
                <h3 className='mb-2 font-semibold'>Widget price filter</h3>
                <div className='flex space-x-2'>
                    <div>
                        <h6 className='text-sm'>Min Price</h6>
                        <input type="button" value={`${priceRange[0]}`} className='border w-full' />
                    </div>
                    <span className='space-x-1'>-</span>
                    <div>
                        <h6 className='text-sm'>Max Price</h6>
                        <input type="button" value={`${priceRange[1]}`} className='border w-full' />
                    </div>
                </div>
                <Slider
                    className="slider"
                    value={priceRange}
                    onChange={handleSliderChange}
                    min={0}
                    max={1000}
                />
                <label htmlFor="price-slider" className="flex text-gray-700 text-sm font-extralight">
                    Price: <p className="font-bold ml-4">${priceRange[0]} - ${priceRange[1]}</p>
                </label>
                
            </div>
        </>
    )
}

