import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TriviaApp = () => (
  <View style={styles.container}>
    <Text>Trivia App!!!</Text>
    <Text>Totes make this better and stuff</Text>
  </View>
);

export default TriviaApp;
