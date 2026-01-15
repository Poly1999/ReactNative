import React, { useEffect } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Stats from './commons/stats';
import Header from './commons/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setStats, setError } from '../../redux/statsSlice';
import { statistics } from '../../api/index.js';

const HomePage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.stats);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const result = await statistics();
        dispatch(setStats(result.data));
      } catch (err) {
        dispatch(setError('Не вдалося завантажити дані'));
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color="#9ecbff" />
        <Text>Завантаження...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.error}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#9ecbff', '#fff', '#ffee9a']}
        start={{ x: 0.0, y: 0.3 }}
        end={{ x: 0.7, y: 1.0 }}
        locations={[0, 0.45, 0.75]}
        style={styles.linearGradient}
      >
        <Header dayNumber={data?.day} />
        <Stats statsData={data} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 15,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default HomePage;
