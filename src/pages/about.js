import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';

function AboutPage() {
    return (
        <Layout>
            <div>
                <h1>About me</h1>
                <p>Here are some informations about me...</p>
                <p><Link to="/">Back</Link></p>
            </div>
        </Layout>
    );
}

export default AboutPage;