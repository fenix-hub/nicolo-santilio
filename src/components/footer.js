import React from 'react';

import {graphql, useStaticQuery} from "gatsby";

function Footer() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `);

    return(
        <footer>
            <p>Sito web creato con <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">GatsbyJS</a> <b>© 2020-2021 {data.site.siteMetadata.author}</b></p>
        </footer>
    );
}

export default Footer;