import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Shramko Alexey</h1>

                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">About</a></li>
                    <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
                    <li><a href="#skills" className="footer__link">Skills</a></li>
                </ul>

            </div>
        </footer>
    )
}

export default Footer
