import React from 'react';
import Countup from 'react-countup';
import { Link } from 'react-router-dom';

const IndexSidebar = props => {
    return (
        <div className="sidebar-area">
            {/* ***** Single Widget ***** */}
            <div className="single-widget followers-widget mb-50">
                <Link to="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true" /><span className="counter">
                    <Countup end={198} duration={5} />
                </span><span>Fan</span></Link>
                <Link to="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true" /><span className="counter">
                    <Countup end={220} duration={5} />
                </span><span>Followers</span></Link>
                <Link to="#" className="google"><i className="fa fa-google" aria-hidden="true" /><span className="counter">
                    <Countup end={220} duration={5} />
                </span><span>Subscribe</span></Link>
            </div>
            {/* ***** Single Widget ***** */}
            <div className="single-widget latest-video-widget mb-50">
                {/* Section Heading */}
                <div className="section-heading style-2 mb-30">
                    <h4>Latest Video</h4>
                    <div className="line" />
                </div>
                {/* Single Blog Post */}
                <div className="single-post-area mb-30">
                    {/* Post Thumbnail */}
                    <div className="post-thumbnail">
                        <img src="img/bg-img/13.jpg" alt="Something" />
                        {/* Video Duration */}
                        <span className="video-duration">05.03</span>
                    </div>
                    {/* Post Content */}
                    <div className="post-content">
                        <Link to="#" className="post-cata cata-sm cata-success">Sports</Link>
                        <Link to="single-post.html" className="post-title">Full article Prince Charles's 'urgent' global research</Link>
                        <div className="post-meta d-flex">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 38</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 22</Link>
                        </div>
                    </div>
                </div>
                {/* Single Blog Post */}
                <div className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                        <img src="img/bg-img/1.jpg" alt="Something" />
                    </div>
                    <div className="post-content">
                        <Link to="single-post.html" className="post-title">DC Shoes: gymkhana five; the making of</Link>
                        <div className="post-meta d-flex justify-content-between">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 29</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 08</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 23</Link>
                        </div>
                    </div>
                </div>
                {/* Single Blog Post */}
                <div className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                        <img src="img/bg-img/2.jpg" alt="Something" />
                    </div>
                    <div className="post-content">
                        <Link to="single-post.html" className="post-title">Sweet Yummy Chocolatea Tea</Link>
                        <div className="post-meta d-flex justify-content-between">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 17</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 33</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 26</Link>
                        </div>
                    </div>
                </div>
                {/* Single Blog Post */}
                <div className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                        <img src="img/bg-img/35.jpg" alt="Something" />
                    </div>
                    <div className="post-content">
                        <Link to="single-post.html" className="post-title">How To Make Orange Chicken Recipe?</Link>
                        <div className="post-meta d-flex justify-content-between">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 11</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 42</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 21</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* ***** Single Widget ***** */}
            <div className="single-widget add-widget mb-50">
                <Link to="#"><img src="img/bg-img/add.png" alt="Something" /></Link>
            </div>
            {/* ***** Sidebar Widget ***** */}
            <div className="single-widget youtube-channel-widget mb-50">
                {/* Section Heading */}
                <div className="section-heading style-2 mb-30">
                    <h4>Hot Channels</h4>
                    <div className="line" />
                </div>
                {/* Single YouTube Channel */}
                <div className="single-youtube-channel d-flex align-items-center">
                    <div className="youtube-channel-thumbnail">
                        <img src="img/bg-img/25.jpg" alt="Something" />
                    </div>
                    <div className="youtube-channel-content">
                        <Link to="single-post.html" className="channel-title">Music Channel</Link>
                        <Link to="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true" /> Subscribe</Link>
                    </div>
                </div>
                {/* Single YouTube Channel */}
                <div className="single-youtube-channel d-flex align-items-center">
                    <div className="youtube-channel-thumbnail">
                        <img src="img/bg-img/26.jpg" alt="Something" />
                    </div>
                    <div className="youtube-channel-content">
                        <Link to="single-post.html" className="channel-title">Trending Channel</Link>
                        <Link to="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true" /> Subscribe</Link>
                    </div>
                </div>
                {/* Single YouTube Channel */}
                <div className="single-youtube-channel d-flex align-items-center">
                    <div className="youtube-channel-thumbnail">
                        <img src="img/bg-img/27.jpg" alt="Something" />
                    </div>
                    <div className="youtube-channel-content">
                        <Link to="single-post.html" className="channel-title">Travel Channel</Link>
                        <Link to="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true" /> Subscribe</Link>
                    </div>
                </div>
                {/* Single YouTube Channel */}
                <div className="single-youtube-channel d-flex align-items-center">
                    <div className="youtube-channel-thumbnail">
                        <img src="img/bg-img/28.jpg" alt="Something" />
                    </div>
                    <div className="youtube-channel-content">
                        <Link to="single-post.html" className="channel-title">Sport Channel</Link>
                        <Link to="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true" /> Subscribe</Link>
                    </div>
                </div>
                {/* Single YouTube Channel */}
                <div className="single-youtube-channel d-flex align-items-center">
                    <div className="youtube-channel-thumbnail">
                        <img src="img/bg-img/29.jpg" alt="Something" />
                    </div>
                    <div className="youtube-channel-content">
                        <Link to="single-post.html" className="channel-title">TV Show Channel</Link>
                        <Link to="#" className="btn subscribe-btn"><i className="fa fa-play-circle-o" aria-hidden="true" /> Subscribe</Link>
                    </div>
                </div>
            </div>
            {/* ***** Single Widget ***** */}
            <div className="single-widget newsletter-widget mb-50">
                {/* Section Heading */}
                <div className="section-heading style-2 mb-30">
                    <h4>Newsletter</h4>
                    <div className="line" />
                </div>
                <p>Subscribe our newsletter gor get notification about new updates, information discount, etc.</p>
                {/* Newsletter Form */}
                <div className="newsletter-form">
                    <form action="#" method="post">
                        <input type="email" name="nl-email" className="form-control mb-15" id="emailnl" placeholder="Enter your email" />
                        <button type="submit" className="btn vizew-btn w-100">Subscribe</button>
                    </form>
                </div>
            </div>
            {/* ***** Single Widget ***** */}
            <div className="single-widget mb-50">
                {/* Section Heading */}
                <div className="section-heading style-2 mb-30">
                    <h4>Most Viewed Playlist</h4>
                    <div className="line" />
                </div>
                {/* Single Blog Post */}
                <div className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                        <img src="img/bg-img/1.jpg" alt="Something" />
                    </div>
                    <div className="post-content">
                        <Link to="single-post.html" className="post-title">DC Shoes: gymkhana five; the making of</Link>
                        <div className="post-meta d-flex justify-content-between">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 34</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</Link>
                        </div>
                    </div>
                </div>
                {/* Single Blog Post */}
                <div className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                        <img src="img/bg-img/2.jpg" alt="Something" />
                    </div>
                    <div className="post-content">
                        <Link to="single-post.html" className="post-title">How To Make Orange Chicken Recipe?</Link>
                        <div className="post-meta d-flex justify-content-between">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 34</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</Link>
                        </div>
                    </div>
                </div>
                {/* Single Blog Post */}
                <div className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                        <img src="img/bg-img/36.jpg" alt="Something" />
                    </div>
                    <div className="post-content">
                        <Link to="single-post.html" className="post-title">Sweet Yummy Chocolate in the</Link>
                        <div className="post-meta d-flex justify-content-between">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 34</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</Link>
                        </div>
                    </div>
                </div>
                {/* Single Blog Post */}
                <div className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                        <img src="img/bg-img/37.jpg" alt="Something" />
                    </div>
                    <div className="post-content">
                        <Link to="single-post.html" className="post-title">DC Shoes: gymkhana five; the making of</Link>
                        <div className="post-meta d-flex justify-content-between">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 34</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</Link>
                        </div>
                    </div>
                </div>
                {/* Single Blog Post */}
                <div className="single-blog-post d-flex">
                    <div className="post-thumbnail">
                        <img src="img/bg-img/38.jpg" alt="Something" />
                    </div>
                    <div className="post-content">
                        <Link to="single-post.html" className="post-title">How To Make Orange Chicken Recipe?</Link>
                        <div className="post-meta d-flex justify-content-between">
                            <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</Link>
                            <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 34</Link>
                            <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexSidebar;