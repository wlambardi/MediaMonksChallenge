/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { pagesNames, registerPages } from './src/navigation';

const store = configureStore();

registerPages(Provider, store);

Navigation.events().registerAppLaunchedListener(() =>
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: pagesNames.PHOTOS,
            },
          },
          {
            component: {
              name: pagesNames.ALBUMS,
              options: {
                topBar: {
                  background: {
                    color: '#fbfbfb'
                  },
                  statusBarStyle: 'light',
                  title: {
                    text: 'MediaMonksChallenge',
                    fontSize: 16,
                    color: '#000',
                    fontFamily: 'Helvetica',
                    fontWeight: 'regular', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
                    alignment: 'center'
                  },
                  subtitle: {
                    text: 'Albums',
                    fontSize: 14,
                    color: '444444',
                    fontFamily: 'Helvetica',
                    fontWeight: 'regular', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
                    alignment: 'center'
                  },
                  backButton: {
                    visible: false
                  },
                }
              }
            },
          },
        ],
      },
    },
  }),
);
