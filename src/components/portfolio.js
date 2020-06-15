import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import projectStyle from '../styles/project.module.scss';

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
                    slug
                    publishedDate(formatString: "DD-MMMM-YYYY")
                    
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
                                <div className={projectStyle.row}>
                                    <div className={projectStyle.column1}>
                                        <img src={"easy-charts/example02.png"} alt={edge.node.slug} className={projectStyle.thumbnail}/>
                                    </div>
                                    <div className={projectStyle.column2}>
                                        <h4> {edge.node.title} </h4>
                                        <div className={projectStyle.separator}></div>
                                        <p>description description description description description description description description description description description description description description </p>
                                        <div className={projectStyle.rowBottom}>
                                            <span className={projectStyle.language}> c# </span>
                                            <span className={projectStyle.publishedDate}> {edge.node.publishedDate} </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )})
                }
                </ol>
            </div>
            <div className={projectStyle.buttonContainer}>
                <button type="button" className="customButton">Sfoglia il portfolio</button>
            </div>
        </div>
    );
}

export default Portfolio;