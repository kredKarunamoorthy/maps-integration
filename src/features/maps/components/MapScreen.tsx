import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import HomeScreen from '../screens/HomeScreen';
import { IconButton } from 'react-native-paper';

export const MapScreen = () => {
  const [closeMap, setCloseMap] = useState(false);

  if (closeMap) {
    return <HomeScreen />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle = "dark-content" translucent = {true} />
      <MapView style={StyleSheet.absoluteFillObject} />

      <IconButton
        icon="close"
        size={24}
        onPress={() => setCloseMap(true)}
        style={styles.closeButton}
        iconColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    zIndex: 1,
  },
});
