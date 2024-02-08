/* eslint-disable */
import React from 'react';
import {Link} from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const {PUBLIC_URL} = process.env; // set automatically from package.json:homepage

const SideBar = () => (
    <section id="sidebar">
        <section id="intro">
            <Link to="/" className="logo">
                <img src={`${PUBLIC_URL}/images/me.jpg`} alt=""/>
            </Link>
            <header>
                <h2>Liming Huang</h2>
                <p>huangliming1000@gmail.com</p>
            </header>
        </section>

        <section className="blurb">
            <h2>About</h2>
            <p>
                Embarking on a career transition by pursuing a Master's in Computer Science at Northeastern University,
                previously a finance professional with five years in front-office roles. Seeking opportunities to contribute technical proficiency and business thinking in a dynamic
                environment.
            </p>
            <p>
                The Internet has bridged the gap once insurmountable and shared invaluable information available.

                I have personally benefited from it once, now actively contributing to this transformative journey.
            </p>
            <ul className="actions">
                <li>
                    {!window.location.pathname.includes('/resume') ?
                        <Link to="/resume" className="button">Learn More</Link> :
                        <Link to="/about" className="button">About Me</Link>}
                </li>
            </ul>
        </section>

        <section id="footer">
            <ContactIcons/>
            <p className="copyright">&copy; LimingHuang <Link to="/">liminghuang.com</Link>.</p>
        </section>
    </section>
);

export default SideBar;
