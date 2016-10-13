'use strict';

import { connect } from 'react-redux';
import Artist from '../components/Artist';
import { fetchAndGoToAlbum } from '../action-creators/albums';
import { fetchArtist } from '../action-creators/artists';

const mapStateToProps = ({ selectedArtist }) => ({
  selectedArtist
});

const mapDispatchToProps = dispatch => ({
  go: album => dispatch(fetchAndGoToAlbum(album)),
  fetchArtist: artistId => dispatch(fetchArtist(artistId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);