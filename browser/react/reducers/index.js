'use strict';

import { combineReducers } from 'redux';

import artists from './artists';
import albums from './albums';
import currentSong from './currentSong';
import currentSongList from './currentSongList';
import isPlaying from './isPlaying';
import progress from './progress';
import location from './location';
import selectedAlbum from './selectedAlbum';
import selectedArtist from './selectedArtist';
import artistAlbums from './artistAlbums';

const rootReducer = combineReducers({
  albums,
  artistAlbums,
  artists,
  currentSong,
  currentSongList,
  isPlaying,
  location,
  progress,
  selectedAlbum,
  selectedArtist
});

export default rootReducer;