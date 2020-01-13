/* @flow */

import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class AsyncImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  render() {
    const { style, source } = this.props;

    return (
      <View style={style}>
        <Image
          source={source}
          resizeMode={'contain'}
          style={[
            style,
            {
              position: 'absolute',
              resizeMode: 'contain',
            },
          ]}
          onLoad={this._onLoad}
        />

        {!this.state.loaded && (
          <View
            style={[
              style,
              {
                backgroundColor: '#fff',
                position: 'absolute',
                borderWidth: 1,
                borderColor: '#e3e3e3',
              },
            ]}>
            <Image
              style={style}
              source={require('../../assets/placeholder.jpg')}
            />
          </View>
        )}
      </View>
    );
  }

  _onLoad = () => {
    this.setState(() => ({ loaded: true }));
  };
}
