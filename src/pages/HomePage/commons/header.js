import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = ({ dayNumber }) => {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  const monthNames = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ];

  const nameMonth = monthNames[month];

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
        <Text style={styles.titleBig}>
          Загальні бойові втрати{'\n'}російського окупанта
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.dateBlock}>
          <Text style={styles.label}>Дата</Text>
          <Text style={styles.data}>
            {day} {nameMonth}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.dayBlock}>
          <Text style={styles.label}>Війна триває</Text>
          {dayNumber ? (
            <Text style={styles.day}>{dayNumber} днів</Text>
          ) : (
            <Text style={styles.day}>Завантаження...</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  titleContainer: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#0057B7', // Синій колір прапора України
  },

  title: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  titleBig: {
    fontSize: 22,
    color: '#000',
    fontWeight: '900',
    lineHeight: 28,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  dateBlock: {
    flex: 1,
    alignItems: 'center',
  },

  dayBlock: {
    flex: 1,
    alignItems: 'center',
  },

  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },

  label: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
    marginBottom: 4,
    textTransform: 'uppercase',
  },

  data: {
    fontSize: 18,
    color: '#0057B7', // Синій колір
    fontWeight: '700',
  },

  day: {
    fontSize: 18,
    color: '#FFD700', // Жовтий колір
    fontWeight: '700',
  },
});

export default Header;
