import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../helper/functions'
import ButtonAccordingTag from '../UI/ButtonAccordingTag'

const ListModel = ({ id, author_id, image, title, full_name, subject, created_at, updated_at, comments, views, likes, tags, noMargin }) => {
    return (
        <div className={`single-post-area style-2 ${!noMargin ? 'ml-3' : ''}`}>
            <div className="row align-items-center">
                <div className="col-12 col-md-6">
                    <div className="post-thumbnail">
                        <img src={image} alt="Something" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="post-content mt-0">
                        {<ButtonAccordingTag tags={tags} />}
                        <Link to={`/single-article/${id}`} className="post-title mb-2">{title}</Link>
                        <div className="post-meta d-flex align-items-center mb-2">
                            <Link to={`/single-article/${id}`} className="post-author">{full_name}</Link>
                            <i className="fa fa-circle" aria-hidden="true"></i>
                            <Link to={`/single-article/${id}`} className="post-date">{formatDate(updated_at ? updated_at : created_at)}</Link>
                        </div>
                        <p className="mb-2">{subject}</p>
                        <div className="post-meta d-flex">
                            <Link to={`/single-article/${id}`}><i className="fa fa-comments-o" aria-hidden="true"></i> {comments}</Link>
                            <Link to={`/single-article/${id}`}><i className="fa fa-eye" aria-hidden="true"></i> {views}</Link>
                            <Link to={`/single-article/${id}`}><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {likes}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListModel
