'use client';
import React, { useEffect } from 'react';
import Link from "next/link";
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation";
import { useState } from 'react';
import { MenuData, MenuItem } from '@/constants/MainNavItems';
import { Button } from '../ui/button';
import Logo from '../sgv/logo';

const MainNav = () => {
    const pathname = usePathname();
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    return (
        <div className='w-full py-4'>
            <div className="w-full min-h-16 bg-black flex justify-center items-center">
                <div className="flex min-w-[65%] justify-between items-center text-white">
                    <Logo textColor='#fff'/>
                    <div className='flex'>
                        {MenuData.map((item,index)=> (
                            <div key={item.href+index} className='p-4 '>
                                {item.subItems ? (
                                    <div></div>
                                ):(
                                    <Link href={item.href} className='hover-line'><span>{item.title}</span></Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center">
                        <Button className="rounded-full p-4 h-10 w-30 bg-black text-white border border-white hover:cursor-pointer hover:bg-blue-500 ">
                            Contact us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainNav;