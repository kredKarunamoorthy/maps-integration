import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { MapScreen } from '../components/MapScreen';

export default function HomeScreen() {
    const [showMap, setShowMap] = useState(false);

    function mapShowHandler() {
        setShowMap(true);
    }

    if(showMap) {
        return <MapScreen />;
    }

  return (
    <View style={styles.container}>
      <StatusBar barStyle = "dark-content" translucent = {true} />
      <Text style={styles.title}>Maps</Text>
      <TouchableOpacity style={styles.mapButton} onPress={mapShowHandler}>
        <Text style={styles.mapButtonText}>Map</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  mapButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    elevation: 4,
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
