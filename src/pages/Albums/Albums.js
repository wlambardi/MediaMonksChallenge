import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { pagesNames } from '../../navigation';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveAlbums } from '../../store/actions/albums';
import { ListItem } from 'react-native-elements';
import Loader from '../../util/Loader';
import LottieError from '../../util/LottieError';
import styles from './style';

export const Albums = props => {
  const dataSource = useSelector(state => state);
  const dispatch = useDispatch();

  console.log('dataSource', JSON.stringify(dataSource.albums.loadingAlbums));

  useEffect(() => {
    dispatch(retrieveAlbums());
    //console.log('props',Albums.albums);
  }, [dispatch]);

  showPhotos = (id, title) => {
    Navigation.push(props.componentId, {
      component: {
        name: pagesNames.PHOTOS,
        options: {
          statusBar: {
            style: 'light',
          },
          topBar: {
            title: {
              text: 'Album',
              fontSize: 16,
              color: '#161616',
            },
            subtitle: {
              text: (title.length>20 ? `${title.substr(0,20)} ...` : title),
              fontSize: 14,
              color: '#7d7d7d',
            },
            backButton: {
              title: 'Back',
              color: 'black',
            },
            hideOnScroll: false,
            background: {
              color: '#fbfbfb',
            },
            statusBarStyle: 'light',
          },
        },
        passProps: {
          item: id,
          title: title,
        },
      },
    });
  };

  if (dataSource.albums.error) {
    return <LottieError />;
  } else {
    if (dataSource.albums.loadingAlbums) {
      return <Loader />;
    } else {
      return (
        <ScrollView>
          {dataSource.albums.albums.map((l, i) => (
            <ListItem
              onPress={() => this.showPhotos(l.id, l.title)}
              titleStyle={styles.albumTitle}
              key={i}
              title={l.title}
              leftIcon={{
                name: 'image',
                type: 'font-awesome',
                color: '#e3e3e3',
                size: 35,
              }}
              bottomDivider
              rightIcon={{
                name: 'chevron-right',
                type: 'font-awesome',
                color: '#e3e3e3',
                size: 25,
              }}
            />
          ))}
        </ScrollView>
      );
    }
  }
};
