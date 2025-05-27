import React, { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';

import { HomeScreenNavigationProp } from '../../../navigation/types';

type Props = {
    navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" translucent={true} />
            <View style={styles.button}>
                <Button icon="map" mode="text" onPress={() => navigation.navigate("MapScreen")}>
                    Map Integration
                </Button>
            </View>
            <View>
                <Button icon="api" mode="text" onPress={() => navigation.navigate("APIScreen")}>
                    React Query
                </Button>
            </View>
            <View>
                <Button icon="calendar" mode="text" onPress={() => navigation.navigate("CalendarScreen")}>
                    Calendar Filter
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingBottom: 5,
        borderRadius: "25px",
    },
});
