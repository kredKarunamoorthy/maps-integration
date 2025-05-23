import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { UseGetAllData } from '../services/eventsApi';
import { ActivityIndicator, Card, Text } from 'react-native-paper';

export default function APIScreen() {
    const { data, isLoading, error } = UseGetAllData();

    if (isLoading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        );
    }
    console.log("API Key");
    if (error) {
        return (
            <View style={styles.loading}>
                <Text>Error loading data</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.cardContainer}>
                {data.data.map((item: any, index: number) => (
                    <Card key={index} style={styles.card}>
                        <Card.Cover source={{ uri: item.images.webp.image_url }} />
                        <Card.Content>
                            <Text>{item.title}</Text>
                            <Text>{item.title_japanese}</Text>
                        </Card.Content>
                    </Card>
                ))}
            </View>
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
})