import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ title }) => {
    return (
        <div className="vizew-breadcrumb">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home" aria-hidden="true" /> Ana səhifə</Link></li>
                                <li className="breadcrumb-item"><Link to="/search"><i className="fa fa-book" aria-hidden="true" /> Məqalələr</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;