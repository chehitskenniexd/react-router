'use strict';

import { connect } from 'react-redux';
import Albums from '../components/Albums';
import { fetchAndGoToAlbum } from '../action-creators/albums';

const mapStateToProps = ({ albums }, ownProps) => ({
  albums : ownProps.selectedArtist ? ownProps.selectedArtist.albums : albums
});

const mapDispatchToProps = dispatch => ({
  go: album => dispatch(fetchAndGoToAlbum(album))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);