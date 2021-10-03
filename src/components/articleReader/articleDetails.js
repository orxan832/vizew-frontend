import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../helper/functions';
import ButtonAccordingTag from '../UI/ButtonAccordingTag';
import Author from './author';
import Comment from './comment';
import Share from './share';

const ArticleDetails = props => {
    const { article, isLiked, changeLike } = props;
    return (
        <section className="post-details-area mb-80">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="post-details-thumb mb-50">
                            <img src={article.image} alt='Something' />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 col-xl-7">
                        <div className="post-details-content">
                            <div className="blog-content">
                                <div className="post-content mt-0">
                                    {<ButtonAccordingTag tags={article.tags} />}
                                    <Link to="single-post.html" className="post-title mb-2">{article.subject}</Link>
                                    <div className="d-flex justify-content-between mb-30">
                                        <div className="post-meta d-flex align-items-center">
                                            <Link to="#" className="post-author">{article.full_name}</Link>
                                            <i className="fa fa-circle" aria-hidden="true" />
                                            <Link to="#" className="post-date">{formatDate(article.updated_at ? article.updated_at : article.created_at)}</Link>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className='article-i-span px-2'><i className="fa fa-comments-o" aria-hidden="true" /> {article.comments}</span>
                                            <span className='article-i-span px-2'><i className="fa fa-eye" aria-hidden="true" /> {article.views}</span>
                                            <span className='article-i-span px-2' style={{ color: isLiked && ' #db4437' }} onClick={changeLike}><i className="fa fa-thumbs-o-up" aria-hidden="true" /> {article.likes}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='ck-content' dangerouslySetInnerHTML={{ __html: article.article }}></div>
                                <Comment articleId={article.id} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div className="sidebar-area">
                            <Author article={article} />
                            <Share />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArticleDetails;