import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { CiShoppingCart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
// import products from '../data/data.json';

interface RelatedProduct{
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

export const RelatedProducts:React.FC = () =>{

  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      const shuffleData = data.sort(() =>0.5 - Math.random());
      const randomItems = shuffleData.slice(0,6);
      setRelatedProducts(randomItems);
    })
    .catch(error => console.error('Error fetching data:',error));
  },[])
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     const filterProducts = products.filter(item => item.category === category);
//     const subsetRelatedProducts = filterProducts.slice(0, 6);
//     setRelatedProducts(subsetRelatedProducts);
//   }, [category]);

//   const handleHeartClick = (productId) => {
//     const isWishlistItem = wishlist.includes(productId);
//     if (isWishlistItem) {
//       removeFromWishlist(productId);
//     } else {
//       addToWishlist(productId);
//     }
//   };

  return (
    <div className='space-y-5'>
      <h4 className='font-semibold'>Related Products</h4>
      <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 cursor-pointer'>
        {/* {relatedProducts.map((item) => ( */}
          {/* <Link key={item.id} href={`/products/${item.id}`} passHref> */}
          {relatedProducts.map(item => (
          <Link  href="products/productDetails" passHref>
            <div className='border p-2 space-y-2'>
              <div className='flex justify-between'>
                <button className='border bg-red-600 text-white text-xs py-1 px-2 rounded-lg'>10%</button>
                <FaHeart
                  className='text-xl cursor-pointer'
                  // style={{ color: wishlist.includes(item.id) ? 'red' : 'gray' }}
                //   onClick={(e) => {
                //     e.preventDefault();
                //     handleHeartClick(item.id);
                //   }}
                />
              </div>
              <div className='w-full'>
                <img src={item.image} alt="Image" className='w-full' />
              </div>
              <h3 className='font-semibold text-xm'>{item.title}</h3>
              <div className='flex justify-normal item-center'>
                {[...Array(5)].map((_, index) => (
                  <AiFillStar
                    key={index}
                    style={{ color: index < Math.round(item.rating.rate) ? 'gold' : 'gray' }}
                  />
                ))}
                <h6 className='ml-2'>{item.rating.rate}</h6>
              </div>
              <div className='flex flex-wrap item-center space-x-3'>
                <h3 className='font-medium text-xl text-red-500'>${item.price}</h3>
                <del className='text-xm font-medium'>$1.78</del>
              </div>
              <div className='flex item-center space-x-5'>
                <CiShoppingCart className='bg-green-500 text-3xl text-white p-1' />
                <h6 className='text-green-700 font-bold'>IN STOCK</h6>
              </div>
            </div>
          </Link>
          ))}
        {/* ))} */}
      </div>
    </div>
  );
}

export default RelatedProducts;
