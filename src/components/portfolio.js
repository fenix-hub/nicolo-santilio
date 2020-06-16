import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import projectStyle from '../styles/project.module.scss';
import { FaBookOpen } from 'react-icons/fa';


function Portfolio() {
     const data = useStaticQuery(graphql`
        query {
            allContentfulProject (
                sort: {
                    fields: publishedDate,
                    order: DESC,
                }
                
            ) {
                edges {
                    node {
                        title
                        description { childMarkdownRemark { rawMarkdownBody } }
                        slug
                        publishedDate(formatString: "DD-MMMM-YYYY")
                        language
                        thumbnail {
                            file {
                                url
                            }
                        }
                        license
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
                    <p className="hiddenMessage">Questa sezione è ancora in costruzione, poichè vorrei organizzarla e inserire un articolo per ogni mio progetto. Fai riferimento al mio GitHub per ora!</p>
                    <p>Questi sono alcuni dei miei proggetti, dai un'occhiata.</p>
        
                    <ol className={projectStyle.projectList}>
                    { data.allContentfulProject.edges.map( edge => {
                        return(
                            <li className={projectStyle.projectCard}>
                                <Link to={`/project/${edge.node.slug}`} >
                                        { counter()                                          
                                        ? <div className={projectStyle.row}>
                                                <div className={projectStyle.column1}>
                                                    <img src={edge.node.thumbnail ? edge.node.thumbnail.file.url : ""} alt={edge.node.slug} className={projectStyle.thumbnail}/>
                                                </div>
                                                <div className={projectStyle.column2}>
                                                    <h4> {edge.node.title} </h4>
                                                    <div className={projectStyle.separator}></div>
                                                    <div className={projectStyle.description}>
                                                    { edge.node.description !== null && <p>{edge.node.description.childMarkdownRemark.rawMarkdownBody}</p> }
                                                    </div> 
                                                    <div className={projectStyle.rowBottom}>
                                                        <span className={projectStyle.language}>{edge.node.language}</span>
                                                        <span className={projectStyle.publishedDate}> {edge.node.publishedDate} </span>
                                                    </div>
                                                </div>
                                            </div>
                                        : <div className={projectStyle.row}>
                                                <div className={projectStyle.column2}>
                                                    <h4> {edge.node.title} </h4>
                                                    <div className={projectStyle.separator}></div>
                                                    <div className={projectStyle.description}>
                                                    { edge.node.description !== null && <p>{edge.node.description.childMarkdownRemark.rawMarkdownBody}</p> }
                                                    </div>
                                                    <div className={projectStyle.rowBottom}>
                                                        <span className={projectStyle.language}>{edge.node.language}</span>
                                                        <span className={projectStyle.publishedDate}> {edge.node.publishedDate} </span>
                                                    </div>
                                                </div>
                                                <div className={projectStyle.column1}>
                                                    <img src={edge.node.thumbnail ? edge.node.thumbnail.file.url : ""} alt={edge.node.slug} className={projectStyle.thumbnail}/>
                                                </div>
                                            </div>                                        
                                    }
                                </Link>
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