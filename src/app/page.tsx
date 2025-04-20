/**
 * This file is part of DKWG-Events.
 *
 * Copyright (C) 2025 GEO Data and Knowledge Working group members.
 *
 * DKWG-Events is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import { EventHero, GEOFocusAreaCard } from '../components';

import FoodSecurityImage from '@public/images/focus-areas/agriculture-food-security/agriculture-food-security.svg';
import WaterLandSustainability from '@public/images/focus-areas/water-land-sustainability/water-land-sustainability.svg';

import EcosystemCarbonManagement from '@public/images/focus-areas/ecosystems-biodiversity-carbon/ecosystems-biodiversity-carbon.svg';
import WeatherHazardDisasterResilience from '@public/images/focus-areas/weather-hazard-disaster/weather-hazard-disaster.svg';
import ClimateEnergy from '@public/images/focus-areas/climate-energy-urban/climate-energy-urban.svg';
import OneHealth from '@public/images/focus-areas/one-health/one-health.svg';
import CommunityImpact from '@public/images/focus-areas/community-impact/community.svg';

export default function BoothPage() {
  return (
    <>
      <EventHero
        label={'GEO Global Forum'}
        title={'GEO Data and Knowledge WG booth'}
        description={
          'Explore the power of EO-based applications through live demos, expert insights, and hands-on tech.'
        }
        booth={true}
        odok={true}
      />

      <section className="mt-5 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          {/* Resources Grid */}
          <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <GEOFocusAreaCard
              image={[FoodSecurityImage, WaterLandSustainability]}
              imageAlt={'DKWG Booth icon - Day 1'}
              title={'Day 1 - Agriculture and Food Security / Water and Land Sustainability'}
              href={'/booth/day-01'}
              external={false}
              imageClass={'mb-6 h-36 w-36'}
            />

            <GEOFocusAreaCard
              image={EcosystemCarbonManagement}
              imageAlt={'DKWG Booth icon - Day 2'}
              title={'Day 2 - Ecosystems, Biodiversity and Carbon Management'}
              href={'/booth/day-02'}
              external={false}
              imageClass={'mb-6 h-36 w-36'}
            />

            <GEOFocusAreaCard
              image={WeatherHazardDisasterResilience}
              imageAlt={'DKWG Booth icon - Day 3'}
              title={'Day 3 - Weather, Hazard and Disaster Resilience'}
              href={'/booth/day-03'}
              external={false}
              imageClass={'mb-6 h-36 w-36'}
            />

            <GEOFocusAreaCard
              image={[ClimateEnergy, OneHealth]}
              imageAlt={'DKWG Booth icon - Day 4'}
              title={'Day 4 - Climate, Energy and Urbanization / One Health'}
              href={'/booth/day-04'}
              external={false}
              imageClass={'mb-6 h-36 w-36'}
            />

            <GEOFocusAreaCard
              image={CommunityImpact}
              imageAlt={'DKWG Booth icon - Day 5'}
              title={'Day 5 - Youth'}
              href={'/booth/day-05'}
              external={false}
              imageClass={'mb-6 h-36 w-36'}
            />
          </div>
        </div>
      </section>
    </>
  );
}
