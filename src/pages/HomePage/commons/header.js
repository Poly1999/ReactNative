import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const nameMonth = monthNames[month];

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
      <Text style={styles.titleBig}>
        Загальні бойові втрати російського окупанта
      </Text>
      <View style={styles.blockData}>
        <Text style={styles.data}>
          {day}
          {nameMonth}
        </Text>
        <Text style={styles.day}>1416-й день війни</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  titleBig: {
    fontSize: 24,
    color: 'black',
    fontWeight: '900',
  },

  blockData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  day: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },

  data: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
});

export default Header;
