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
import Link from 'next/link';

/**
 * Properties expected for the ``EventHero`` component.
 */
interface EventHeroProps {
  label: string;
  title: string;
  description: string;
  booth: boolean;
  odok: boolean;
}

/**
 * Common hero for events page.
 *
 * @component
 * @param {EventHeroProps} props - Component props.
 * @param {string} props.label - Hero main label.
 * @param {string} props.title - Hero title.
 * @param {string} props.description - Hero description.
 * @param {string} props.booth - Flag indicating if it is to use booth button.
 * @param {string} props.odok - Flag indicating if it is to use odok button.
 * @returns {JSX.Element} The rendered Header component.
 */
export const EventHero: React.FC<EventHeroProps> = ({
  label,
  title,
  description,
  booth,
  odok,
}: EventHeroProps): JSX.Element => {
  return (
    <section className="h-auto bg-gray-100 px-4 py-16">
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
        <div className="flex flex-wrap justify-center gap-2">
          {booth && (
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-[#459299] px-5 py-2.5 font-medium text-white shadow transition hover:bg-[#36777c] focus:ring-2 focus:ring-[#459299] focus:ring-offset-2 focus:outline-none"
            >
              Full schedule
            </Link>
          )}

          {odok && (
            <Link
              href="https://earthobservations.org/about-us/events/geo-global-forum-2025/schedule/odok"
              target={'_blank'}
              className="inline-flex items-center rounded-lg bg-[#459299] px-5 py-2.5 font-medium text-white shadow transition hover:bg-[#36777c] focus:ring-2 focus:ring-[#459299] focus:ring-offset-2 focus:outline-none"
            >
              Explore ODOK
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
