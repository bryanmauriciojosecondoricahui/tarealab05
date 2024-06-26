import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StackScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '20%',
  },
});

export default StackScreen;
