import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/olakunmi19/sneaker_shop" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/olakunmi19/sneaker_shop" target="_blank" rel="noreferrer"><h2>E-CommerceShoe Store App</h2></a>
                <p>A mobile shopping experience built with Flutter, featuring custom drawer navigation, a responsive product catalog, cart item persistence, and smooth page transitions.</p>
            </div>
            <div className="project">
                <a href="https://github.com/olakunmi19/sushi_resturant_app" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/olakunmi19/sushi_resturant_app" target="_blank" rel="noreferrer"><h2>Sushi Food Ordering App</h2></a>
                <p>A clean food ordering interface built with Flutter and Provider, implementing dynamic menu rendering, price calculations, cart state, and order summary checkout views.</p>
            </div>
            <div className="project">
                <a href="https://github.com/olakunmi19/expense_tracker_app" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/olakunmi19/expense_tracker_app" target="_blank" rel="noreferrer"><h2>Expense Tracker</h2></a>
            </div>
            <div className="project">
                <a href="https://github.com/olakunmi19/log_in_page" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/olakunmi19/log_in_page" target="_blank" rel="noreferrer"><h2>LogIn Page</h2></a>
                <p>A seamless mobile authentication flow built with Flutter and Firebase Auth, featuring reactive session handling via StreamBuilder, form input controller management, and instant sign-in and sign-out capabilities.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;