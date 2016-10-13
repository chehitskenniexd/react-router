'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import AlbumsContainer from '../containers/AlbumsContainer';
import { Link } from 'react-router';

export default class Artist extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtist(this.props.params.artistId);
  }

  render() {
    const { artist, selectedArtist, children } = this.props;
    return (
      <div>
        <h3>{selectedArtist.name}</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
        </ul>
        {children && React.cloneElement(children, { selectedArtist })}
      </div>
    )
  }
}