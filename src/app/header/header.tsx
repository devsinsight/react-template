import * as React from "react";
import { Link } from 'react-router-dom';
import LoadingBar from "../common/loading-bar";
import { connect } from 'react-redux';

export const Header = (props: Props)=>{
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img src="./images/dbzlogo.png" width="24" alt="Dragon Ball Z" />
                        </Link>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/course">Course</Link></li>
                            <li><Link to="/demos">Demos</Link></li>
                        </ul>
                    </div>
                </nav>
                { props.loading && <LoadingBar interval={100} /> }
            </div>
        )
    
}

interface Props{
    loading: any
}


