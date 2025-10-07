'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaLinkedinIn, FaGithub, FaHome } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => pathname === path;

    return (
        <div className="relative ">
            {/* Gradient background behind the navbar */}
            {/*<div
                className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-20"
                aria-hidden="true"
            />
            */}

            {/* Actual navbar */}
            <nav className="fixed top-0 border-b-slate-900 border-b-1  left-0 w-full z-30 font-title p-4 flex items-center justify-between px-6 md:px-12 bg-parchment-light bg-[url('/noise.png')] text-black shadow-lg">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 z-40"
                >
                    <FaHome size={20} color={isOpen ? "white" : "black"} />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 items-center relative">
                    {/*<li>
                        <Link
                            href="/blog"
                            className={isActive('/gallery') ? 'underline' : 'hover:underline'}
                        >
                            Blog
                        </Link>
                    </li>
                    */
                    }
                    <li>
                        <Link
                            href="/projects"
                            className={pathname.startsWith('/poems') ? 'underline' : 'hover:underline'}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={isActive('/contact') ? 'underline' : 'hover:underline'}
                        >
                            Contact
                        </Link>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/johnny-scanlon-302419276/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-blue-600 transition-colors"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/johnny-scanlon-302419276/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-amber-600 transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden z-40"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes size={24} color='white' /> : <FaBars size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center gap-8 text-2xl md:hidden z-30 text-white">
                        <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                        <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        <a
                            href="https://www.instagram.com/deptforddoggerels/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-pink-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaLinkedinIn size={28} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/johnny-scanlon-302419276/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-amber-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaGithub size={20} />
                        </a>
                    </div>
                )}
            </nav>
        </div>
    );
}