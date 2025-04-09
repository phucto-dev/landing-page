import React from 'react'

export interface SubMenu{
    title: string;
    href: string;
    roles?: string[];
    subItems?: MenuItem[];
}

export interface MenuItem {
    title: string;
    href: string;
    img?: any;
    icon?: any;
    subItems?: SubMenu[];
    roles?: string[];
}

export const MenuData: MenuItem[] = [
    {
        title: 'Platforms',
        href: '/',
    },
    {
        title: 'Solutions',
        href: '/',
    },
    {
        title: 'Services',
        href: '/services',
    },
    {
        title: 'Technology',
        href: '/technology',
    },
    {
        title: 'Insights',
        href: '/',
    },
    {
        title: 'Company',
        href: '/',
    },
    {
        title: 'Careers',
        href: '/',
    },
    {
        title: 'Partners',
        href: '/',
    },
  ]