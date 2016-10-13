'use strict';

import { RECEIVE_ARTIST_ALBUMS } from '../constants';
import { convertAlbums } from '../converters';

const initialArtistAlbums = [];

export default function artistAlbums (state = initialArtistAlbums, action) {
  switch (action.type) {
    case RECEIVE_ARTIST_ALBUMS: return action.artistAlbums.map(convertAlbums);
    default: return state;
  }
}