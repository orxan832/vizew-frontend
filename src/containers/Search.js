import React, { Fragment, useCallback, useEffect, useState } from 'react';
import MainModel from '../components/articleModels/mainModel';
import Navigation from '../components/articleReader/navigation';
import SearchSidebar from '../components/sidebars/SearchSidebar';
import ReactPaginate from 'react-paginate';
import axios from '../helper/axios';
import ListModel from '../components/articleModels/listModel';
import { Link } from 'react-router-dom';
import Loader from '../components/UI/Loader';

const PER_PAGE = 10;

const Search = () => {

    const [articles, setArticles] = useState(false);
    const [authors, setAuthors] = useState(false);
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [modelMold, setModelMold] = useState('grid');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const getArticles = axios.get('/article/data');
            const getAuthors = axios.get('/user/getAuthors');
            const [getArticlesPromise, getAuthorsPromise] = await Promise.all([getArticles, getAuthors]);
            setArticles(getArticlesPromise.data);
            setAuthors(getAuthorsPromise.data);
            setPageCount(Math.ceil(getArticlesPromise.data.length / PER_PAGE));
            setLoading(false);
        }

        getData();
    }, []);

    const renderData = () => {
        const slice = articles.slice(offset, offset + PER_PAGE);
        if (modelMold === 'grid') return slice.map(item => <MainModel key={item.id} {...item} />);
        else return slice.map(item => <ListModel key={item.id} {...item} />);
    }

    const changeMoldHandler = mold => setModelMold(mold);

    const changePageHandler = e => {
        const selectedPage = e.selected;
        const pageOffset = selectedPage * PER_PAGE;
        setOffset(pageOffset);
    };

    const searchFilteredData = useCallback(async (tags, authors) => {
        setLoading(true);
        const res = await axios.post('/article/filteredData', { tags, authors });
        setArticles(res.data);
        setLoading(false);
    }, []);

    return (
        <Fragment>
            {loading && <Loader />}
            <Navigation title="Axtarış" />
            <div className="vizew-grid-posts-area mb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="archive-catagory-view mb-50 d-flex align-items-center justify-content-between">
                                <div className="archive-catagory">
                                    <h4><i className="fa fa-book" aria-hidden="true"></i> Məqalələr - {articles.length} ədəd</h4>
                                </div>
                                <div className="view-options">
                                    <Link to="#" className={`${modelMold === 'grid' ? 'active' : ''}`} onClick={() => changeMoldHandler('grid')}><i className="fa fa-th-large" aria-hidden="true"></i></Link>
                                    <Link to="#" className={`${modelMold === 'list' ? 'active' : ''} ml-1`} onClick={() => changeMoldHandler('list')}><i className="fa fa-list-ul" aria-hidden="true"></i></Link>
                                </div>
                            </div>

                            <div className="row">
                                {articles && renderData()}
                            </div>
                            <nav className={`mt-50 d-flex justify-content-center ${articles.length === 0 ? 'invisible' : ''}`}>
                                <ReactPaginate
                                    previousLabel={"prev"}
                                    nextLabel={"next"}
                                    breakLabel={"..."}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={changePageHandler}
                                    breakClassName={'page-item'}
                                    breakLinkClassName={'page-link'}
                                    containerClassName={'pagination'}
                                    pageClassName={'page-item'}
                                    pageLinkClassName={'page-link'}
                                    previousClassName={'page-item'}
                                    previousLinkClassName={'page-link'}
                                    nextClassName={'page-item'}
                                    nextLinkClassName={'page-link'}
                                    activeClassName={'active'} />
                            </nav>
                        </div>
                        {authors && <SearchSidebar authors={authors} search={searchFilteredData} />}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Search;