/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

'use client';

import Image from 'next/image';
import logoGEO from '@public/images/logo-geo-full.png';

export const Footer = () => {
  return (
    <footer className="bg-white p-4 md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl space-y-5 text-center">
        <a
          href="https://earthobservations.org/"
          className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image src={logoGEO} width={200} height={200} alt="GEO Logo" />
        </a>
        <ul className="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
          <li>
            <a href="https://earthobservations.org/" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a
              href="https://www.geoportal.org/?f:dataSource=dab"
              className="mr-4 hover:underline md:mr-6"
            >
              Data
            </a>
          </li>
          <li>
            <a href="https://gkhub.earthobservations.org/" className="mr-4 hover:underline md:mr-6">
              Knowledge
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          2025{' '}
          <a href="https://earthobservations.org/" className="hover:underline">
            GEO Data and Knowledge Working Group
          </a>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
