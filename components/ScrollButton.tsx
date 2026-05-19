'use client';

import { ArrowCircleDownIcon } from "@phosphor-icons/react";

export default function ScrollButton({ target }: { target: string; }) {
    function handleClick() {
        const el = document.getElementById(target);
        el?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <button onClick={handleClick} className="flex items-center gap-2 text-neutral-600">
            <ArrowCircleDownIcon weight="fill" />
            Scroll down
        </button>
    );
}
