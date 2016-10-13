'use strict';

import { connect } from 'react-redux';
import ArtistAlbums from '../components/ArtistAlbums';
import { fetchArtistAlbums } from '../action-creators/albums';

const mapStateToProps = ({ artistAlbums }) => ({
    artistAlbums
});

const mapDispatchToProps = dispatch => ({
    fetchArtistAlbums: artistAlbums => dispatch(fetchArtistAlbums(artistAlbums))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistAlbums);