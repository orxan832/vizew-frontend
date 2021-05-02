import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

const Random = props => {
    return (
        <div className="col-12 col-lg-6">
            {/* Section Heading */}
            <div className="section-heading style-2">
                <h4>Sport Videos</h4>
                <div className="line" />
            </div>
            {/* Sports Video Slides */}
            <OwlCarousel className="sport-video-slides owl-carousel mb-50"
                loop
                smartSpeed={1000}
                items={1}
                margin={0}
                nav
                navText={['<i class="fa fa-angle-left text-white" style="font-size: 1.5rem"></i>', '<i class="fa fa-angle-right text-white" style="font-size: 1.5rem"></i>']}
                dots={false}>
                {/* Single Blog Post */}
                <div className="single-post-area">
                    {/* Post Thumbnail */}
                    <div className="post-thumbnail">
                        <img src="img/bg-img/15.jpg" alt="Something" />
                        {/* Video Duration */}
                        <span className="video-duration">05.03</span>
                    </div>
                    {/* Post Content */}
                    <div className="post-content">
                        <Link to="#" className="post-cata cata-sm cata-success">Sports</Link>
                        <Link to="single-post.html" className="post-title">Searching for the 'angel' who held me on Westminster Bridge</Link>
                        <div className="post-meta d-flex">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 38</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 22</Link>
                        </div>
                    </div>
                </div>
                {/* Single Blog Post */}
                <div className="single-post-area">
                    {/* Post Thumbnail */}
                    <div className="post-thumbnail">
                        <img src="img/bg-img/13.jpg" alt="Something" />
                        {/* Video Duration */}
                        <span className="video-duration">05.03</span>
                    </div>
                    {/* Post Content */}
                    <div className="post-content">
                        <Link to="#" className="post-cata cata-sm cata-success">Sports</Link>
                        <Link to="single-post.html" className="post-title">Searching for the 'angel' who held me on Westminster Bridge</Link>
                        <div className="post-meta d-flex">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 38</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 22</Link>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Random;