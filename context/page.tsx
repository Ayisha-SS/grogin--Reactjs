"use client";
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FilterContextProps {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  searchTerm:string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  wishlist:number[];
  addToWishlist:(id:number) => void;
  removeFromWishlist:(id:number) => void;
  priceRange:number[];
  setPriceRange:React.Dispatch<React.SetStateAction<number[]>>;
  handlePriceRangeChange: (range: number[]) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState([0,1000]);

  const addToWishlist = (id: number) => {
    setWishlist((prev) => [...prev, id]);
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter(item => item !== id));
  };
  const handlePriceRangeChange = (range:number[]) => {
    setPriceRange(range);
};

  const value = {
    selectedCategories, 
    setSelectedCategories, 
    searchTerm, 
    setSearchTerm,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    priceRange,
    setPriceRange,
    handlePriceRangeChange,
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
