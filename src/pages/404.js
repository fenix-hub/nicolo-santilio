import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

function NotFound() {
    return(
        <Layout>
            <Head title="404" />
            <h1>Pagina non trovata.</h1>
            <Link to='/'>Torna alla Home</Link>
        </Layout>
    );
}

export default NotFound;