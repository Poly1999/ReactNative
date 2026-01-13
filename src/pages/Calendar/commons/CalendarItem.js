import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../../redux/dateSlice';

const CalendarItem = () => {
  const [selected, setSelected] = useState('');

  const dispatch = useDispatch();

  const setDate = day => {
    setSelected(day.dateString);
    dispatch(changeDate(day.dateString));
  };

  return (
    <SafeAreaView style={styles.calendarBlock}>
      <View style={styles.calendar}>
        <Calendar
          onDayPress={day => {
            setDate(day);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  calendarBlock: {
    padding: 5,
    paddingTop: 15,
    display: 'flex',
    marginBottom: 70,
  },

  calendar: {
    height: 250,
    backgroundColor: 'white',
  },
});

export default CalendarItem;
