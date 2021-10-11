import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAccordingTag from '../UI/ButtonAccordingTag';

const ReaderModel = props => {
    const { article } = props;
    console.log(article);
    return (
        <div className="single-feature-post video-post bg-img pager-article" style={{ backgroundImage: `url(${article.image})` }}>
            <div className="post-content">
                {<ButtonAccordingTag tags={article.tags} />}
                <Link to={`/single-article/${article.id}/${article.author_id}`} className="post-title">{article.subject}</Link>
                <div className="post-meta d-flex">
                    <Link to={`/single-article/${article.id}/${article.author_id}`}><i className="fa fa-comments-o" aria-hidden="true" /> {article.comments}</Link>
                    <Link to={`/single-article/${article.id}/${article.author_id}`}><i className="fa fa-eye" aria-hidden="true" /> {article.views}</Link>
                    <Link to={`/single-article/${article.id}/${article.author_id}`}><i className="fa fa-thumbs-o-up" aria-hidden="true" /> {article.likes}</Link>
                </div>
            </div>
        </div>
    )
}

export default ReaderModel;