/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React, { JSX } from 'react';

import { BoothSchedule } from '@db/schedule';

/**
 * Props for the EventTabs component.
 */
interface EventTabsProps {
  /**
   * The currently active day key (e.g. "day-01").
   * Used to visually highlight the selected tab.
   */
  activeDay: string;

  /**
   * Callback called when a tab is selected.
   * Passes the selected day key (e.g. "day-02").
   */
  onSelectDay: (dayKey: string) => void;
}

/**
 * Render a horizontal list of tabs based on the booth schedule.
 *
 * @param activeDay - The currently selected day (e.g. "day-01").
 * @param onSelectDay - Function to handle tab selection, receives the day key.
 * @returns JSX.Element
 */
export const EventTabs = ({ activeDay, onSelectDay }: EventTabsProps): JSX.Element => {
  return (
    <div className="mb-6 w-full border-b border-gray-200">
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 overflow-x-auto px-4 py-4 sm:gap-3">
          {Object.entries(BoothSchedule).map(([dayKey, dayData]) => {
            const isActive = activeDay === dayKey;

            return (
              <button
                key={dayKey}
                onClick={() => onSelectDay(dayKey)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-[#459299] text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dayData.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
