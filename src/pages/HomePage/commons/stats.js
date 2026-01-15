import React from 'react';
import { ScrollView, Text } from 'react-native';
import StatsItem from './statsItem';

import Footer from '../../../commons/footer/footer';

const terms = {
  personnel_units: {
    title: 'Personnel units',
    icon: 'https://russianwarship.rip/images/icons/icon-people.svg',
  },
  tanks: {
    title: 'Tanks',
    icon: 'https://russianwarship.rip/images/icons/icon-tank.svg',
  },
  armoured_fighting_vehicles: {
    title: 'Armoured fighting vehicles',
    icon: 'https://russianwarship.rip/images/icons/icon-bbm.svg',
  },
  artillery_systems: {
    title: 'Artillery systems',
    icon: 'https://russianwarship.rip/images/icons/icon-art.svg',
  },
  mlrs: {
    title: 'Multiple Launch Rocket System',
    icon: 'https://russianwarship.rip/images/icons/icon-rszv.svg',
  },
  aa_warfare_systems: {
    title: 'Anti-aircraft warfare systems',
    icon: 'https://russianwarship.rip/images/icons/icon-ppo.svg',
  },
  planes: {
    title: 'Planes',
    icon: 'https://russianwarship.rip/images/icons/icon-plane.svg',
  },
  helicopters: {
    title: 'Helicopters',
    icon: 'https://russianwarship.rip/images/icons/icon-helicopter.svg',
  },
  vehicles_fuel_tanks: {
    title: 'Vehicles and fuel tanks',
    icon: 'https://russianwarship.rip/images/icons/icon-auto.svg',
  },
  warships_cutters: {
    title: 'Warships and cutters',
    icon: 'https://russianwarship.rip/images/icons/icon-ship.svg',
  },
  cruise_missiles: {
    title: 'Cruise missiles',
    icon: 'https://russianwarship.rip/images/icons/icon-rocket.svg',
  },
  uav_systems: {
    title: 'Unmanned aerial vehicle systems',
    icon: 'https://russianwarship.rip/images/icons/icon-bpla.svg',
  },
  special_military_equip: {
    title: 'Special military equipment',
    icon: 'https://russianwarship.rip/images/icons/icon-special.svg',
  },
  atgm_srbm_systems: {
    title: 'Anti-tank guided missile and short-range ballistic missile systems',
    icon: 'https://russianwarship.rip/images/icons/icon-trk.svg',
  },
  submarines: {
    title: 'Submarines',
    icon: 'https://russianwarship.rip/images/icons/icon-submarine.svg',
  },
};

const Stats = ({ statsData }) => {
  if (!statsData) {
    return <Text>Немає даних</Text>;
  }

  const { stats, increase } = statsData;

  return (
    <ScrollView>
      <StatsItem
        statsAll={stats.personnel_units}
        statsDay={increase.personnel_units}
        terms={terms.personnel_units}
      />
      <StatsItem
        statsAll={stats.tanks}
        statsDay={increase.tanks}
        terms={terms.tanks}
      />
      <StatsItem
        statsAll={stats.armoured_fighting_vehicles}
        statsDay={increase.armoured_fighting_vehicles}
        terms={terms.armoured_fighting_vehicles}
      />
      <StatsItem
        statsAll={stats.artillery_systems}
        statsDay={increase.artillery_systems}
        terms={terms.artillery_systems}
      />
      <StatsItem
        statsAll={stats.mlrs}
        statsDay={increase.mlrs}
        terms={terms.mlrs}
      />
      <StatsItem
        statsAll={stats.aa_warfare_systems}
        statsDay={increase.aa_warfare_systems}
        terms={terms.aa_warfare_systems}
      />
      <StatsItem
        statsAll={stats.planes}
        statsDay={increase.planes}
        terms={terms.planes}
      />
      <StatsItem
        statsAll={stats.helicopters}
        statsDay={increase.helicopters}
        terms={terms.helicopters}
      />
      <StatsItem
        statsAll={stats.vehicles_fuel_tanks}
        statsDay={increase.vehicles_fuel_tanks}
        terms={terms.vehicles_fuel_tanks}
      />
      <StatsItem
        statsAll={stats.warships_cutters}
        statsDay={increase.warships_cutters}
        terms={terms.warships_cutters}
      />
      <StatsItem
        statsAll={stats.cruise_missiles}
        statsDay={increase.cruise_missiles}
        terms={terms.cruise_missiles}
      />
      <StatsItem
        statsAll={stats.uav_systems}
        statsDay={increase.uav_systems}
        terms={terms.uav_systems}
      />
      <StatsItem
        statsAll={stats.special_military_equip}
        statsDay={increase.special_military_equip}
        terms={terms.special_military_equip}
      />
      <StatsItem
        statsAll={stats.atgm_srbm_systems}
        statsDay={increase.atgm_srbm_systems}
        terms={terms.atgm_srbm_systems}
      />
      <StatsItem
        statsAll={stats.submarines}
        statsDay={increase.submarines}
        terms={terms.submarines}
      />

      <Footer />
    </ScrollView>
  );
};

export default Stats;
