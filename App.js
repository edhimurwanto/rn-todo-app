/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  YellowBox,
} from 'react-native';
import TodoAppScreen from './src/screens/TodoAppScreen';

YellowBox.ignoreWarnings(['Require cycle:']);

const App = () => {
  return (
    <View style={styles.container}>
      <TodoAppScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
});

export default App;
