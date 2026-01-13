import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <SafeAreaView style={styles.footer}>
      <Text style={styles.footerTitle}>Бажаєш збільшити статистику?</Text>
      <View style={styles.donate}>
        <FontAwesomeIcon icon={faArrowLeft} color={'black'} size={20} />
        <View style={styles.donateItem}>
          <FontAwesomeIcon icon={faHome} color={'black'} size={20} />
          <Text style={styles.donateName}>Повернись живим</Text>
        </View>
        <FontAwesomeIcon icon={faArrowRight} color={'black'} size={20} />
      </View>
      <View style={styles.contacts}>
        <Text style={styles.footerName}>Kipishna baba</Text>
        <FontAwesomeIcon icon={faHome} color={'black'} size={20} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
  },
  footerTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '900',
    padding: 10,
    textAlign: 'center',
  },
  footerName: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    padding: 10,
  },

  donate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  donateItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  donateName: {
    fontSize: 20,
    color: 'black',
    fontWeight: '900',
    padding: 10,
    textAlign: 'center',
  },

  contacts: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Footer;
