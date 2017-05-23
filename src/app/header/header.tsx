import * as React from "react";
import { Link } from 'react-router-dom';

export default class Header extends React.Component<any, any>{
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="images/dbzlogo.png" width="24" alt="Dragon Ball Z" />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}   