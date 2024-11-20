"use client"

import {usePathname} from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';



export default function DarkMode() { 

    const currentPath = usePathname();
    
    const pageClass = clsx({
        'dark-mode': currentPath === '/dark-mode', 
        'light-mode' : currentPath === '/light-mode',
      })

    return ( 
        <>
            <div className={pageClass}> Current Path: {currentPath}
                <Link href='/'> 
                    <div> Home Page </div>
                </Link>
            </div>
        </>
    )
}