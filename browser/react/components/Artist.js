'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import { Link } from 'react'

export default ({ selectedArtist, go }) => (
  <div>
    <h3>{ selectedArtist.name }</h3>
    <h3>Albums</h3>
    <div className="row">
      {
        selectedArtist.albums.map(album => (
          <div className="col-xs-4" key={album.id}>
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
    <SongsContainer songs={selectedArtist.songs} />
  </div>
);