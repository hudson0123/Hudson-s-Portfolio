"use client"

import React, { useState, useEffect, useRef } from 'react';

export default function Project({ details, onMouseEnter, onMouseLeave, index}) {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    const animationDelay = `${index * 400}ms`;

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={domRef} style={{ transitionDelay: animationDelay }} className={"max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-white hover:border-3 hover:shadow-xl " +  `delay-[${Math.floor(Math.random() * 10)*100}] fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <a href="#">
                <img className="rounded-t-lg" src={details.image} alt="" />
            </a>
            <div className="p-5 align-bottom">
                <a href="#">
                    <h5 
                        className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {details.title} | {details.date}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {details.description}
                </p>
            </div>
        </div>
    );
}
