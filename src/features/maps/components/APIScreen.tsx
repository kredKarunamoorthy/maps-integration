import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { UseGetAllData } from '../services/eventsApi';
import { ActivityIndicator, Card } from 'react-native-paper';

export default function APIScreen() {
    const { data, isLoading, error } = UseGetAllData();

    if (isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        );
    }
    if (error) {
        return (
            <View style={styles.loading}>
                <Text>Error loading data</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {data.data.map((item: any, index: number) => (
                <Card key={index} style={styles.card}>
                    <Text>{item.title}</Text>
                </Card>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        padding: 5,
        margin: 5,
    },
})