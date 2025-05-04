/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

'use client';

import React, { JSX, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

/**
 * Properties of the ``NavItem`` .
 */
type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

/**
 * Properties expected for the ``Header`` component.
 */
interface HeaderProps {
  logoSrc: string;
  logoAlt: string;
  navItems: NavItem[];
}

/**
 * Common header for the DKWG Events pages.
 *
 * @component
 * @param {HeaderProps} props - Component props.
 * @param {string} props.logoSrc - Logo image address.
 * @param {string} props.logoAlt - Logo image alternative text.
 * @param {NavItem} props.navItems - Navigation items.
 * @returns {JSX.Element} The rendered Header component.
 */
export const Header: React.FC<HeaderProps> = ({
  logoSrc,
  logoAlt,
  navItems,
}: HeaderProps): JSX.Element => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src={logoSrc} alt={logoAlt} width={48} height={48} />
            <span className="text-base font-semibold text-gray-900">GEO Data and Knowledge WG</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <span
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    pathname === item.href
                      ? 'bg-[#459299]/20 text-[#459299]'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-[#459299]'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 space-y-2 pb-4 md:hidden">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <span
                  className={`block w-full rounded-lg px-4 py-2 text-left text-sm font-medium ${
                    pathname === item.href
                      ? 'bg-[#459299]/20 text-[#459299]'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
