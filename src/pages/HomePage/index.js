import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Stats from './commons/stats';
import Header from './commons/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { addStats } from '../../redux/statsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const test = 'test';

  useEffect(() => {
    dispatch(addStats(test));
  });

  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#9ecbff', '#fff', '#ffee9a']}
        start={{ x: 0.0, y: 0.3 }}
        end={{ x: 0.7, y: 1.0 }}
        locations={[0, 0.45, 0.75]}
        style={styles.linearGradient}
      >
        <Header />
        <Stats />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 15,
  },
});

export default HomePage;
