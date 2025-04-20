/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

'use client';

import React, { JSX, use } from 'react';

import { useRouter } from 'next/navigation';

import { BoothSchedule } from '@db/schedule';
import { EventHero, ScheduleSection } from '@components/global';

import { EventTabs } from './components';

/**
 * Props for the BoothDaySchedulePage component.
 */
interface BoothDayProps {
  /**
   * Route parameters.
   */
  params: Promise<{ day: string }>;
}

/**
 * Page component for rendering the booth schedule for a specific day.
 *
 * @param params - A Promise that resolves to an object containing the ``day`` route param (e.g. ``day-02``).
 * @returns JSX.Element
 */
const BoothDaySchedulePage: React.FC<BoothDayProps> = ({ params }: BoothDayProps): JSX.Element => {
  // Initialize data
  const router = useRouter();
  // Extract data
  const { day } = use(params);

  // Function to handle call to change app pages
  const handleTabChange = (selectedDay: string) => {
    router.push(`/booth/${selectedDay}`);
  };

  // Select day based on booth scheduel data
  const DayBoothSchedule = BoothSchedule[day];

  // if there is no booth available, we just show few topics
  if (!DayBoothSchedule) {
    return (
      <div className="px-4 py-12 text-center">
        <h1 className="text-xl font-semibold text-gray-800">Schedule not found</h1>
        <p className="mt-2 text-gray-500">Please select another day.</p>
      </div>
    );
  }

  // Render!
  return (
    <>
      <EventHero
        label={'GEO Global Forum'}
        title={'GEO Data and Knowledge WG booth'}
        description={
          'Explore the power of EO-based applications through live demos, expert insights, and hands-on tech.'
        }
        booth={true}
        odok={false}
      />

      {/* Tabs for switching days */}
      <div className="px-4 md:px-8">
        <EventTabs activeDay={day} onSelectDay={handleTabChange} />
      </div>

      <div id="schedule">
        <ScheduleSection
          id={day}
          title={DayBoothSchedule.title}
          description={DayBoothSchedule.description}
          data={DayBoothSchedule.activities}
        />
      </div>
    </>
  );
};

export default BoothDaySchedulePage;
