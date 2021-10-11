import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAccordingTag from '../UI/ButtonAccordingTag';

const MainModel = ({ id, author_id, image, subject, comments, views, likes, tags, column }) => {
    return (
        <div className={`col-12 col-md-${column || '6'}`}>
            <div className={`single-post-area mb-50`}>
                <div className="post-thumbnail">
                    <img src={image} alt="Something" />
                </div>
                <div className="post-content">
                    {<ButtonAccordingTag tags={tags} />}
                    <Link to={`/single-article/${id}`} className="post-title">{subject}</Link>
                    <div className="post-meta d-flex">
                        <Link to={`/single-article/${id}`}><i className="fa fa-comments-o" aria-hidden="true" /> {comments}</Link>
                        <Link to={`/single-article/${id}`}><i className="fa fa-eye" aria-hidden="true" /> {views}</Link>
                        <Link to={`/single-article/${id}`}><i className="fa fa-thumbs-o-up" aria-hidden="true" /> {likes}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainModel;