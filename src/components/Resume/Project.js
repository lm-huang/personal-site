/* eslint-disable*/
import React from 'react';

import Toy from './Project/Toy';

const Project = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="projects" />
    <div className="title">
      <h3>Projects</h3>
    </div>
    {data.map((toy) => (
      <Toy
        data={toy}
        key={`${toy.name} | ${toy.position}`}
      />
    ))}
  </div>
);

export default Project;
