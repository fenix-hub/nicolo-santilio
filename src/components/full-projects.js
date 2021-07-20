import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { language, projectList, projectCard, row, rowBottom, column1, column2, description, thumbnail } from '../styles/full-project.module.scss';
import { FaBookOpen, FaEye, FaCode, FaExternalLinkAlt } from 'react-icons/fa';


function FullProjects() {
     const data = useStaticQuery(graphql`
        query {
            allContentfulProject (filter: {thumbnail: {id: {ne: null} } }) {
                edges {
                    node {
                        title
                        description { description }
                        slug
                        language
                        thumbnail {
                            file {
                                url
                            }
                        }
                        license
                        source
                        preview
                    }
                }
            }
        }
    `)
    
    return(
            <div id="FullProjects" className="content-container">
                <div className="content">        
                    <ol className={projectList}>
                    { data.allContentfulProject.edges.map( edge => {
                        return(
                            <li className={projectCard}>
                                <div className={row}>
                                    <Link to={`/project/${edge.node.slug}`} >
                                        <div className={column1}>
                                            <img src={edge.node.thumbnail ? edge.node.thumbnail.file.url : ""} alt={edge.node.slug} className={thumbnail} crossorigin/>
                                            <FaExternalLinkAlt className="articleBtn"></FaExternalLinkAlt>
                                        </div>
                                    </Link>
                                        <div className={column2}>
                                            <h4> {edge.node.title} </h4>
                                            <div className={description}>
                                            <p> { edge.node.description !== null ? edge.node.description.description : "" } </p>
                                            </div> 
                                            <div className={rowBottom}>
                                                <text className={language}>{edge.node.language}</text>
                                                <a className="link1" href={edge.node.source} target="_blank" rel="noreferrer"><span className="tooltip">Source</span><FaCode className="link-icon"/></a>
                                                <a className="link1" href={edge.node.preview} target="_blank" rel="noreferrer"><span className="tooltip">Preview</span><FaEye className="link-icon"></FaEye></a>
                                            </div>
                                        </div>
                                    </div>                                        
                            </li>
                        )})
                    }
                    </ol>
                </div>
            </div>
        );
}

export default FullProjects;