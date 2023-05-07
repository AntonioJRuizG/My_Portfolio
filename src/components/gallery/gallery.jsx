import React from 'react';
import Thumbnail from '../thumbnail/thumbnail.jsx';

const projectList = [
  {
    id: '1',
    name: 'Be Euphonium',
    imgName: 'be-euphonium',
    description: 'Network',
    link: 'https://beeuphonium.netlify.app/',
  },
];

export default function Gallery() {
  return (
    <section>
      <h1>Projects</h1>
      <ul>
        {projectList.map((item) => (
          <li key={item.id} className="thumbnailContainer">
            <Thumbnail props={item}></Thumbnail>
          </li>
        ))}
      </ul>
    </section>
  );
}
