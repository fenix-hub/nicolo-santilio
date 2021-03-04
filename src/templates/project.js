import React from 'react';
import LayoutProject from '../components/layout-project';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';
import { BLOCKS } from "@contentful/rich-text-types"
import { FaArrowLeft,  FaEye, FaCode, } from 'react-icons/fa';
import Video from "../components/video";

export const query = graphql`
    query($slug: String!) {
        contentfulProject ( slug:{eq: $slug}  )
        {
            title
            body {
                json
            }
            icon {
                file {
                    url
                    contentType
                }
                title
            }
            source
            preview
        }
    }
`

export const options = {
    renderNode :{
        "embedded-asset-block": node => {
            const alt = node.data.target.fields?.title['en-US'];
            const src = node.data.target.fields?.file['en-US'].url;
            const type = node.data.target.fields?.file['en-US'].contentType;
            if (type === "video/mp4") {
                return <div align="center">
                <Video 
                videoSrcURL={src}
                videoTitle={alt}
                />
                </div> 
            }
            else {
                return <div align="center">
                <img alt={alt} src={src} width="750px"/>
                </div>
            }
        },
        [BLOCKS.HEADING_3]: (node, children) => <h3 id={children.toString().toLowerCase().split(" ").join("-")}>{children}</h3>,
    },
}

function Project(props) {
    return (
        <LayoutProject>
            <Head title={props.data.contentfulProject.title}/>
            <img src={props.data.contentfulProject.icon!=null ? props.data.contentfulProject.icon.file.url : ""} alt={props.data.contentfulProject.icon!=null ? props.data.contentfulProject.icon.title : ""} />
            <div>
                <Link to={`/`}><FaArrowLeft className="returnBtn"/></Link>
                <h1>{props.data.contentfulProject.title}</h1>
            </div>

            <div className="link-container">
                <a className="link1" href={props.data.contentfulProject.source} target="_blank" rel="noreferrer"><span className="link-icon2"><FaCode className="link-icon21"/>Source</span></a>
                <a className="link1" href={props.data.contentfulProject.preview} target="_blank" rel="noreferrer"><span className="link-icon2"><FaEye className="link-icon21"/>Preview</span></a>
            </div>

            <div>
                {documentToReactComponents(props.data.contentfulProject.body.json, options)}
            </div>
        </LayoutProject>
    );
}

export default Project;