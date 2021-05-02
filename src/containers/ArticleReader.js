import React, { Component } from 'react';
import axios from '../helper/axios';
import { Link } from 'react-router-dom';
import { getRandomColor, formatDate } from '../helper/functions';
import { isEmptyObject } from 'jquery';
import { connect } from 'react-redux';
import { info } from '../helper/notification';

class ArticleReader extends Component {

    state = {
        article: {},
        like: false
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            const { id } = this.props.match.params;
            const { userId } = this.props;
            const result = await axios.get(`/article/checkViewAndGetArticle/${userId}/${id}`);
            const { article, like } = result.data;
            this.setState({ article, like }, console.log(like));
        } catch (err) {
            console.error(err);
        }
    }

    getTypeButtons = () => {
        const { article } = this.state;
        if (!isEmptyObject(article)) {
            const buttons = article.types.split(',');
            return buttons.map((b, i) => {
                const backgroundColor = getRandomColor();
                return (
                    <Link to="#" className="post-cata cata-sm mx-1" style={{ backgroundColor }} key={i}>{b}</Link>
                )
            });
        }
    }

    changeLike = async () => {
        try {
            const { id } = this.props.match.params;
            const { userId } = this.props;
            if (!userId) {
                info('Xahiş edirik məqaləni bəyənmək üçün giriş edin!');
                return false;
            }
            this.setState({ like: !this.state.like, });
            const result = await axios.get(`/article/insertOrDeleteLike/${userId}/${id}`);
            if (result.status !== 200) {
                this.setState({ like: !this.state.like });
                return false;
            }
            this.getData();
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const { article, like } = this.state;
        return (
            <div>
                <div className="vizew-breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home" aria-hidden="true" /> Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{article.title}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vizew-pager-area">
                    <div className="vizew-pager-prev">
                        <p>PREVIOUS ARTICLE</p>
                        <div className="single-feature-post video-post bg-img pager-article" style={{ backgroundImage: `url(${article.image})` }}>
                            <div className="post-content">
                                <Link to="#" className="post-cata cata-sm cata-danger">Game</Link>
                                <Link to="video-post.html" className="post-title">Searching for the 'angel' who held me on Westminster Bridge</Link>
                                <div className="post-meta d-flex">
                                    <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 18</Link>
                                    <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 32</Link>
                                    <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 24</Link>
                                </div>
                            </div>
                            <span className="video-duration">11.13</span>
                        </div>
                    </div>
                    <div className="vizew-pager-next">
                        <p>NEXT ARTICLE</p>
                        <div className="single-feature-post video-post bg-img pager-article" style={{ backgroundImage: `url(${article.image})` }}>
                            <div className="post-content">
                                <Link to="#" className="post-cata cata-sm cata-business">Business</Link>
                                <Link to="video-post.html" className="post-title">Reunification of migrant toddlers, parents should be completed Thursday</Link>
                                <div className="post-meta d-flex">
                                    <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 25</Link>
                                    <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 25</Link>
                                    <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 25</Link>
                                </div>
                            </div>
                            <span className="video-duration">06.59</span>
                        </div>
                    </div>
                </div>
                <section className="post-details-area mb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="post-details-thumb mb-50">
                                    <img src={article.image} alt='df' />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8 col-xl-7">
                                <div className="post-details-content">
                                    <div className="blog-content">
                                        <div className="post-content mt-0">
                                            {this.getTypeButtons()}
                                            <Link to="single-post.html" className="post-title mb-2">{article.subject}</Link>
                                            <div className="d-flex justify-content-between mb-30">
                                                <div className="post-meta d-flex align-items-center">
                                                    <Link to="#" className="post-author">{article.author}</Link>
                                                    <i className="fa fa-circle" aria-hidden="true" />
                                                    <Link to="#" className="post-date">{formatDate(article.updatedAt)}</Link>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className='article-i-span px-2'><i className="fa fa-comments-o" aria-hidden="true" /> {article.comments}</span>
                                                    <span className='article-i-span px-2'><i className="fa fa-eye" aria-hidden="true" /> {article.views}</span>
                                                    <span className='article-i-span px-2' style={{ color: like && ' #db4437' }} onClick={this.changeLike}><i className="fa fa-thumbs-o-up" aria-hidden="true" /> {article.likes}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='ck-content' dangerouslySetInnerHTML={{ __html: article.article }}></div>
                                        <div className="post-tags mt-30">
                                            <ul>
                                                <li><Link to="#">HealthFood</Link></li>
                                                <li><Link to="#">Sport</Link></li>
                                                <li><Link to="#">Game</Link></li>
                                            </ul>
                                        </div>
                                        <div className="vizew-post-author d-flex align-items-center py-5">
                                            <div className="post-author-thumb">
                                                <img src="img/bg-img/30.jpg" alt='fd' />
                                            </div>
                                            <div className="post-author-desc pl-4">
                                                <Link to="#" className="author-name">Calantha Flower</Link>
                                                <p>Hello! My name is Nicolas Sarkozy. I’m a web designer and front-end web developer with over fifteen years of professional.</p>
                                                <div className="post-author-social-info">
                                                    <Link to="#"><i className="fa fa-facebook" /></Link>
                                                    <Link to="#"><i className="fa fa-twitter" /></Link>
                                                    <Link to="#"><i className="fa fa-pinterest" /></Link>
                                                    <Link to="#"><i className="fa fa-linkedin" /></Link>
                                                    <Link to="#"><i className="fa fa-dribbble" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="related-post-area mt-5">
                                            <div className="section-heading style-2">
                                                <h4>Related Post</h4>
                                                <div className="line" />
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <div className="single-post-area mb-50">
                                                        <div className="post-thumbnail">
                                                            <img src="img/bg-img/11.jpg" alt='dsf' />
                                                            <span className="video-duration">05.03</span>
                                                        </div>
                                                        <div className="post-content">
                                                            <Link to="#" className="post-cata cata-sm cata-success">Sports</Link>
                                                            <Link to="single-post.html" className="post-title">Warner Bros. Developing ‘The accountant’ Sequel</Link>
                                                            <div className="post-meta d-flex">
                                                                <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 22</Link>
                                                                <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 16</Link>
                                                                <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 15</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="single-post-area mb-50">
                                                        <div className="post-thumbnail">
                                                            <img src="img/bg-img/12.jpg" alt='dfs' />
                                                            <span className="video-duration">05.03</span>
                                                        </div>
                                                        <div className="post-content">
                                                            <Link to="#" className="post-cata cata-sm cata-danger">Game</Link>
                                                            <Link to="single-post.html" className="post-title">Searching for the 'angel' who held me on Westminste</Link>
                                                            <div className="post-meta d-flex">
                                                                <Link to="#"><i className="fa fa-comments-o" aria-hidden="true" /> 28</Link>
                                                                <Link to="#"><i className="fa fa-eye" aria-hidden="true" /> 17</Link>
                                                                <Link to="#"><i className="fa fa-thumbs-o-up" aria-hidden="true" /> 22</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment_area clearfix mb-50">
                                            <div className="section-heading style-2">
                                                <h4>Comment</h4>
                                                <div className="line" />
                                            </div>
                                            <ul>
                                                <li className="single_comment_area">
                                                    <div className="comment-content d-flex">
                                                        <div className="comment-author">
                                                            <img src="img/bg-img/31.jpg" alt="author" />
                                                        </div>
                                                        <div className="comment-meta">
                                                            <Link to="#" className="comment-date">27 Aug 2019</Link>
                                                            <h6>Tomas Mandy</h6>
                                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius</p>
                                                            <div className="d-flex align-items-center">
                                                                <Link to="#" className="like">like</Link>
                                                                <Link to="#" className="reply">Reply</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ol className="children">
                                                        <li className="single_comment_area">
                                                            <div className="comment-content d-flex">
                                                                <div className="comment-author">
                                                                    <img src="img/bg-img/32.jpg" alt="author" />
                                                                </div>
                                                                <div className="comment-meta">
                                                                    <Link to="#" className="comment-date">27 Aug 2019</Link>
                                                                    <h6>Britney Millner</h6>
                                                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius</p>
                                                                    <div className="d-flex align-items-center">
                                                                        <Link to="#" className="like">like</Link>
                                                                        <Link to="#" className="reply">Reply</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li className="single_comment_area">
                                                    <div className="comment-content d-flex">
                                                        <div className="comment-author">
                                                            <img src="img/bg-img/33.jpg" alt="author" />
                                                        </div>
                                                        <div className="comment-meta">
                                                            <Link to="#" className="comment-date">27 Aug 2019</Link>
                                                            <h6>Simon Downey</h6>
                                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius</p>
                                                            <div className="d-flex align-items-center">
                                                                <Link to="#" className="like">like</Link>
                                                                <Link to="#" className="reply">Reply</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="post-a-comment-area">
                                            <div className="section-heading style-2">
                                                <h4>Leave a reply</h4>
                                                <div className="line" />
                                            </div>
                                            <div className="contact-form-area">
                                                <form action="#" method="post">
                                                    <div className="row">
                                                        <div className="col-12 col-lg-6">
                                                            <input type="text" className="form-control" id="name" placeholder="Your Name*" />
                                                        </div>
                                                        <div className="col-12 col-lg-6">
                                                            <input type="email" className="form-control" id="email" placeholder="Your Email*" />
                                                        </div>
                                                        <div className="col-12">
                                                            <textarea name="message" className="form-control" id="message" placeholder="Message*" defaultValue={""} />
                                                        </div>
                                                        <div className="col-12">
                                                            <button className="btn vizew-btn mt-30" type="submit">Submit Comment</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="sidebar-area">
                                    <div className="single-widget p-0 author-widget mb-50">
                                        <div className="p-4">
                                            <img className="author-avatar" src="img/bg-img/30.jpg" alt='fds' />
                                            <Link to="#" className="author-name">Chris Hemsworth</Link>
                                            <div className="author-social-info">
                                                <Link to="#"><i className="fa fa-facebook" /></Link>
                                                <Link to="#"><i className="fa fa-twitter" /></Link>
                                                <Link to="#"><i className="fa fa-pinterest" /></Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                        </div>
                                        <div className="authors--meta-data d-flex">
                                            <p>Posted<span className="counter">80</span></p>
                                            <p>Comments<span className="counter">230</span></p>
                                        </div>
                                    </div>
                                    <div className="single-widget share-post-widget">
                                        <p>Share This Post</p>
                                        <Link to="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true" /> Facebook</Link>
                                        <Link to="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true" /> Twitter</Link>
                                        <Link to="#" className="google"><i className="fa fa-google" aria-hidden="true" /> Google+</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.user.userId
    }
}

export default connect(mapStateToProps)(ArticleReader);