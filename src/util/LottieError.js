import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { w, totalSize } from './Dimensions';
import LottieView from 'lottie-react-native';

const LottieError = props => {
  //const { loading, ...attributes } = props;

  return (
    <View style={styles.container}>
      <LottieView
        loop={true}
        autoPlay={true}
        style={{
          width: w(80),
          height: w(80),
          backgroundColor: 'transparent',
        }}
        source={require('../../assets/lotties/ghost.json')}
      />
      <Text style={styles.title}>Sorry, something went wrong.</Text>
      <Text style={styles.message}>
        We're working on it and we'll get it fixed as soon as we can.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    paddingTop:w(10),
    fontSize: totalSize(2.5),
    fontWeight:'800',
    color:'#161616',
    textAlign:'center',
  },
  message: {
    fontSize: totalSize(2),
    padding:w(5),
    color:'#161616',
    textAlign:'center',
  },
});

export default LottieError;
