'use client';

import { ListIcon, ShoppingCartSimpleIcon, UserCircleIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

function NavLink({ href, name, setShowMenu, currentPath }: { href: string; name: string; setShowMenu: Dispatch<SetStateAction<boolean>>; currentPath: string; }) {
    return <button type="button" onClick={() => setShowMenu(false)}>
        <Link href={href} className={`${href === '/' && 'font-bold'} hover:underline underline-offset-2`}>{name}</Link>
    </button>;
}

export default function DesktopNavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const pathname = usePathname();

    return (
        <nav className="absolute bg-white block sm:flex justify-between items-center px-4 py-4 top-0 leading-0 z-10 w-full">
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
            <div className={`${showMenu ? 'absolute mt-4 py-8 w-full backdrop-blur-md bg-white/50' : 'hidden sm:flex'} flex-col flex left-0 sm:mt-0 sm:p-0 sm:static sm:flex-row sm:gap-4 gap-12 justify-around sm:justify-end items-center text-neutral-700 font-maru`}>
                <NavLink href="/" name="Home" setShowMenu={setShowMenu} currentPath={pathname} />
                <NavLink href="/explore" name="Shop" setShowMenu={setShowMenu} currentPath={pathname}/>
                <NavLink href="/coupons" name="Coupons" setShowMenu={setShowMenu} currentPath={pathname}/>
                <NavLink href="/about" name="About" setShowMenu={setShowMenu} currentPath={pathname}/>
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
