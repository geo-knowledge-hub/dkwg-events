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
  author: string;
  organization: string;
  time: string;
  type: string;
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
    <section id={id} className="bd-white px-4 pt-25">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-bold">{title}</h2>
        <p className="mb-12 text-center text-gray-500">{description}</p>

        {/* Activities */}
        <div>
          {Object.entries(grouped).map(([topic, activities]) => (
            <div key={topic} className="mb-12">
              <h3 className="mb-4 text-xl font-semibold">{topic}</h3>
              <div className="space-y-4">
                {activities.map((item, index) => (
                  <div key={index} className="rounded-lg border border-gray-200 p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="mb-1 text-sm text-gray-500">{item.time}</p>
                        <h4 className="text-base font-medium">{item.title}</h4>
                        <p className="mt-1 text-sm text-gray-600">
                          <span className="font-medium">{item.author}</span> — {item.organization}
                        </p>
                      </div>
                      <span className="ml-4 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
