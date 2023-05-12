import React from 'react';

export default function MediaButton({ props }) {
  return <a href={props.link}>{props.text}</a>;
}
