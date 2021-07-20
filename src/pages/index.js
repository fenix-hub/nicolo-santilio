import React from "react";

import '../styles/index.scss';

import Layout from '../components/layout';
import About from '../components/about';
import Formazione from '../components/formazione';
import Projects from '../components/projects';
import Head from '../components/head';

function Index() {
  return ( 
    <Layout>
      <Head title="Home"/>
      <div className="intestation" id="home">
        <h3 className="ch3">Hi, my name is</h3>
        <h1 className="ch1"><b>Nicolò Santilio</b></h1>
        <h2 className="ch2">and I do stuff related to <b>robotics</b> and <b>computer science</b>.</h2>
        
      </div>

      <div className="site-contents">
        <Projects/>
        <About/>
        <Formazione/>
        
      </div>
    </Layout>
  );
}

export default Index;