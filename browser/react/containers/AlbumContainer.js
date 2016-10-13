'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { fetchAlbum } from '../action-creators/albums';

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

const mapDispatchToProps = dispatch => ({
  fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);