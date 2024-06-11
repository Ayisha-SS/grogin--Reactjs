"use client"
import React from 'react';
import Head from 'next/head';
import NavBarItem from '@/app/_component/general/navbar/page';
import ProductDetails from './productDetails';
import Footer from '../footer/page';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { FilterProvider } from '../../../../context/page';


export default function SingleItem({ params }: { params: { id: number } }){
    
    const searchParams = useSearchParams();
    const id = searchParams.get('id') || null;

    return(
        <>
            <head>
                <title>Details | Grogin</title>
            </head>
            <FilterProvider>
                <NavBarItem/>
                <ProductDetails productId={params.id}/>
                <Footer/>

            </FilterProvider>
        </>
    )
}