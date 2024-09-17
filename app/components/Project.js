"use client"

import React, { useState } from 'react';

export default function Project({ details, onMouseEnter, onMouseLeave}) {

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-white hover:border-3 hover:shadow-xl duration-500">
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
