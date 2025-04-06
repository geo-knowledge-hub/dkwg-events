/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

'use client';

import React, { JSX } from 'react';

/**
 * Properties expected for the ``EventHero`` component.
 */
interface EventHeroProps {
  label: string;
  title: string;
  description: string;
}

/**
 * Common hero for events page.
 *
 * @component
 * @param {EventHeroProps} props - Component props.
 * @param {string} props.label - Hero main label.
 * @param {string} props.title - Hero title.
 * @param {string} props.description - Hero description.
 * @returns {JSX.Element} The rendered Header component.
 */
export const EventHero: React.FC<EventHeroProps> = ({
  label,
  title,
  description,
}: EventHeroProps): JSX.Element => {
  return (
    <section className="h-screen bg-gray-100 px-4 py-16 sm:h-auto md:h-auto lg:h-auto">
      <div className="mx-auto max-w-4xl space-y-12 text-center lg:space-y-6">
        {/* Label */}
        <span className="inline-flex items-center rounded-full bg-[#c7e4e6] px-3 py-1 text-sm font-medium text-[#306c70]">
          {label}
        </span>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>

        {/* Description */}
        <p className="text-lg text-gray-600">{description}</p>

        {/* CTA Button - Schedule (Fixed) */}
        <a
          href="#schedule"
          className="inline-flex items-center rounded-lg bg-[#459299] px-5 py-2.5 font-medium text-white shadow transition hover:bg-[#36777c] focus:ring-2 focus:ring-[#459299] focus:ring-offset-2 focus:outline-none"
        >
          Schedule
          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              d="M17 8l4 4m0 0l-4 4m4-4H3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
