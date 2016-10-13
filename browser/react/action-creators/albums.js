'use strict';

import { RECEIVE_ALBUMS, RECEIVE_ALBUM, RECEIVE_ARTIST_ALBUMS } from '../constants';
import { switchLocation } from './location';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveArtistAlbums = artistAlbums => ({
  type: RECEIVE_ARTIST_ALBUMS,
  artistAlbums
})

export const fetchAndGoToAlbum = album =>
  dispatch =>
    fetch(`/api/albums/${album.id}`)
      .then(res => res.json())
      .then(album => {
        dispatch(receiveAlbum(album));
        dispatch(switchLocation('album'));
      });

export const fetchAlbum = id =>
  dispatch =>
    fetch(`/api/albums/${id}`)
      .then(res => res.json())
      .then(album => {
        dispatch(receiveAlbum(album));
      });

export const fetchArtistAlbums = id =>
  dispatch => 
    fetch(`/api/artists/${id}/albums`)
    .then(res => res.json())
    .then(albums => dispatch(receiveArtistAlbums(albums)))
    .catch(err => console.log(err));