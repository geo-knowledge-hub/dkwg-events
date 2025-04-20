/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React, { JSX, ReactNode } from 'react';

import './globals.css';

import logoDKWG from '@public/images/logo-dkwg.svg';

import { Header, Footer } from '../components';

/**
 * LayoutProps Interface - Defines the expected properties for the Layout component.
 */
interface LayoutProps {
  /** The child components that will be rendered inside the layout */
  children: ReactNode;
}

/**
 * Layout Component - Provides the main structure of the application.
 *
 * @component
 * @param {LayoutProps} props - The properties for the Layout component.
 * @param {ReactNode} props.children - The main content of the page.
 * @returns {JSX.Element} The rendered Layout component.
 */
const RootLayout: React.FC<LayoutProps> = ({ children }: LayoutProps): JSX.Element => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-gray-50 font-sans antialiased">
        {/* Header */}
        <Header
          logoSrc={logoDKWG}
          logoAlt={'GEO Data and Knowledge Working Group logo'}
          navItems={[
            { label: 'Booth', href: '/' },
            {
              label: 'ODOK',
              href: 'https://earthobservations.org/about-us/events/geo-global-forum-2025/schedule/odok',
              external: true,
            },
          ]}
        />

        {/* Main Content */}
        <main className="mt-20 flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
