/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import logoDKWG from '@public/images/logo-dkwg.svg';

/**
 * Represents a single activity or event in the booth schedule.
 */
export interface BoothActivity {
  /**
   * Group or category of the activity (e.g., ``Activities``).
   */
  topic: string;

  /**
   * Title of the activity.
   */
  title: string;

  /**
   * Time range for the activity (e.g., ``10:30 - 11:00``).
   */
  time: string;

  /**
   * Type of session (e.g., ``Interactive demo``, ``Presentation``, ``Coffee break``).
   */
  type: string;

  /**
   * Author(s) presenting or involved in the activity (optional).
   */
  author?: string;

  /**
   * Organization the author(s) belong to (optional).
   */
  organization?: string;

  /**
   * Sponsor of the activity (optional).
   */
  sponsor?: string;

  /**
   * Description of the activity (used for special events or workshops).
   */
  description?: string;

  /**
   * Whether this activity includes a call-to-action (CTA) section (optional).
   */
  cta?: boolean;

  /**
   * URL for the call-to-action link (optional).
   */
  ctaLink?: string;

  /**
   * Text tagline shown for the CTA (optional).
   */
  ctaTagline?: string;

  /**
   * Logo used in the CTA (e.g., ``imported image`` or ``URL string``).
   */
  ctaLogo?: string;
}

/**
 * Full schedule for a specific day.
 */
export interface BoothDay {
  /**
   * Human-readable title for the day (e.g., ``Monday, 5 May``).
   */
  title: string;

  /**
   * A short description of the day's focus or theme.
   */
  description: string;

  /**
   * A list of scheduled activities for the day.
   */
  activities: BoothActivity[];
}

/**
 * Map each day key (e.g., ``day-01``) to its respective schedule.
 */
export interface BoothScheduleType {
  [dayKey: string]: BoothDay;
}

/**
 * Booth schedule data.
 */
export const BoothSchedule: BoothScheduleType = {
  'day-01': {
    title: 'Monday, 5 May',
    description: 'Focusing on Agriculture and Food Security and Water and Land Sustainability',
    activities: [
      {
        topic: 'Activities',
        title: 'Coffee break',
        sponsor: 'Italian Space Agency (ASI)',
        time: '10:30 - 11:00',
        type: 'Coffee break',
      },
      {
        topic: 'Activities',
        title: 'Data Licensing and Software Licensing',
        author: 'Taylor Campbell and Jan Ainali',
        organization: 'Creative Commons',
        time: '10:30 - 11:00 (during coffee break)',
        type: 'Interactive demo',
      },
      {
        topic: 'Activities',
        title: 'Field boundary delineation',
        author: 'Mykola Lavreniuk and Andrii Shelestov',
        organization: '',
        time: '11:00 - 11:30',
        type: 'Interactive demo',
      },
      {
        topic: 'Activities',
        title: 'Harmonized agronomy in-situ data for crop mapping',
        author: 'Eliana Li Santi',
        organization: 'SERCO',
        time: '11:30 - 12:00',
        type: 'Interactive demo',
      },
      {
        topic: 'Activities',
        title: 'Lunch Break',
        sponsor: 'Italian Space Agency (ASI)',
        time: '12:30 - 14:00',
        type: 'Lunch Break',
      },
      {
        topic: 'Activities',
        title:
          'Land Productivity Dynamics at high resolution for SIDS and 30m resolution NDVI time series for 2000-2023',
        author: 'Cesar Luis Garcia',
        organization: 'Apacheta / GEO-LDN',
        time: '12:00 - 12:30 (during lunch break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title:
          'OpenEarthMonitor - Cloud-free Landsat mosaics for monitoring land cover time series (1997-2022)',
        author: 'Leandro Parente',
        organization: 'Open Geo Hub',
        time: '12:30 - 13:00 (during lunch break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'OpenEarthMonitor - demo of the tropical crop monitor',
        author: 'Dainius Masiliunas',
        organization: 'Open Geo Hub',
        time: '13:00 - 13:30 (during lunch break)',
        type: 'Interactive demo',
      },
      {
        topic: 'Activities',
        title: 'Open Data and Open Knowledge Workshop (2025)',
        description:
          'Discover, collaborate, and innovate! Join the ODOK Workshop hosted by the GEO Data and Knowledge Working Group to explore, learn, and share EO-based solutions',
        time: '14:00 - 17:30',
        cta: true,
        ctaLink: 'https://earthobservations.org/events/session/odok',
        ctaTagline: 'Learn. Share. Build.',
        ctaLogo: logoDKWG,
        type: 'Special Event',
      },
    ],
  },
  'day-02': {
    title: 'Tuesday, 6 May',
    description: 'Focusing on Ecosystems, Biodiversity and Carbon Management',
    activities: [
      {
        topic: 'Activities',
        title: 'Learn all about the Data Sharing and Data Management Principles',
        author: 'Bente Lilja Bye',
        organization: 'BLB',
        time: '9:00 - 9:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Gross Primary Production for Monitoring Ecosystem Health - Product Demo',
        author: 'Ulf Mallast',
        organization: 'TBC',
        time: '9:30 - 10:00',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'GEO Knowledge Hub demo',
        author: 'Felipe Carlos and Paola de Salvo',
        organization: 'GEO Secretariat',
        time: '10:00 - 10:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Coffee break',
        sponsor: 'Italian Space Agency (ASI)',
        time: '10:30 - 11:00',
        type: 'Coffee break',
      },
      {
        topic: 'Activities',
        title:
          'OpenEarthMonitor - Ensemble Land Cover 30m 2000-2024 product to support international organizations',
        author: 'Rolf Simoes',
        organization: 'Open Geo Hub',
        time: '10:30 - 11:00 (during coffee break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Data Licensing and Software Licensing',
        author: 'Taylor Campbell',
        organization: 'Creative Commons',
        time: '11:00 - 11:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Ensuring Data Quality and Management: a case study at the Davos observatory',
        author: 'Jean-Phillipe Montillet',
        organization: 'PMOD/WRC',
        time: '11:30 - 12:00',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Space for Climate Observatory projects',
        author: 'Frédéric Bretar and Alexia Freigneaux',
        organization: 'SCO',
        time: '12:00 - 12:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Lunch break',
        sponsor: 'Italian Space Agency (ASI)',
        time: '12:30 - 14:00',
        type: 'Lunch break',
      },
      {
        topic: 'Activities',
        title: 'Global Ecosystem Atlas Demo',
        author: 'Felipe Carlos and Paola de Salvo',
        organization: 'GEO Secretariat',
        time: '12:30 - 13:00 (during lunch break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Learn to become a GEO Knowledge Hub provider',
        author: 'Felipe Carlos and Paola de Salvo',
        organization: 'GEO Secretariat',
        time: '13:00 - 13:30 (during lunch break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Data Sharing and Data Management Principles success stories',
        author: 'Bente Lilja Bye',
        organization: 'BLB',
        time: '15:00 - 15:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Coffee break',
        sponsor: 'Italian Space Agency (ASI)',
        time: '15:30 - 16:00',
        type: 'Coffee break',
      },
      {
        topic: 'Activities',
        title: 'OpenEarthMonitor - World carbon flux monitor demo (TBC)',
        author: 'Igor Milosavljevic',
        organization: 'Open Earth Monitor Cyberinfrastructure project',
        time: '15:30 - 16:00 (during coffee break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title:
          'GEO Knowledge Hub and the GEO-LDN country approach on the examples of Colombia and  Ghana',
        author: 'Ingrid Teich and Amos Kabo-Bah',
        organization: 'GEO-LDN',
        time: '16:00 - 16:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'GEO Knowledge Hub for National GEOs - Lets built it together!',
        author: 'Felipe Carlos and Paola de Salvo',
        organization: 'GEO Secretariat',
        time: '16:30 - 17:00',
        type: 'Presentation',
      },
    ],
  },
  'day-03': {
    title: 'Wednesday, 7 May',
    description: 'Focusing on Weather, Hazard and Disaster Resilience',
    activities: [
      {
        topic: 'Activities',
        title: 'Learn all about the Data Sharing and Data Management Principles',
        author: 'Bente Lilja Bye',
        organization: 'BLB',
        time: '9:00 - 9:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'GEO Knowledge Hub',
        author: 'Felipe Carlos and Paola de Salvo',
        organization: 'GEO Secretariat',
        time: '9:30 - 10:00',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Coffee break',
        sponsor: 'Italian Space Agency (ASI)',
        time: '10:00 - 10:30',
        type: 'Coffee break',
      },
      {
        topic: 'Activities',
        title: 'FAO WaPOR open access database',
        author: 'Almutaz Mohammed',
        organization: 'FAO',
        time: '10:00 - 10:45 (during coffee break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Ensuring Data Quality and Management: a case study at the Davos observatory (TBC)',
        author: 'Jean-Phillipe Montillet',
        organization: 'PMOD/WRC',
        time: '10:45 - 11:00',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Data Licensing and Software Licensing',
        author: 'Taylor Campbell and Jan Ainali',
        organization: 'Creative Commons',
        time: '11:00 - 11:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Service for Drought and Water Depletion',
        author: 'Katarzyna Dabrowska-Zielinska',
        organization: 'Creative Commons',
        time: '11:30 - 12:00',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Lunch break',
        sponsor: 'Italian Space Agency (ASI)',
        time: '12:30 - 14:00',
        type: 'Lunch break',
      },
      {
        topic: 'Activities',
        title: 'Towards Digital Twins for Environmental Monitoring',
        author: 'Nataliia Kussul and Andrii Shelestov',
        organization: '',
        time: '12:00 - 12:30 (during lunch break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Learn to become a GEO Knowledge Hub provider',
        author: 'Felipe Carlos and Paola de Salvo',
        organization: 'GEO Secretariat',
        time: '13:00 - 13:30 (during lunch break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title:
          'EOTEC DevNet: Building Regional Communities to Advance Earth Observation Capacity Building for Disaster Risk Reduction',
        author: 'Martyna Stelmaszczuk-Górska',
        organization: 'EOTEC DevNet',
        time: '13:30 - 14:00',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Space for Climate Observatory: presentation of the Littoscope project',
        author: 'Frédéric Bretar and Alexia Freigneaux',
        organization: 'SCO',
        time: '14:00 - 14:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Data Sharing and Data Management Principles success stories',
        author: 'Bente Lilja Bye',
        organization: 'BLB',
        time: '15:00 - 15:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Knowledge generation using Earth Observation for the SDGs',
        author: 'Gregory Giuliani',
        organization: 'University of Geneva',
        time: '16:00 - 16:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'GEO Knowledge Hub for National GEOs - Lets built it together!',
        author: 'Felipe Carlos and Paola de Salvo',
        organization: 'GEO Secretariat',
        time: '16:30 - 17:00',
        type: 'Presentation',
      },
    ],
  },
  'day-04': {
    title: 'Thursday, 8 May',
    description: 'Focusing on Climate, Energy and Urbanization and One Health',
    activities: [
      {
        topic: 'Activities',
        title: 'Learn all about the Data Sharing and Data Management Principles',
        author: 'Bente Lilja Bye',
        organization: 'BLB',
        time: '9:00 - 9:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'GEO Knowledge Hub',
        author: 'Felipe Carlos and Paola de Salvo',
        organization: 'GEO Secretariat',
        time: '9:30 - 10:00',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Coffee break',
        sponsor: 'Italian Space Agency (ASI)',
        time: '10:00 - 10:30',
        type: 'Coffee break',
      },
      {
        topic: 'Activities',
        title:
          'OpenEarthMonitor - Ensemble terrain modelling at 30 m resolution data fusion to support hydrological modeling',
        author: 'Tom Hengl',
        organization: 'Open Geo Hub',
        time: '10:00 - 10:30 (during coffee break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Space for Climate Observatory projects',
        author: 'Frédéric Bretar and Alexia Freigneaux',
        organization: 'SCO',
        time: '10:30 - 11:00',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Data Licensing and Software Licensing',
        author: 'Taylor Campbell and Jan Ainali',
        organization: 'Creative Commons',
        time: '11:00 - 11:30',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'GCOS Climate Data Strategy',
        author: 'Antonio Bombelli',
        organization: 'GCOS',
        time: '11:30 - 12:00',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Lunch break',
        sponsor: 'Italian Space Agency (ASI)',
        time: '12:30 - 14:00',
        type: 'Lunch break',
      },
      {
        topic: 'Activities',
        title: 'Learn to become a GEO Knowledge Hub provider',
        author: 'Felipe Carlos and Paola de Salvo',
        organization: 'GEO Secretariat',
        time: '12:30 - 13:00 (during lunch break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title:
          'libinsitu - What if we transitioned from CSV to NetCDF for large-scale data workflows?',
        author: 'Lionel Menard',
        organization: 'MINES Paris PSL',
        time: '13:00 - 13:30 (during lunch break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Global Heat Resilience Service: co-design over EI services',
        author: 'Martyn Clark',
        organization: 'GEO Secretariat',
        time: '13:30 - 14:00 (during lunch break)',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'Data Sharing and Data Management Principles success stories',
        author: 'Bente Lilja Bye',
        organization: 'BLB',
        time: '14:30 - 15:00',
        type: 'Presentation',
      },
      {
        topic: 'Activities',
        title: 'GEO Knowledge Hub for National GEOs - Lets built it together!',
        author: 'Felipe Carlos and Paola de Salvo',
        organization: 'GEO Secretariat',
        time: '17:00 - 17:30',
        type: 'Presentation',
      },
    ],
  },
  'day-05': {
    title: 'Friday, 9 May',
    description: 'Focusing on Youth',
    activities: [
      {
        topic: 'Activities',
        title: 'GEO Knowledge Hub for youth',
        description:
          'Discover how the GEO Knowledge Hub empowers the next generation of changemakers. This session invites students, early-career professionals, and young innovators to explore open tools, real-world datasets, and collaborative opportunities that support informed action on global challenges.',
        time: '09:00 - 14:00',
        cta: true,
        ctaLink: '#',
        ctaTagline: 'Shape the future',
        ctaLogo: logoDKWG,
        type: 'Special Event',
      },
    ],
  },
};
