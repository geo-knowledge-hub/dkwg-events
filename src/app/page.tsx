/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import { EventHero, ScheduleSection } from '../components';

import { ODOKSchedule } from '@db/schedule';

export default function ODOKHomePage() {
  return (
    <>
      <EventHero
        label={'GEO Global Forum - Auditorium'}
        title={'Open Data and Open Knowledge Workshop 2025'}
        description={
          'Fueling a community-powered movement across the GEO community. Discover how open data and open knowledge are driving collaboration, innovation, and impact.'
        }
        booth={true}
        odok={false}
      />

      <div id="schedule" className="mt-5">
        <ScheduleSection
          id={'day-01'}
          data={ODOKSchedule}
          title={'Monday, 5 May'}
          description={
            'From 14:00 to 18:00 — 4 hours of nonstop innovation, demos, and discussion.'
          }
        />
      </div>
    </>
  );
}
