/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import { EventHero, ScheduleSection } from '../components';

import { BoothSchedule } from '@db/schedule';

export default function BoothPage() {
  return (
    <>
      <EventHero
        label={'GEO Global Forum'}
        title={'GEO Data and Knowledge WG booth'}
        description={
          'Explore the power of EO-based applications through live demos, expert insights, and hands-on tech.'
        }
        booth={false}
        odok={false}
      />

      <div id="schedule">
        <ScheduleSection
          id={'day-01'}
          title={BoothSchedule.Day01.title}
          description={BoothSchedule.Day01.description}
          data={BoothSchedule.Day01.activities}
        />

        <ScheduleSection
          id={'day-02'}
          title={BoothSchedule.Day02.title}
          description={BoothSchedule.Day02.description}
          data={BoothSchedule.Day02.activities}
        />

        <ScheduleSection
          id={'day-03'}
          title={BoothSchedule.Day03.title}
          description={BoothSchedule.Day03.description}
          data={BoothSchedule.Day03.activities}
        />

        <ScheduleSection
          id={'day-04'}
          title={BoothSchedule.Day04.title}
          description={BoothSchedule.Day04.description}
          data={BoothSchedule.Day04.activities}
        />

        <ScheduleSection
          id={'day-05'}
          title={BoothSchedule.Day05.title}
          description={BoothSchedule.Day05.description}
          data={BoothSchedule.Day05.activities}
        />
      </div>
    </>
  );
}
