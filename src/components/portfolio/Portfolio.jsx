import React from 'react'
import './portfolio.css'
import Projects from './Projects'

const Portfolio = () => {
    return (
        <section className='portfolio section' id='portfolio'>
            <h2 className='section__title'>Portfolio</h2>
            <span className='section__subtitle'>My projects</span>

            <div className='portfolio__container container grid'>
                <Projects />
            </div>

        </section>
    )
}

export default Portfolio
