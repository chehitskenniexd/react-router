'use strict';

import React from 'react';
import { Link } from 'react-router'

export default class ArtistAlbums extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtistAlbums(this.props.params.artistId);
    }

    render() {
        const { artistAlbums } = this.props;
        return (
            <div>
              <h3>Albums</h3>
              <div className="row">
                {
                  artistAlbums && artistAlbums.map(album => (
                    <div className="col-xs-4" key={ album.id }>
                      <Link className="thumbnail" to={`/albums/${album.id}`} onClick={() => go(album)}>
                        <img src={ album.imageUrl } />
                        <div className="caption">
                          <h5>
                            <span>{ album.name }</span>
                          </h5>
                          <small>{ album.songs.length } songs</small>
                        </div>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
        ) // end render return
    }
}