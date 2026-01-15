import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const StatsItemDay = ({ statsAll, statsDay, terms }) => {
  return (
    <View style={styles.statsBlock}>
      <SvgUri width={100} height={50} uri={terms.icon} />
      <View style={styles.statsInfo}>
        <View style={styles.statsNumbers}>
          <Text style={styles.statsAll}>{statsAll}</Text>
          <Text style={styles.statsDay}>({statsDay})</Text>
        </View>
        <Text style={styles.statsText}>{terms.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '47%',
    minHeight: 120,
  },

  statsAll: {
    fontSize: 16,
    color: 'black',
    fontWeight: '900',
  },

  statsInfo: {
    marginTop: 8,
    alignItems: 'center',
  },

  statsDay: {
    fontSize: 13,
    color: '#666',
    marginLeft: 5,
    fontWeight: '500',
  },

  statsText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    marginTop: 4,
  },

  statsNumbers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
});

export default StatsItemDay;
