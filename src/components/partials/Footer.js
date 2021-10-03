import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    {/* Footer Widget Area */}
                    <div className="col-12 col-sm-4">
                        <div className="footer-widget mb-70">
                            <h6 className="widget-title">Xidmətlərimiz</h6>
                            {/* Contact Address */}
                            <div className="contact-address">
                                <p>Faydalı Group şirkəti olaraq</p>
                                <p>bir çox IT xidmətləri göstəririk.</p>
                                <p>Sizə də xidmət göstərməkdən</p>
                                <p>məmnun olarıq.</p>
                            </div>
                        </div>
                    </div>
                    {/* Footer Widget Area */}
                    <div className="col-12 col-sm-4">
                        <div className="footer-widget mb-70">
                            <h6 className="widget-title">Bizə yazın</h6>
                            {/* Contact Address */}
                            <div className="contact-address">
                                <p>Sizə göstərdiyimiz poçt ünvanı vasitəsilə</p>
                                <p>bizimlə əlaqə qura bilərsiniz.</p>
                                <p>İstədiyiniz tərzdə web saytları </p>
                                <p>münasib qiymətə əldə edə bilərsiniz</p>
                            </div>
                        </div>
                    </div>
                    {/* Footer Widget Area */}
                    <div className="col-12 col-sm-4">
                        <div className="footer-widget mb-70">
                            <h6 className="widget-title">Əlaqə məlumatları</h6>
                            {/* Contact Address */}
                            <div className="contact-address">
                                <p>Bakı, Azərbaycan</p>
                                <p>Poçt ünvanı: orxan832@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copywrite Area */}
            <div className="copywrite-area">
                <div className="container">
                    <div className="row">
                        {/* Copywrite Text */}
                        <div className="col-sm-12 d-flex flex-column flex-md-row justify-content-md-between text-center">
                            <p className="copywrite-text">Bütün hüquqlar Faydalı Group şirkəti tərəfindən qorunur</p>
                            <p className="copywrite-text">
                                Dizayn üçün mənbə: <i className="fa fa-heart-o" aria-hidden="true"></i> by <Link to={{ pathname: 'https://colorlib.com' }} target="_blank">Colorlib</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;