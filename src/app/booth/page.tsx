/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import { EventHero, ScheduleSection } from '../../components';

import { BoothSchedule } from '@db/schedule';

export default function BoothPage() {
  return (
    <>
      <EventHero
        label={'GEO Global Forum - Booth #25'}
        title={'GEO Data and Knowledge WG booth'}
        description={
          'Dive into hands-on experiences, cutting-edge technology demos, and engaging live sessions.'
        }
      />

      <div id="schedule" className="mt-5">
        <ScheduleSection
          id={'day-01'}
          title={'Monday, 26 September'}
          description={
            'From 14:00 to 16:00 — 2 hours of nonstop innovation, demos, and discussion.'
          }
          data={BoothSchedule}
        />

        <ScheduleSection
          id={'day-02'}
          title={'Tuesday, 27 September'}
          description={
            'From 14:00 to 16:00 — 2 hours of nonstop innovation, demos, and discussion.'
          }
          data={BoothSchedule}
        />

        <ScheduleSection
          id={'day-03'}
          title={'Wednesday, 28 September'}
          description={
            'From 14:00 to 16:00 — 2 hours of nonstop innovation, demos, and discussion.'
          }
          data={BoothSchedule}
        />

        <ScheduleSection
          id={'day5-04'}
          data={BoothSchedule}
          title={'Thursday, 29 September'}
          description={
            'From 14:00 to 16:00 — 2 hours of nonstop innovation, demos, and discussion.'
          }
        />
      </div>
    </>
  );
}
