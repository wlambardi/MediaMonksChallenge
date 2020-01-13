import axios from 'axios';
import ENDPOINTS from './endpoints';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAlbums = () =>
  apiInstance
    .request({
      url: ENDPOINTS.ALBUMS,
      method: 'GET',
      params: { timestamp: Date.now() },
    })
    .then(response => {
      //console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(error => {
      return Promise.reject(error.message);
    });

export const getPhotos = id =>
  apiInstance
    .request({
      url: ENDPOINTS.PHOTOS,
      method: 'GET',
      params: { timestamp: Date.now(), albumId: id },
    })
    .then(response => {
      console.log('filtro id', id);
      return response.data;
    })
    .catch(error => {
      return Promise.reject(error.message);
    });
