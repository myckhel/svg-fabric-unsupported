import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {CheckedCircle} from './icons';

const App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <Text>My SVG</Text>
      <CheckedCircle width={300} height={400} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;
