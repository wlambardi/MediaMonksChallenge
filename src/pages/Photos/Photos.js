import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useSelector, useDispatch } from 'react-redux';
import { retrievePhotos } from '../../store/actions/photos';
import Lightbox from 'react-native-lightbox';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import { w, h, totalSize } from '../../util/Dimensions';
import Loader from '../../util/Loader';
import LottieError from '../../util/LottieError';
import AsyncImage from '../../util/AsyncImage';
import styles from './style';

export const Photos = props => {
  const dataSource = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    Navigation.events().registerCommandListener((name, params) => {
      console.log(
        params.layout.data.passProps.item,
        params.layout.data.passProps.title,
      );
      dispatch(retrievePhotos(params.layout.data.passProps.item));
    });
  }, [dispatch]);

  if (dataSource.albums.error) {
    return <LottieError />;
  } else {
    if (dataSource.photos.loadingPhotos) {
      return <Loader />;
    } else {
      return (
        <View style={styles.mainContainer}>
          <FlatGrid
            itemDimension={w(100) / 3}
            items={dataSource.photos.photos}
            style={styles.gridView}
            spacing={w(0)}
            renderItem={({ item, index }) => (
              <View style={styles.itemContainer}>
                <Lightbox
                  underlayColor="white"
                  renderContent={() => (
                    <View style={{ flex: 1 }}>
                      <Image
                        source={{ uri: item.url }}
                        style={styles.contain}
                        resizeMode="contain"
                      />
                      <View
                        style={{
                          position: 'absolute',
                          alignItems: 'center',
                          left: 0,
                          right: 0,
                          bottom: h(5),
                        }}>
                        <Text style={styles.titleBox}>{item.title}</Text>
                      </View>
                    </View>
                  )}>
                  <AsyncImage
                    style={styles.avatar}
                    resizeMode="contain"
                    source={{
                      uri: item.thumbnailUrl,
                    }}
                    placeholderColor="#b3e5fc"
                  />
                </Lightbox>
              </View>
            )}
          />
        </View>
      );
    }
  }
};
