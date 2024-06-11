
'use client'
import React, { useState, useEffect } from 'react';

export default function NavbarTop() {
    const [timeLeft, setTimeLeft] = useState({
        days: 47,
        hours: 0,
        minutes: 0,
        seconds: 13
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0){
                    clearInterval(timer);
                    return prevTime
                }
                let { days, hours, minutes, seconds } = prevTime;
                seconds--;

                if (seconds < 0){
                    seconds = 59
                    minutes--;

                    if (minutes < 0) {
                        minutes = 59;
                        hours--;

                        if (hours < 0){
                            hours = 23;
                            days--;

                            if (days < 0){
                                days = 0;
                                hours = 0;
                                minutes = 0;
                                seconds = 0;
                            }
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    

    return (
        <div className='bg-[#634c9f] text-white text-[14px] py-3 hidden lg:block'>
            <div className="wrapper flex justify-evenly">
                <div>
                    <p>Free delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
                </div>
                <div className='flex font-extralight'>  
                    <p>Until the end of the sale:</p>
                    {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
                        <p>Sale Has Ended!</p>
                    ) : (
                        <div className="flex space-x-4 ml-2">
                            <span><strong>{timeLeft.days}</strong> days</span>
                            <span><strong>{timeLeft.hours}</strong> hours</span>
                            <span><strong>{timeLeft.minutes} </strong>minutes</span>
                            <span><strong>{timeLeft.seconds}</strong> sec.</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

