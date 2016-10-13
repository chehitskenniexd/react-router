'use strict';

import { connect } from 'react-redux';
import Songs from '../components/Songs';
import { startSong, pause, play } from '../action-creators/player';

// songs from ownProps
const mapStateToProps = ({ isPlaying, currentSong }, ownProps) => ({
  isPlaying,
  currentSong,
  songs: ownProps.selectedArtist ? ownProps.selectedArtist.songs : ownProps.songs
});

const mapDispatchToProps = dispatch => ({
  toggle (selectedSong, selectedSongList, currentSong, isPlaying) {
    if (selectedSong.id !== currentSong.id)
      dispatch(startSong(selectedSong, selectedSongList));
    else if (isPlaying)
      dispatch(pause());
    else 
      dispatch(play());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);