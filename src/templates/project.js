import React from 'react';
import LayoutProject from '../components/layout-project';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
    query($slug: String!) {
        contentfulProject ( slug:{eq: $slug}  )
        {
            title
            publishedDate(formatString: "DD-MMMM-YYYY")
            body {
                json
            }
            icon {
                file {
                    url
                }
                title
            }
        }
    }
`

export const options = {
    renderNode :{
        "embedded-asset-block": node => {
            const alt = node.data.target.fields.title['en-US'];
            const src = node.data.target.fields.file['en-US'].url;
            return <img alt={alt} src={src}/>
        },
        [BLOCKS.HEADING_3]: (node, children) => <h3 id={children.toString().toLowerCase().split(" ").join("-")}>{children}</h3>,
    },
}

function Project(props) {
    return (
        <LayoutProject>
            <Head title={props.data.contentfulProject.title}/>
            <img src={props.data.contentfulProject.icon!=null ? props.data.contentfulProject.icon.file.url : ""} alt={props.data.contentfulProject.icon!=null ? props.data.contentfulProject.icon.title : ""} />
            <h1>{props.data.contentfulProject.title}</h1>
            <p>{props.data.contentfulProject.publishedDate}</p>
            <div>
                {documentToReactComponents(props.data.contentfulProject.body.json, options)}
            </div>
        </LayoutProject>
    );
}

export default Project;