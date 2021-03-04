import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import projectStyle from '../styles/project.module.scss';
import { FaBookOpen, FaEye, FaCode, FaExternalLinkAlt } from 'react-icons/fa';


function Portfolio() {
     const data = useStaticQuery(graphql`
        query {
            allContentfulProject {
                edges {
                    node {
                        title
                        description { childMarkdownRemark { rawMarkdownBody } }
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
            <div id="portfolio" className="l-content-container">
                <h3>Portfolio</h3>
                <div className="separator"></div>
                <div className="content">
        
                    <ol className={projectStyle.projectList}>
                    { data.allContentfulProject.edges.map( edge => {
                        return(
                            <li className={projectStyle.projectCard}>
                                    { counter()                                          
                                    ? <div className={projectStyle.row}>
                                        <Link to={`/project/${edge.node.slug}`} >
                                            <div className={projectStyle.column1}>
                                                <img src={edge.node.thumbnail ? edge.node.thumbnail.file.url : ""} alt={edge.node.slug} className={projectStyle.thumbnail}/>
                                                <FaExternalLinkAlt className="articleBtn"></FaExternalLinkAlt>
                                            </div>
                                        </Link>
                                            <div className={projectStyle.column2}>
                                                <h4> {edge.node.title} </h4>
                                                <div className={projectStyle.description}>
                                                { edge.node.description !== null && <p>{edge.node.description.childMarkdownRemark.rawMarkdownBody}</p> }
                                                </div> 
                                                <div className={projectStyle.rowBottom}>
                                                    <text className={projectStyle.language}>{edge.node.language}</text>
                                                    <a className="link1" href={edge.node.source} target="_blank" rel="noreferrer"><span className="tooltip">Source</span><FaCode className="link-icon"/></a>
                                                    <a className="link1" href={edge.node.preview} target="_blank" rel="noreferrer"><span className="tooltip">Preview</span><FaEye className="link-icon"></FaEye></a>
                                                </div>
                                            </div>
                                        </div>
                                    : <div className={projectStyle.row}>
                                            <div className={projectStyle.column2}>
                                                <h4> {edge.node.title} </h4>
                                                
                                                <div className={projectStyle.description}>
                                                { edge.node.description !== null && <p>{edge.node.description.childMarkdownRemark.rawMarkdownBody}</p> }
                                                </div>
                                                <div className={projectStyle.rowBottom}>
                                                    <text className={projectStyle.language}>{edge.node.language}</text>
                                                    <a className="link1" href={edge.node.source} target="_blank" rel="noreferrer"><span className="tooltip">Source</span><FaCode className="link-icon"/></a>
                                                    <a className="link1" href={edge.node.preview} target="_blank" rel="noreferrer"><span className="tooltip">Preview</span><FaEye className="link-icon"></FaEye></a>
                                                </div>
                                            </div>
                                            <Link to={`/project/${edge.node.slug}`} >
                                                <div className={projectStyle.column1}>
                                                    <img src={edge.node.thumbnail ? edge.node.thumbnail.file.url : ""} alt={edge.node.slug} className={projectStyle.thumbnail}/>
                                                    <FaExternalLinkAlt className="articleBtn"></FaExternalLinkAlt>
                                                </div>
                                            </Link>
                                        </div>                                        
                                }
                            </li>
                        )})
                    }
                    </ol>
                </div>
                <div className="CV">
{/*                 <p></p>*/}                
                    <button type="submit" className="customButton"><FaBookOpen className="icon"/>  Sfoglia il portfolio</button>
                </div>
            </div>
        );
}

var c = 0;

function counter() {
    c++;
    if (c%2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

export default Portfolio;