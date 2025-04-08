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
 * Properties of the ``Activity`` .
 */
type Activity = {
  topic: string;
  title: string;
  time: string;
  type: string;
  author?: string | undefined;
  organization?: string | undefined;
  description?: string | undefined;
  sponsor?: string | undefined;
  break?: string | undefined;
  cta?: boolean | undefined;
  ctaLink?: string | undefined;
};

/**
 * Properties of the ``Schedule data`` .
 */
type ScheduleProps = {
  id: string;
  title: string;
  description: string;
  data: Activity[];
};

/**
 * Schedule base component.
 *
 * @component
 * @param {ScheduleProps} props - Component props.
 * @param {string} props.id - Section ID.
 * @param {string} props.title - Section title.
 * @param {string} props.description - Section description.
 * @param {Activity[]} props.data - Activity items.
 * @returns {JSX.Element} The rendered Header component.
 */
export const ScheduleSection: React.FC<ScheduleProps> = ({
  id,
  title,
  description,
  data,
}): JSX.Element => {
  const grouped = data.reduce<Record<string, Activity[]>>((acc, activity) => {
    if (!acc[activity.topic]) acc[activity.topic] = [];
    acc[activity.topic].push(activity);
    return acc;
  }, {});

  return (
    <section id={id} className="px-4 pt-25">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-bold">{title}</h2>
        <p className="mb-12 text-center text-gray-500">{description}</p>

        {/* Activities */}
        <div>
          {Object.entries(grouped).map(([topic, activities]) => (
            <div key={topic} className="mb-12">
              <h3 className="mb-4 text-xl font-semibold">{topic}</h3>
              <div className="space-y-5">
                {activities.map((item, index) => {
                  const isBreak =
                    item.type.toLowerCase() === 'coffee break' ||
                    item.type.toLowerCase() === 'lunch break';

                  if (isBreak) {
                    const isCoffee = item.type.toLowerCase().includes('coffee');
                    const icon = isCoffee ? '☕' : '🍽️';
                    const sponsor = item.sponsor;

                    return (
                      <div
                        key={index}
                        className="rounded-lg border border-[#CFE4E5] bg-[#EAF4F4] p-4 shadow-sm"
                      >
                        <div className="flex w-full flex-col flex-wrap items-start justify-between md:flex-row md:items-center lg:flex-row lg:items-center">
                          {/* Left side: Time and Title */}
                          <div className="flex-1 space-y-2">
                            <p className="text-sm text-gray-500">{item.time}</p>
                            <h4 className="text-base font-medium">
                              {icon} {item.title}
                            </h4>
                          </div>

                          {/* Right side: Sponsor only, centered */}
                          {sponsor && (
                            <div className="mt-2 flex items-center text-center text-sm text-gray-500">
                              Sponsored by {sponsor}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }

                  if (item.cta) {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row"
                      >
                        {/* Left Side */}
                        <div className="space-y-3 md:w-full">
                          {/* <p className="mb-2 text-xs font-semibold tracking-wider text-pink-600 uppercase">
                            {item.ctaTagline}
                          </p> */}
                          <p className="text-sm text-gray-600">{item.time}</p>
                          <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-700">{item.description}</p>

                          <div className="flex justify-end">
                            {item.ctaLink && (
                              <a
                                href={item.ctaLink}
                                className="inline-block rounded-full bg-[#459299] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#36777c] focus:ring-2 focus:ring-[#459299]/50 focus:outline-none"
                              >
                                View
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Right Side: CTA logo */}
                        {/* <div className="mt-6 md:flex lg:flex justify-center md:mt-0 md:w-1/3 hidden">
                          <Image src={item.ctaLogo} alt="CTA logo" className="w-32" />
                        </div> */}
                      </div>
                    );
                  }

                  // Regular session block
                  return (
                    <div
                      key={index}
                      className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                    >
                      <div className="xs:flex-row flex flex-col items-start justify-between md:flex-row">
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-gray-500">{item.time}</p>
                          <h4 className="text-base font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">{item.author}</span>{' '}
                            {item?.organization && <>— {item.organization}</>}
                          </p>
                        </div>

                        <div className="xs:mt-0 mt-2 space-x-2 md:mt-0">
                          {/* Label: During break */}
                          {item.break && (
                            <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                              During {item.break}
                            </span>
                          )}

                          <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
