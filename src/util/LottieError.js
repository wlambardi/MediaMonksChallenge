import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { w } from './Dimensions';
import LottieView from 'lottie-react-native';

const LottieError = props => {
  //const { loading, ...attributes } = props;

  return (
    <View style={styles.container}>
      <LottieView
        loop={true}
        autoPlay={true}
        style={{
          width: w(60),
          height: w(60),
          backgroundColor: 'transparent',
        }}
        source={require('../../assets/lotties/ghost.json')}
      />
      <Text style={styles.title}>Ups..</Text>
      <Text style={styles.message}>
        An error occurred while fetching the job{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
  },
  message: {
    fontSize: 18,
  },
});

export default LottieError;
