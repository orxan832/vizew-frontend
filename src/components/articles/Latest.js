import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Latest = props => {
    return (
        <Fragment>
            <div className="section-heading style-2" >
                <h4>Latest News</h4>
                <div className="line" />
            </div>
            <div className="single-post-area mb-30">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        {/* Post Thumbnail */}
                        <div className="post-thumbnail">
                            <img src="img/bg-img/21.jpg" alt="Something" />
                            {/* Video Duration */}
                            <span className="video-duration">05.03</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Post Content */}
                        <div className="post-content mt-0">
                            <Link to="#" className="post-cata cata-sm cata-success">Sports</Link>
                            <Link to="single-post.html" className="post-title mb-2">May fights on after Johnson savages Brexit approach</Link>
                            <div className="post-meta d-flex align-items-center mb-2">
                                <Link to="#" className="post-author">By Jane</Link>
                                <i className="fa fa-circle" aria-hidden="true" />
                                <Link to="#" className="post-date">Sep 08, 2018</Link>
                            </div>
                            <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.</p>
                            <div className="post-meta d-flex">
                                <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 32</Link>
                                <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 42</Link>
                                <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 7</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-post-area mb-30">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        {/* Post Thumbnail */}
                        <div className="post-thumbnail">
                            <img src="img/bg-img/22.jpg" alt="Something" />
                            {/* Video Duration */}
                            <span className="video-duration">05.03</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Post Content */}
                        <div className="post-content mt-0">
                            <Link to="#" className="post-cata cata-sm cata-danger">Game</Link>
                            <Link to="single-post.html" className="post-title mb-2">Thailand cave rescue: Boys 'doing well' after spending night</Link>
                            <div className="post-meta d-flex align-items-center mb-2">
                                <Link to="#" className="post-author">By Jane</Link>
                                <i className="fa fa-circle" aria-hidden="true" />
                                <Link to="#" className="post-date">Sep 08, 2018</Link>
                            </div>
                            <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.</p>
                            <div className="post-meta d-flex">
                                <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 32</Link>
                                <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 42</Link>
                                <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 7</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-post-area mb-30">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        {/* Post Thumbnail */}
                        <div className="post-thumbnail">
                            <img src="img/bg-img/23.jpg" alt="Something" />
                            {/* Video Duration */}
                            <span className="video-duration">05.03</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Post Content */}
                        <div className="post-content mt-0">
                            <Link to="#" className="post-cata cata-sm cata-primary">Business</Link>
                            <Link to="single-post.html" className="post-title mb-2">Theresa May battles Brexiteer backlash amid disquiet</Link>
                            <div className="post-meta d-flex align-items-center mb-2">
                                <Link to="#" className="post-author">By Jane</Link>
                                <i className="fa fa-circle" aria-hidden="true" />
                                <Link to="#" className="post-date">Sep 08, 2018</Link>
                            </div>
                            <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.</p>
                            <div className="post-meta d-flex">
                                <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 32</Link>
                                <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 42</Link>
                                <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 7</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Post Area */}
            <div className="single-post-area mb-30">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        {/* Post Thumbnail */}
                        <div className="post-thumbnail">
                            <img src="img/bg-img/24.jpg" alt="Something" />
                            {/* Video Duration */}
                            <span className="video-duration">05.03</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        {/* Post Content */}
                        <div className="post-content mt-0">
                            <Link to="#" className="post-cata cata-sm cata-danger">Game</Link>
                            <Link to="single-post.html" className="post-title mb-2">Theresa May warned Brexit strategy 'risks putting Jeremy Corbyn</Link>
                            <div className="post-meta d-flex align-items-center mb-2">
                                <Link to="#" className="post-author">By Jane</Link>
                                <i className="fa fa-circle" aria-hidden="true" />
                                <Link to="#" className="post-date">Sep 08, 2018</Link>
                            </div>
                            <p className="mb-2">Quisque mollis tristique ante. Proin ligula eros, varius id tristique sit amet, rutrum non ligula.</p>
                            <div className="post-meta d-flex">
                                <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 32</Link>
                                <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 42</Link>
                                <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 7</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Latest;