import React from 'react';
import { StyleSheet, View } from 'react-native';
import { w } from './Dimensions';
import LottieView from 'lottie-react-native';

const Loader = props => {
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
        source={require('../../assets/lotties/loading3.json')}
      />
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
});

export default Loader;
