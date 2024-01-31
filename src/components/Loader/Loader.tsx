import {AppTheme} from '@upreal/config/cssConfig';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = () => {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size={70} color={AppTheme?.buttonPrimaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 150,
    height: 150,
    borderRadius: 15,
  },
});

export default Loader;
