import React, { Fragment } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

const Featured = props => {
    return (
        <Fragment>
            <div className="section-heading style-2">
                <h4>Featured Videos</h4>
                <div className="line" />
            </div>
            {/* Featured Post Slides */}
            <OwlCarousel className="featured-post-slides owl-carousel mb-30"
                loop
                autoplay
                autoplayTimeout={4000}
                smartSpeed={1000}
                autoplayHoverPause
                items={1}
                margin={0}
                nav
                navText={['<i class="fa fa-angle-left text-white" style="font-size: 1.5rem"></i>', '<i class="fa fa-angle-right text-white" style="font-size: 1.5rem"></i>']}
                dots={false}>
                {/* Single Feature Post */}
                <div className="single-feature-post video-post bg-img" style={{ backgroundImage: 'url(img/bg-img/14.jpg)' }}>
                    {/* Play Button */}
                    <Link to="video-post.html" className="btn play-btn"><i className="fa fa-play" aria-hidden="true" /></Link>
                    {/* Post Content */}
                    <div className="post-content">
                        <Link to="#" className="post-cata">Sports</Link>
                        <Link to="single-post.html" className="post-title">Reunification of migrant toddlers, parents should be completed Thursday</Link>
                        <div className="post-meta d-flex">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 25</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 25</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 25</Link>
                        </div>
                    </div>
                    {/* Video Duration */}
                    <span className="video-duration">05.03</span>
                </div>
                {/* Single Feature Post */}
                <div className="single-feature-post video-post bg-img" style={{ backgroundImage: 'url(img/bg-img/7.jpg)' }}>
                    {/* Play Button */}
                    <Link to="video-post.html" className="btn play-btn"><i className="fa fa-play" aria-hidden="true" /></Link>
                    {/* Post Content */}
                    <div className="post-content">
                        <Link to="#" className="post-cata">Sports</Link>
                        <Link to="single-post.html" className="post-title">Reunification of migrant toddlers, parents should be completed Thursday</Link>
                        <div className="post-meta d-flex">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 25</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 25</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 25</Link>
                        </div>
                    </div>
                    {/* Video Duration */}
                    <span className="video-duration">05.03</span>
                </div>
                {/* Single Feature Post */}
                <div className="single-feature-post video-post bg-img" style={{ backgroundImage: 'url(img/bg-img/7.jpg)' }}>
                    {/* Play Button */}
                    <Link to="video-post.html" className="btn play-btn"><i className="fa fa-play" aria-hidden="true" /></Link>
                    {/* Post Content */}
                    <div className="post-content">
                        <Link to="#" className="post-cata">Sports</Link>
                        <Link to="single-post.html" className="post-title">Reunification of migrant toddlers, parents should be completed Thursday</Link>
                        <div className="post-meta d-flex">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 25</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 25</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 25</Link>
                        </div>
                    </div>
                    {/* Video Duration */}
                    <span className="video-duration">05.03</span>
                </div>
            </OwlCarousel>
        </Fragment>
    )
}

export default Featured;