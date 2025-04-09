'use client';
import React, { useEffect } from 'react';
import Link from "next/link";
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation";
import { useState } from 'react';
import { MenuData, MenuItem } from '@/constants/MainNavItems';
import { Button } from '../ui/button';
import Logo from '../sgv/logo';
import { Search } from 'lucide-react';

const MainNav = () => {
    const pathname = usePathname();
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    return (
        <div className='w-full'>
            <div className="w-full min-h-16 bg-white flex justify-center items-center">
                <div className="flex min-w-[80%] justify-between items-center text-black text-sm font-medium py-3">
                    <Logo textColor='#000' iconColor='#0653C7'/>
                    <div className='flex px-8'>
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
                        <Search className=''/>
                        <Button className="rounded-full p-4 h-10 w-30 ml-6 bg-white text-black text-base border border-black hover:cursor-pointer hover:bg-blue-500 hover:border-blue-500">
                            Contact us
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainNav;