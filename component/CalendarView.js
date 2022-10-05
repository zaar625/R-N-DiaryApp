import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';

const CalendarView = ({markedDates, selectedDate, onSelectDate}) => {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      theme={{
        selectedDayBackgroundColor: '#009688',
        arrowColor: '#009688',
        dotColor: '#009688',
        todayTextColor: '#009688',
      }}
      onDayPress={day => {
        onSelectDate(day.dateString);
      }}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    boderBottomColor: '#e0e0e0',
  },
});
export default CalendarView;
