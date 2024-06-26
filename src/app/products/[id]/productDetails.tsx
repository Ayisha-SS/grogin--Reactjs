"use client"
import React, { useEffect, useState,  } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoCart, IoShieldCheckmarkOutline, IoHeartOutline, IoShareOutline, IoGitCompare } from "react-icons/io5";
import { FiCreditCard } from "react-icons/fi";
import Button from '@/app/_component/general/button';
import RelatedProducts from './recomended';
import { useFilter } from '../../../../context/page';
import ReactImageMagnify from "react-image-magnify"
import auth from '../../../../auth/auth';

interface Details{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{
        rate:number;
        count:number;
    };
}

interface ProductDetailsProps {
    productId: number;
  }


export const ProductDetails:React.FC<ProductDetailsProps> = ({productId}) =>{
    const [details, setDetails ] = useState<Details | null>(null);
    const { addToWishlist, removeFromWishlist, wishlist } = useFilter();
    const [selectedImage, setSelectedImage] = useState(details?.image);
    const [quantity, setQuantity] = useState(1); // Default quantity is 1
    const [totalPrice, setTotalPrice] = useState<number | null>(null);

   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const data = await response.json();
                setDetails(data);
                setSelectedImage(data.image);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchData();
    }, [productId]);

    const handleAddToWishlist = () => {
        if (details?.id !== undefined) {
            addToWishlist(details.id);
        }
      };
    
      const handleRemoveFromWishlist = () => {
        if (details?.id !== undefined) {
            removeFromWishlist(details.id);
        }
      };

      const handleImageClick = (newImage:string) => {
        setSelectedImage(newImage);
      };

      const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    useEffect(() => {
        if (details) {
            const calculatedTotalPrice = details.price * quantity;
            setTotalPrice(calculatedTotalPrice);
        }
    }, [quantity, details]);


    // Timer
    const [time, setTime] = useState({ days: 81, hours: 6, minutes: 50, seconds: 2 });
    useEffect(() => {
        const interval = setInterval(() => {
          if (time.seconds > 0) {
            setTime(prev => ({ ...prev, seconds: prev.seconds - 1 }));
          } else if (time.minutes > 0) {
            setTime(prev => ({ ...prev, minutes: prev.minutes - 1, seconds: 59 }));
          } else if (time.hours > 0) {
            setTime(prev => ({ ...prev, hours: prev.hours -1 , minutes :59 , seconds :59}));
          } else if (time.days >0){
            setTime(prev=>({...prev,days : prev.days-1,hours :23 ,minutes :59 ,seconds :59}))
          }
        },1000);
        return () => clearInterval(interval);
    },[time]);


    return (
        <div>
                <div className='wrapper py-10'>
            {details ? (
                <div>
                <div className="top flex justify-between w-full flex-col md:flex-row cursor-pointer">
                    <div className="left w-full md:w-5/12">
                        <div className='w-[70%]'>
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: details.title,
                                    isFluidWidth: true,
                                    src: details.image
                                },
                                largeImage: {
                                    src: details.image,
                                    width: 1200,
                                    height: 1800
                                },
                                isHintEnabled: true,
                                shouldHideHintAfterFirstActivation: false,
                                enlargedImageContainerDimensions: {
                                    width: '150%',
                                    height: '150%'
                                },
                                magnifierSize: '30%',
                            }} 
                            />
                            
                        </div>
                        <div className='flex w-2/12 space-x-4'>
                            <img src={details.image} alt="Image" className='border border-red-500 w-full' onClick={() => handleImageClick(details.image)}/>
                            <img src={details.image} alt="Image" className='border border-red-500 w-full' onClick={() => handleImageClick(details.image)}/>
                        </div>
                    </div>
                    <div className="right space-y-4 w-full md:w-7/12">
                        <h2 className='font-bold text-4xl'>{details.title}</h2>
                        <div className='flex justify-normal items-center border-b border-b-gray-600'>
                            {[...Array(5)].map((_, index) => (
                                <AiFillStar
                                    key={index}
                                    style={{ color: index < Math.round(details.rating.rate) ? 'gold' : 'gray' }}
                                />
                            ))}
                            <h6 className='mx-2'>{details.rating.rate}</h6>
                            <span className='uppercase'>| <span className='text-gray-600'>sku:</span>e7f8g9ho</span>
                        </div>
                        <div>
                            <p>{details.description}</p>
                        </div>
                        <div className='flex items-center space-x-3'>                    
                            <h3 className='font-bold text-4xl text-red-500'>${totalPrice}</h3>
                            <del className='text-xl font-medium'>$1.79</del>
                        </div>
                        <div>
                            <Button className='bg-green-600' label='Order on WhatsApp'/>
                        </div>
                        <div className='hidden sm:block'>
                            <div className="flex items-center bg-[#fff7ed] p-4 rounded-lg">
                                <span className="text-[#ea580c] font-bold">Special Offer :</span>
                                <div className="flex items-center ml-4">
                                    {Object.keys(time).map((unit) => (
                                    <div key={unit} className="flex flex-col items-center mx-2">
                                        <span className="bg-[#ffedd5] border border-[#fed9ae] p-2 rounded-lg text-orange-800 text-xl font-bold">{String(time[unit]).padStart(2,'0')}</span>
                                    </div>
                                    ))}
                                </div>
                                <span className="text-[#6b7280] font-medium ml-4">Remains until the end of the offer.</span>
                            </div>
                        </div>
                        <div className='flex space-x-0 min-[420px]:space-x-2 max-[420px]:flex-col space-y-2'>
                            <div className='flex justify-center items-center border-2 rounded-sm'>
                                <button  className=" px-4 py-1 rounded-l-md" onClick={handleDecrement}>-</button>
                                <div className=" py-1 px-2 text-center" >{quantity}</div>
                                <button className=" px-4 py-1 rounded-r-md" onClick={handleIncrement}>+</button>
                            </div>
                            <div>
                                <Button icon={<IoCart className='mr-2' />} label="Add To Cart" className='flex  flex-row-reverse items-center bg-green-600' />
                            </div>
                            <div>
                                <Button icon={<IoCart className='mr-2' />} label="Buy Now" className='flex flex-row-reverse items-center bg-black' />
                            </div>
                        </div>
                        <div className='border rounded-md'>
                            <div className='flex space-x-10 items-center py-1 px-4 border-b'>
                                <FiCreditCard className='text-2xl font-bold max-[420px]:text-4xl'/>
                                <p className='text-gray-500 max-[420px]:text-xs '><span className='font-bold'>Payment.</span> Payment upon receipt of goods, Payment by card in the department, Google Pay,Online card, -5% discount in case of payment</p>
                            </div>
                            <div className='flex space-x-9 items-center py-1 px-4'>
                                <IoShieldCheckmarkOutline className='text-2xl font-bold max-[420px]:text-4xl'/>
                                <p className='text-gray-500 max-[420px]:text-xs'><span className='font-bold'>Warranty.</span> The Consumer Protection Act does not provide for the return of this product of proper quality.</p>
                            </div>
                        </div>
                        <div className='flex flex-wrap space-x-0 min-[420px]:space-x-6 space-y-2 cursor-pointer'>     
                    {wishlist.includes(details.id) ? ( 
                    <div className='flex items-center space-x-2' onClick={handleRemoveFromWishlist}>
                  <IoHeartOutline className='border p-1 text-3xl text-red-500' />
                  <small className='font-medium'>Remove from Wishlist</small>
                </div>
              ) : (
                <div className='flex items-center space-x-2' onClick={handleAddToWishlist}>
                  <IoHeartOutline className='border p-1 text-3xl' />
                  <small className='font-medium'>Add to Wishlist</small>
                </div>
              )}
                <div className='flex items-center space-x-2'>
                                <IoShareOutline  className='border p-1 text-3xl' />
                                <small className='font-medium'>Share this Product</small>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <IoGitCompare className='border p-1 text-3xl' />
                                <small className='font-medium'>Compare</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom py-10">
                    <div className='space-y-5'>
                        <h4 className='font-semibold border-b border-b-gray-300'>Description</h4>
                        <p>{details.description}</p>
                    </div>
                </div>
                </div>
                ):(
                    <p>Loading...</p>
            )}
                <div>
                    <RelatedProducts/>
                </div>
            </div>
        </div>
    )
}
export default auth(ProductDetails);


