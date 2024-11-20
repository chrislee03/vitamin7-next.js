"use client";

// app/page.js
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link'
import {useState} from 'react';
import './globals.css';

// HINT: Use the `usePathname` hook to get the current pathname.
// HINT: Use the `clsx` utility to conditionally apply the 'dark-mode' class.
// HINT: There should also be two new pages we are redirecting to. Think about how we make more pages within Next.js.

/* 
INSTRUCTIONS:
Objective
Create two buttons, one that navigates to the /dark-mode page and the /light-mode page Create a dark mode that activates when the user navigates to the /dark-mode page.
 Create a light mode that activates when the user navigates to the /dark-mode page. 
 The buttons must include Dark-Mode and Light-Mode in them.
*/


/* 
STEP BY STEP:
  1. Figure out how to link the 'Link' to the function displaying the light and dark pages
    1a. Use Next.js Tutorial
  2. Figure out parameters to use in clsx and find out the proper documentation and examples displaying usecases to get better understanding
*/


function Home() {

  return ( 
    <>
      <h1> Welcome to My Home Page!</h1>
      <ul className="switch-bar"> 
        <Link href='/dark-mode'>  
          <li className="nav-option"> Dark Mode </li>
        </Link>
        <Link href='/light-mode'> 
            <li className="nav-option"> Light Mode </li>
        </Link>
          </ul>
    </>
  )
}

export default Home;