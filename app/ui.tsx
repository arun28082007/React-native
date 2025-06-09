import React from 'react';
import { StyleSheet } from 'react-native';
import Calculator from './calculator';

export default function HomeScreen() {
  return (
    <Calculator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
});
