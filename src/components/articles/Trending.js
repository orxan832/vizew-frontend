import React from 'react';
import { Link } from 'react-router-dom';

const Trending = props => {
    return (
        <section className="trending-posts-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Section Heading */}
                        <div className="section-heading">
                            <h4>Trending Videos</h4>
                            <div className="line" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Single Blog Post */}
                    <div className="col-12 col-md-4">
                        <div className="single-post-area mb-80">
                            {/* Post Thumbnail */}
                            <div className="post-thumbnail">
                                <img src="img/bg-img/11.jpg" alt="Something" />
                                {/* Video Duration */}
                                <span className="video-duration">05.03</span>
                            </div>
                            {/* Post Content */}
                            <div className="post-content">
                                <Link to="#" className="post-cata cata-sm cata-success">Sports</Link>
                                <Link to="single-post.html" className="post-title">Warner Bros. Developing ‘The accountant’ Sequel</Link>
                                <div className="post-meta d-flex">
                                    <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 22</Link>
                                    <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 16</Link>
                                    <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 15</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Single Blog Post */}
                    <div className="col-12 col-md-4">
                        <div className="single-post-area mb-80">
                            {/* Post Thumbnail */}
                            <div className="post-thumbnail">
                                <img src="img/bg-img/12.jpg" alt="Something" />
                                {/* Video Duration */}
                                <span className="video-duration">05.03</span>
                            </div>
                            {/* Post Content */}
                            <div className="post-content">
                                <Link to="#" className="post-cata cata-sm cata-danger">Game</Link>
                                <Link to="single-post.html" className="post-title">Searching for the 'angel' who held me on Westminste Bridge</Link>
                                <div className="post-meta d-flex">
                                    <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 28</Link>
                                    <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 17</Link>
                                    <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 22</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Single Blog Post */}
                    <div className="col-12 col-md-4">
                        <div className="single-post-area mb-80">
                            {/* Post Thumbnail */}
                            <div className="post-thumbnail">
                                <img src="img/bg-img/13.jpg" alt="Something" />
                                {/* Video Duration */}
                                <span className="video-duration">05.03</span>
                            </div>
                            {/* Post Content */}
                            <div className="post-content">
                                <Link to="#" className="post-cata cata-sm cata-primary">Business</Link>
                                <Link to="single-post.html" className="post-title">Love Island star's boyfriend found dead after her funeral</Link>
                                <div className="post-meta d-flex">
                                    <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</Link>
                                    <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 38</Link>
                                    <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 22</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending;