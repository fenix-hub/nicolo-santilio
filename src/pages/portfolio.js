import React from "react";

import '../styles/index.scss';

import Layout2 from '../components/layout2';
import FullProjects from '../components/full-projects';
import Topbar from '../components/topbar';

function Portfolio() {
  return ( 
    <Layout2>
      <FullProjects/>
    </Layout2>
  );
}

export default Portfolio;