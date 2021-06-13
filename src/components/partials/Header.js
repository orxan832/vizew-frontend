import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user";
import { withRouter } from "react-router-dom";
import { sweetConfirm } from "../../helper/sweet";

const Header = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const logoutUser = (e) => {
    e.preventDefault();
    sweetConfirm(() => {
      dispatch(logout());
      props.history.replace("/login");
    });
  };
  return (
    <header className="header-area">
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="breaking-news-area d-flex align-items-center">
                <div className="news-title">
                  <p>Breaking News:</p>
                </div>
                <div id="breakingNewsTicker" className="ticker">
                  <OwlCarousel
                    className="twitter-slides owl-carousel"
                    loop
                    autoplay
                    autoplayTimeout={4000}
                    smartSpeed={1000}
                    autoplayHoverPause
                    items={1}
                    margin={0}
                    dots={false}
                  >
                    <Link to="single-post.html">
                      10 Things Amazon Echo Can Do
                    </Link>
                    <Link to="single-post.html">
                      Welcome to Colorlib Family.
                    </Link>
                    <Link to="single-post.html">
                      Boys 'doing well' after Thai
                    </Link>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="top-meta-data d-flex align-items-center justify-content-end">
                <div className="top-social-info">
                  <Link to="#">
                    <i className="fa fa-facebook"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-pinterest"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa fa-youtube-play"></i>
                  </Link>
                </div>
                <div className="top-search-area">
                  <form action="index.html" method="post">
                    <input
                      type="search"
                      name="top-search"
                      id="topSearch"
                      placeholder="Search..."
                    />
                    <button type="submit" className="btn">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
                <Link to="login.html" className="login-btn">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vizew-main-menu" id="sticker">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            <nav
              className="classy-navbar justify-content-between"
              id="vizewNav"
            >
              <Link to="/" className="nav-brand">
                <img src="img/core-img/logo.png" alt="" />
              </Link>
              <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div className="classy-menu">
                <div className="classycloseIcon">
                  <div className="cross-wrap">
                    <span className="top"></span>
                    <span className="bottom"></span>
                  </div>
                </div>
                <div className="classynav">
                  <ul>
                    <li className="active">
                      <Link to="/">ANA SƏHİFƏ</Link>
                    </li>
                    <li>
                      <Link to="index.html">İSLAM</Link>
                    </li>
                    <li>
                      <Link to="index.html">AYƏTLƏR</Link>
                    </li>
                    <li>
                      <Link to="index.html">HƏDİSLƏR</Link>
                    </li>
                    <li>
                      <Link to="index.html">KEÇİDLƏR</Link>
                    </li>
                    <li>
                      <Link to="archive-list.html">AXTARIŞ</Link>
                    </li>
                    <li>
                      <Link to="#">HESAB</Link>
                      <ul className="dropdown">
                        {user ? (
                          <Fragment>
                            {(user.role === 0 || user.role === 1) &&
                                  <li>
                                    <Link to="/admin">ADMİN PANEL</Link>
                                  </li>
                                }
                            <li>
                              <Link to="/register">ŞƏXSİ MƏLUMATLAR</Link>
                            </li>
                            <li>
                              <Link to="/register">BAXILANLAR</Link>
                            </li>
                            <li>
                              <Link to="/register">BƏYƏNİLƏNLƏR</Link>
                            </li>
                            <li>
                              <a href="#" onClick={logoutUser}>
                                ÇIXIŞ
                              </a>
                            </li>
                          </Fragment>
                        ) : (
                          <Fragment>
                            <li>
                              <Link to="/register">QEYDİYYAT</Link>
                            </li>
                            <li>
                              <Link to="/login">GİRİŞ</Link>
                            </li>
                          </Fragment>
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
