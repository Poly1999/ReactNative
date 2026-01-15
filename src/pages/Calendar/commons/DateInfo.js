import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import StatsItemDay from './statsItemDay';
import { useSelector } from 'react-redux';
import { statisticsDate } from '../../../api/index.js';

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

const DayInfo = () => {
  const selectedDate = useSelector(state => state.date.selectedDate);
  const [dayData, setDayData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      const fetchDateData = async () => {
        setLoading(true);
        setError(null);
        try {
          const result = await statisticsDate(selectedDate);
          setDayData(result.data);
        } catch (err) {
          console.error('Error fetching date data:', err);
          setError('Не вдалося завантажити дані за цю дату');
        } finally {
          setLoading(false);
        }
      };

      fetchDateData();
    }
  }, [selectedDate]);

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#9ecbff" />
        <Text style={styles.loadingText}>Завантаження...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!dayData) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.infoText}>Оберіть дату в календарі</Text>
      </View>
    );
  }

  const { stats, increase } = dayData;

  return (
    <View style={styles.dayInfoBlock}>
      <Text style={styles.dateTitle}>
        Дата: {dayData.date} (День {dayData.day})
      </Text>

      <StatsItemDay
        statsAll={stats.personnel_units}
        statsDay={increase.personnel_units}
        terms={terms.personnel_units}
      />
      <StatsItemDay
        statsAll={stats.tanks}
        statsDay={increase.tanks}
        terms={terms.tanks}
      />
      <StatsItemDay
        statsAll={stats.armoured_fighting_vehicles}
        statsDay={increase.armoured_fighting_vehicles}
        terms={terms.armoured_fighting_vehicles}
      />
      <StatsItemDay
        statsAll={stats.artillery_systems}
        statsDay={increase.artillery_systems}
        terms={terms.artillery_systems}
      />
      <StatsItemDay
        statsAll={stats.mlrs}
        statsDay={increase.mlrs}
        terms={terms.mlrs}
      />
      <StatsItemDay
        statsAll={stats.aa_warfare_systems}
        statsDay={increase.aa_warfare_systems}
        terms={terms.aa_warfare_systems}
      />
      <StatsItemDay
        statsAll={stats.planes}
        statsDay={increase.planes}
        terms={terms.planes}
      />
      <StatsItemDay
        statsAll={stats.helicopters}
        statsDay={increase.helicopters}
        terms={terms.helicopters}
      />
      <StatsItemDay
        statsAll={stats.vehicles_fuel_tanks}
        statsDay={increase.vehicles_fuel_tanks}
        terms={terms.vehicles_fuel_tanks}
      />
      <StatsItemDay
        statsAll={stats.warships_cutters}
        statsDay={increase.warships_cutters}
        terms={terms.warships_cutters}
      />
      <StatsItemDay
        statsAll={stats.cruise_missiles}
        statsDay={increase.cruise_missiles}
        terms={terms.cruise_missiles}
      />
      <StatsItemDay
        statsAll={stats.uav_systems}
        statsDay={increase.uav_systems}
        terms={terms.uav_systems}
      />
      <StatsItemDay
        statsAll={stats.special_military_equip}
        statsDay={increase.special_military_equip}
        terms={terms.special_military_equip}
      />
      <StatsItemDay
        statsAll={stats.atgm_srbm_systems}
        statsDay={increase.atgm_srbm_systems}
        terms={terms.atgm_srbm_systems}
      />
      <StatsItemDay
        statsAll={stats.submarines}
        statsDay={increase.submarines}
        terms={terms.submarines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dayInfoBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    minHeight: 200,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  dateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default DayInfo;
