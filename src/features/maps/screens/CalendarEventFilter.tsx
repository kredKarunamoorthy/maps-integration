import React, { useState } from 'react'
import { ScrollView, } from 'react-native';
import Calendar from '../components/Calendar';
import Card from '../components/Card';

export default function CalendarEventFilter() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <ScrollView>
      <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <Card selectedDate={selectedDate} />
    </ScrollView>
  )
}