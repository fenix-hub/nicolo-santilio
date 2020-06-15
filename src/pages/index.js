import React from "react";

import '../styles/index.scss';

import Layout from '../components/layout';
import About from '../components/about';
import Formazione from '../components/formazione';
import Portfolio from '../components/portfolio';
import Contatti from '../components/contatti';
import Head from '../components/head';

function Index() {
  return ( 
    <Layout>
      <p className="hiddenMessage">Scusami, sto ancora creando questo sito, appena avrò tempo inserirò nuovi contenuti!</p>
      <Head title="Home"/>
      <div className="intestation">
        <h3>Ciao, mi chiamo</h3>
        <h1><b>Nicolò Santilio</b></h1>
        <h2>e faccio cose nel mondo della <b>robotica</b> e dell'<b>informatica</b>.</h2>
        
      </div>

      <div className="site-contents">
        <About/>
        <Formazione/>
        <Portfolio/>
        
      </div>
    </Layout>
  );
}

export default Index;