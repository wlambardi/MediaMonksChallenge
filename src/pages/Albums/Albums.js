import React, { useEffect, useCallback } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { pagesNames } from '../../navigation';
import { useDispatch } from 'react-redux';
import { retrieveAlbums } from '../../store/actions/albums';

export const Albums = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveAlbums());
  }, [dispatch]);

  const navigateToPhotos = useCallback(
    () =>
      Navigation.push(props.componentId, {
        component: {
          name: pagesNames.PHOTOS,
        },
      }),
    [props.componentId],
  );

  return (
    <SafeAreaView>
      <Text>Albums</Text>
    </SafeAreaView>
  );
};
