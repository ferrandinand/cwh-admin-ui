  
import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to={'/'} exact className="nav-link">
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/users'} className="nav-link">
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/projects'} className="nav-link">
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;