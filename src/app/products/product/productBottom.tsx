"use client"
import React, { useState,useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { CiShoppingCart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import { MdOutlineGridView } from 'react-icons/md';
import { LuLayoutList } from 'react-icons/lu';
import { useFilter } from '../../../../context/page';


interface Product{
  id:number;
  title:string;
  image:string;
  rating:{
    rate:number;
    count:number;
  };
  discount:string;
  price:number;
  prevPrice:number;
  stock:string;
  category:string;
}


export const ProductBottom:React.FC = () =>{
  const [products, setProducts] = useState<Product[]>([]);
  const { selectedCategories, searchTerm,wishlist,addToWishlist,removeFromWishlist, priceRange } = useFilter();

 

  useEffect(() =>{
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>{ 
        setProducts(data)
      });
  },[]);

  const filteredProducts = products.filter(product => {
    const category = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const search = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const price = product.price >= priceRange[0] && product.price <= priceRange[1];
    return category && search && price;
  });

  const handleHeartClick = (productId: number) => {
    if (wishlist.includes(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };


  return (
    <>
      <div className='bg-[#f3f4f6] py-3 mt-3 flex justify-between px-4 rounded-md max-[768px]:hidden'>
        <div>
          <p className='text-[#959ba4]'>Showing all {filteredProducts.length} results</p>
        </div>
        <div className='flex justify-between space-x-4'>
          <p className='text-gray-500'>Sort:<span className='text-black font-medium ml-4'>Sort by latest</span></p>
          <p className='text-gray-500'>| Show:<span className='text-black font-medium ml-4'>20 Items</span></p>
          <div className='flex justify-center items-center text-xl space-x-4'>
            <MdOutlineGridView />
            <LuLayoutList />
          </div>
        </div>
      </div>
     
      <div className='grid max-[480px]:grid-cols-1 grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 mt-10 cursor-pointer max-[480px]:space-y-4'>
        {filteredProducts.map((item) => (
          <div key={item.id} className='border p-2 space-y-2 flex flex-col gap-2 max-[480px]:w-3/4'>
            <div className='flex justify-between'>
              <button className='border bg-red-600 text-white text-xs py-1 px-2 rounded-lg'>75%</button>
              <FaHeart
                className='text-xl cursor-point'
                style={{ color: wishlist.includes(item.id) ? 'red' : 'gray' }}
                onClick={() => handleHeartClick(item.id)}
              />
            </div>
            <div className='w-[50%]'>
                <img src={item.image} alt="Image" className='' />
            </div>
              <Link href={`/products/${item.id}`}><h3 className='font-semibold text-xm'>{item.title}</h3></Link>
            <div className='flex justify-normal items-center'>
              
            {[...Array(5)].map((_, index) => (
                <AiFillStar
                  key={index}
                  style={{ color: index < Math.round(item.rating.rate) ? 'gold' : 'gray' }}
                />
              ))}
              
              <h6 className='ml-2'>{item.rating.rate}</h6>
            </div>
            <div className='flex items-center space-x-3'>
              <h3 className='font-bold text-xl text-red-500'>${item.price}</h3>
              <del className='text-xm font-medium'>$1.79</del>
            </div>
            <div className='flex items-center space-x-5'>
              <CiShoppingCart className='bg-green-500 text-3xl text-white p-1' />
              <h6 className='text-green-700 font-bold'>IN STOCK</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductBottom;

