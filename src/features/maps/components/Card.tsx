import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { events } from '../events/DummyData';

type Props = {
    selectedDate: string;
};

export default function CalendarScreen({ selectedDate }: Props) {
    const filteredEvents =
        selectedDate === ''
            ? events
            : events.filter(event => event.date === selectedDate);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.cardContainer}>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(event => (
                        <Card key={event.id} style={styles.card}>
                            {event.image && <Card.Cover source={event.image} />}

                            <Card.Title title={event.title} />
                            <Card.Content>
                                <Text>{event.date}</Text>
                                <Text>{event.time}</Text>
                                <Text>{event.location}</Text>
                                {/* <Text>{event.description}</Text> */}
                            </Card.Content>
                        </Card>
                    ))
                ) : (
                    <View style={styles.emptyState}>
                        <Text style={styles.noEventText}>No events on this day.</Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '47%',
        padding: 5,
        margin: 5,
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 250,
    },
    noEventText: {
        flex: 1,
        textAlign: 'center',
        marginTop: 20,
        color: '#999',
        alignItems: 'center',
    },
});
