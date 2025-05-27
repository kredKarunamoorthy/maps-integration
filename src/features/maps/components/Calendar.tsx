import React, { useState } from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { IconButton, Text, useTheme, Portal } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';

type Props = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

export default function CalendarPicker({ selectedDate, onDateChange }: Props) {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const onSelectDate = (day: any) => {
    onDateChange(day.dateString);
    setVisible(false);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <IconButton
            icon="calendar"
            size={24}
            onPress={() => setVisible(true)}
            accessibilityLabel="Open calendar"
          />

          <Portal>
            <Modal
              visible={visible}
              transparent
              animationType="fade"
              onRequestClose={() => setVisible(false)}
            >
              <TouchableWithoutFeedback onPress={() => setVisible(false)}>
                <View style={styles.backdrop}>
                  <TouchableWithoutFeedback>
                    <View style={styles.calendarWrapper}>
                      <Calendar
                        onDayPress={onSelectDate}
                        markedDates={{
                          [selectedDate]: { selected: true, selectedColor: theme.colors.primary },
                        }}
                        theme={{
                          selectedDayBackgroundColor: theme.colors.primary,
                          todayTextColor: theme.colors.primary,
                          arrowColor: theme.colors.primary,
                        }}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </Portal>

        </View>
        <View style={styles.wrapper}>
          <IconButton
            icon="close"
            size={24}
            onPress={() => onDateChange('')}
            accessibilityLabel="Reset the Card Data"
          />
        </View>
      </View>
      <View style={styles.SelectedDate}>
      {selectedDate ? <Text>Selected Date: {selectedDate}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  wrapper: {
    padding: 8,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarWrapper: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 8,
    elevation: 4,
    width: 320,
  },
  SelectedDate: {
    flex: 1,
    alignItems: 'center',
  },
});
