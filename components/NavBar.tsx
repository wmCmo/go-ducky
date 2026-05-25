'use client';

import { IconContext, ListIcon, ShoppingCartSimpleIcon, UserCircleIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavLink({ href, name }: { href: string; name: string; }) {
    return <Link href={href} className={`${href === '/' && 'font-bold'} hover:underline underline-offset-2`}>{name}</Link>;
}

export default function DesktopNavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const pathname = usePathname();

    return (
        <nav className="bg-white block sm:flex justify-between items-center px-4 py-4 absolute top-0 leading-0 z-10 w-full">
            <div className="flex justify-between sm:block">
                <div className="flex items-center">
                    <img src="/svg/logo.svg" alt="Go Ducky Shop logo" className="w-12 h-12" />
                    <div className="flex flex-col gap-5">
                        <span className="font-cooper text-lg text-neutral-700 leading-0">Go Ducky</span>
                        <span className="font-cooper text-2xl text-amber-300 leading-0">Shop</span>
                    </div>
                </div>
                <button type="button" className="bg-neutral-200 p-1 rounded-md sm:hidden" onClick={() => setShowMenu(prev => !prev)}>
                    <ListIcon weight="bold" color="#404040" size={36} />
                </button>
            </div>
            <div className={`${showMenu ? 'flex' : 'hidden'} flex-col sm:flex-row gap-4 justify-around items-center text-neutral-700 font-maruh h-full`}>
                <NavLink href="/" name="Home" />
                <NavLink href="/explore" name="Shop" />
                <NavLink href="/coupons" name="Coupons" />
                <NavLink href="/about" name="About" />
                <div className="flex items-center text-neutral-700 gap-2">
                    <Link href={'/profile'}>
                        <UserCircleIcon weight="fill" className="w-6 h-6" />
                    </Link>
                    <Link href={'/cart'}>
                        <ShoppingCartSimpleIcon weight="fill" className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
