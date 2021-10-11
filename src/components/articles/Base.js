import React from "react";
import { Link } from "react-router-dom";
import ButtonAccordingTag from '../UI/ButtonAccordingTag';

const Base = props => {

  const { data } = props;

  return (
    <section className="hero--area section-padding-80">
      <div className="section-heading">
        <h4>Ən çox bəyənilənlər</h4>
        <div className="line" />
      </div>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-12 col-md-7 col-lg-8">
            <div className="tab-content">
              {data.map((d, i) =>
                <div className={`tab-pane fade ${i === 0 && "show active"}`} id={`post-${i + 1}`} role="tabpanel" aria-labelledby={`post-${i + 1}-tab`} key={i}>
                  {/* Single Feature Post */}
                  <div className="single-feature-post video-post bg-img" style={{ backgroundImage: `url(${d.image})` }}>
                    {/* Post Content */}
                    <div className="post-content">
                      <ButtonAccordingTag tags={d.tags} />
                      <Link to={`/single-article/${d.id}`} className="post-title">{d.subject}</Link>
                      <div className="post-meta d-flex">
                        <Link to={`/single-article/${d.id}`}><i className="fa fa-comments-o" aria-hidden="true" />{" "}{d.comments}</Link>
                        <Link to={`/single-article/${d.id}`}><i className="fa fa-eye" aria-hidden="true" />{" "}{d.views}</Link>
                        <Link to={`/single-article/${d.id}`}><i className="fa fa-thumbs-o-up" aria-hidden="true" />{" "}{d.likes}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <ul className="nav vizew-nav-tab" role="tablist">
              {props.data.map((d, i) => (
                <li className="nav-item" key={i}>
                  <a
                    className={`nav-link base-a ${i === 0 && "active"}`}
                    id={`post-${i + 1}-tab`}
                    data-toggle="pill"
                    href={`#post-${i + 1}`}
                    role="tab"
                    aria-controls={`post-${i + 1}`}
                    aria-selected="true"
                  >
                    {/* Single Blog Post */}
                    <div className="single-blog-post style-2 d-flex align-items-center">
                      <div className="post-thumbnail">
                        <img src={d.image} alt="Something" />
                      </div>
                      <div className="post-content">
                        <h6 className="post-title">{d.title}</h6>
                        <div className="d-flex">
                          <span className='text-white'><i className="fa fa-comments-o" aria-hidden="true" />{" "}{d.comments}</span>
                          <span className='text-white ml-3'><i className="fa fa-eye" aria-hidden="true" />{" "}{d.views}</span>
                          <span className='text-white ml-3'><i className="fa fa-thumbs-o-up" aria-hidden="true" />{" "}{d.likes}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Base;