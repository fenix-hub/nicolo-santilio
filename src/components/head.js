import React from 'react';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';


function Head({title}) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <Helmet>
            <title>{`${title} ▪ ${data.site.siteMetadata.title}`}</title>
            <meta name="description" content={`${data.site.siteMetadata.description}`} />
            <meta name="siteUrl" content={`${data.site.siteMetadata.siteUrl}`} />
            <meta name="theme-color" content="#008f68" />
        </Helmet>
    );
}

export default Head;