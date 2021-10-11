import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user";
import { sweetConfirm } from "../../helper/sweet";
import { useHistory } from 'react-router-dom';

const Header = () => {

  const [activeHeader, setActiveHeader] = useState('index');

  const { user } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const logoutUser = e => {
    e.preventDefault();
    sweetConfirm(() => {
      dispatch(logout());
      history.replace('/login');
    });
  };

  const changeActiveHeaderHandler = name => setActiveHeader(name);

  return (
    <header className="header-area">
      <div className="vizew-main-menu" id="sticker">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            <nav className="classy-navbar justify-content-between" id="vizewNav">
              <Link to="/" onClick={() => changeActiveHeaderHandler('index')}><h3 className='font-weight-bold mt-2'>Faydalı Məqalələr</h3></Link>
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
                    <li className={activeHeader === 'index' ? 'active' : undefined} onClick={() => changeActiveHeaderHandler('index')}><Link className='close-menu' to="/">ANA SƏHİFƏ</Link></li>
                    {/* <li className={activeHeader === 'islam' ? 'active' : undefined} onClick={() => changeActiveHeaderHandler('islam')}><Link className='close-menu' to="/religion">İSLAM</Link></li> */}
                    {/* <li className={activeHeader === 'ayahs' ? 'active' : undefined} onClick={() => changeActiveHeaderHandler('ayahs')}><Link className='close-menu' to="/ayah">AYƏTLƏR</Link></li>
                    <li className={activeHeader === 'hadiths' ? 'active' : undefined} onClick={() => changeActiveHeaderHandler('hadiths')}><Link className='close-menu' to="/hadith">HƏDİSLƏR</Link></li> */}
                    <li className={activeHeader === 'links' ? 'active' : undefined} onClick={() => changeActiveHeaderHandler('links')}><Link className='close-menu' to="/link">KEÇİDLƏR</Link></li>
                    <li className={activeHeader === 'search' ? 'active' : undefined} onClick={() => changeActiveHeaderHandler('search')}><Link className='close-menu' to="/search">AXTARIŞ</Link></li>
                    <li className={activeHeader === 'offer' ? 'active' : undefined} onClick={() => changeActiveHeaderHandler('offer')}><Link className='close-menu' to="/offer">ŞİKAYƏT VƏ TƏKLİFLƏR</Link></li>
                    <li onClick={() => changeActiveHeaderHandler('account')}>
                      <Link to="#">{user ? user.full_name.split(' ')[0] : 'HESAB'}</Link>
                      <ul className="dropdown">
                        {user ? (
                          <Fragment>
                            {(user.role === 0 || user.role === 1) &&
                              <li><Link className='close-menu' to="/admin">ADMİN PANEL</Link></li>
                            }
                            <li><Link className='close-menu' to="/user">ŞƏXSİ MƏLUMATLAR</Link></li>
                            <li><Link className='close-menu' to="#">BAXILANLAR</Link></li>
                            <li><Link className='close-menu' to="#">BƏYƏNİLƏNLƏR</Link></li>
                            <li><Link className='close-menu' to="#" onClick={logoutUser}>ÇIXIŞ</Link>
                            </li>
                          </Fragment>
                        ) : (
                          <Fragment>
                            <li><Link className='close-menu' to="/register">QEYDİYYAT</Link></li>
                            <li><Link className='close-menu' to="/login">GİRİŞ</Link></li>
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

export default Header;