import React from 'react';

import './thumbnail.scss';

export default function Thumbnail({ props }) {
  return (
    <a href={props.link}>
      <img
        className="thumbnailImage"
        width={300}
        src={`../../img/img-${props.imgName}.jpg`}
        alt={`Project ${props.name}`}
      ></img>
    </a>
  );
}
