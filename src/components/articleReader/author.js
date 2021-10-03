import React from 'react';
import { Link } from 'react-router-dom';

const Author = props => {
    const { article } = props;
    return (
        <div className="single-widget p-0 author-widget mb-50">
            <div className="p-4">
                <img className="author-avatar" src={article.user_image} alt='fds' />
                <Link to="#" className="author-name">{article.full_name}</Link>
                <small className="font-italic">{article.profession}</small>
                <div className="author-social-info">
                    <Link to={{ pathname: article.facebook }} target="_blank" title='Facebook'><i className="fa fa-facebook" /></Link>
                    <Link to={{ pathname: article.twitter }} target="_blank" title='Twitter'><i className="fa fa-twitter" /></Link>
                </div>
                <p className='font-italic'>{article.about}</p>
            </div>
        </div>
    )
}

export default Author;