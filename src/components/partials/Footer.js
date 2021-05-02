import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    {/* Footer Widget Area */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="footer-widget mb-70">
                            {/* Logo */}
                            <Link to="index.html" className="foo-logo d-block mb-4"><img src="img/core-img/logo2.png" alt="Something" /></Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                            {/* Footer Newsletter Area */}
                            <div className="footer-nl-area">
                                <form action="#" method="post">
                                    <input type="email" name="nl-email" className="form-control" id="nlEmail" placeholder="Your email" />
                                    <button type="submit"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Footer Widget Area */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="footer-widget mb-70">
                            <h6 className="widget-title">Latest Twister</h6>
                            {/* Twitter Slides */}
                            <OwlCarousel className="twitter-slides owl-carousel"
                                loop
                                autoplay
                                autoplayTimeout={4000}
                                smartSpeed={1000}
                                autoplayHoverPause
                                items={1}
                                margin={0}
                                dots={false}>
                                {/* Single Twitter Slide */}
                                <div className="single--twitter-slide">
                                    {/* Single Twit */}
                                    <div className="single-twit">
                                        <p><i className="fa fa-twitter" /> <span>@Leonard</span> I am so happy because I found this magazine, and it just made Vizeweasier. Thanks for sharing</p>
                                    </div>
                                    {/* Single Twit */}
                                    <div className="single-twit">
                                        <p><i className="fa fa-twitter" /> <span>@Leonard</span> I am so happy because I found this magazine, and it just made Vizeweasier. Thanks for sharing</p>
                                    </div>
                                </div>
                                {/* Single Twitter Slide */}
                                <div className="single--twitter-slide">
                                    {/* Single Twit */}
                                    <div className="single-twit">
                                        <p><i className="fa fa-twitter" /> <span>@Colorlib</span> I am so happy because I found this magazine, and it just made Vizeweasier. Thanks for sharing</p>
                                    </div>
                                    {/* Single Twit */}
                                    <div className="single-twit">
                                        <p><i className="fa fa-twitter" /> <span>@Colorlib</span> I am so happy because I found this magazine, and it just made Vizeweasier. Thanks for sharing</p>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                    {/* Footer Widget Area */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="footer-widget mb-70">
                            <h6 className="widget-title">Sport Videos</h6>
                            {/* Single Blog Post */}
                            <div className="single-blog-post d-flex">
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/1.jpg" alt="Something" />
                                </div>
                                <div className="post-content">
                                    <Link to="single-post.html" className="post-title">DC Shoes: gymkhana the</Link>
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
                                    <Link to="single-post.html" className="post-title">Sweet Yummy Chocolatea Tea</Link>
                                    <div className="post-meta d-flex justify-content-between">
                                        <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 14</Link>
                                        <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 34</Link>
                                        <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 84</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Widget Area */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="footer-widget mb-70">
                            <h6 className="widget-title">Our Address</h6>
                            {/* Contact Address */}
                            <div className="contact-address">
                                <p>101 E 129th St, East Chicago, <br />IN 46312, US</p>
                                <p>Phone: 001-1234-88888</p>
                                <p>Email: info.colorlib@gmail.com</p>
                            </div>
                            {/* Footer Social Area */}
                            <div className="footer-social-area">
                                <Link to="#" className="facebook"><i className="fa fa-facebook" /></Link>
                                <Link to="#" className="google-plus"><i className="fa fa-google-plus" /></Link>
                                <Link to="#" className="instagram"><i className="fa fa-instagram" /></Link>
                                <Link to="#" className="twitter"><i className="fa fa-twitter" /></Link>
                                <Link to="#" className="linkedin"><i className="fa fa-linkedin" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copywrite Area */}
            <div className="copywrite-area">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Copywrite Text */}
                        <div className="col-12 col-sm-6">
                            <p className="copywrite-text">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                        </div>
                        <div className="col-12 col-sm-6">
                            <nav className="footer-nav">
                                <ul>
                                    <li><Link to="#">Advertise</Link></li>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                    <li><Link to="#">Disclaimer</Link></li>
                                    <li><Link to="#">Privacy</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;