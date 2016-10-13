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
    console.log('mounted');
    this.props.fetchArtist(this.props.params.artistId);
  }

  render() {
    const { selectedArtist, go } = this.props;
    console.log(selectedArtist.albums);
    return (
      <div>
        <h3>{selectedArtist.name}</h3>
        <h3>Albums</h3>
        <div className="row">
          {
            (selectedArtist && selectedArtist.albums)
              ? selectedArtist.albums.map(album => {
                return (
                  <div className="col-xs-4" key={album.id}>
                    <Link className="thumbnail" to={`/albums/${album.id}`} onClick={() => go(album)}>
                      <img src={album.imageUrl} />
                      <div className="caption">
                        <h5>
                          <span>{album.name}</span>
                        </h5>
                        <small>{album.songs.length} songs</small>
                      </div>
                    </Link>
                  </div>
                )
              })
              : ''
          }
        </div>
        <SongsContainer songs={selectedArtist.songs} />
      </div>
    )
  }
}