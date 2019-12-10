import { Navigation } from 'react-native-navigation';
import keyMirror from 'keymirror';
import Albums from '../pages/Albums';
import Photos from '../pages/Photos';

export const pagesNames = keyMirror({
  ALBUMS: null,
  PHOTOS: null,
});

const routes = [
  { name: pagesNames.ALBUMS, componentClassFunc: Albums },
  { name: pagesNames.PHOTOS, componentClassFunc: Photos },
];

export const registerPages = (provider, store) =>
  routes.forEach(page =>
    Navigation.registerComponentWithRedux(
      page.name,
      () => page.componentClassFunc,
      provider,
      store,
    ),
  );
