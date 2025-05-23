import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export const MapScreen = () => {

  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFillObject} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
