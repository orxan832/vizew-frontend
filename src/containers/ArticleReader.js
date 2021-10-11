import React, { useEffect, useState } from 'react';
import axios from '../helper/axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { info } from '../helper/notification';

//Pieces
import Navigation from '../components/articleReader/navigation';
import ReaderModel from '../components/articleModels/readerModel';
import ArticleDetails from '../components/articleReader/articleDetails';
import { Fragment } from 'react';
import { commentSituationSelector } from '../redux/reselects/reader';
import Loader from '../components/UI/Loader';

const Reader = () => {

    const [articles, setArticles] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const { articleId } = params;
    const { commentSituation, tags, userId } = useSelector(commentSituationSelector);

    useEffect(() => {
        const getData = async () => {
            try {
                if (tags) {
                    const getArticles = await axios.post(`/article/checkViewAndGetArticle/`, { articleId, userId });
                    if (userId) {
                        const isLikedArticle = await axios.get(`/article/isLikedArticle/${articleId}/${userId}`);
                        setIsLiked(isLikedArticle.data ? true : false);
                    }
                    setArticles(getArticles.data)
                    setLoading(false);
                }
            } catch (err) {
                console.error(err);
            }
        }

        getData();
    }, [tags]);

    useEffect(() => {
        if (commentSituation) {
            const newArticles = [...articles];
            switch (commentSituation.process) {
                case 'saved':
                    newArticles[0].comments = newArticles[0].comments + 1;
                    break;
                case 'deleted':
                    newArticles[0].comments = newArticles[0].comments - 1;
                    break;
                default:
                    break;
            }
            setArticles(newArticles);
        }
    }, [commentSituation, articles]);

    const changeLike = async () => {
        try {
            if (!userId) {
                info('Xahiş edirik məqaləni bəyənmək üçün giriş edin!');
                return false;
            }
            await setIsLiked(like => !like);
            const res = await axios.post('/article/changeLike', { articleId, userId, isLiked });
            if (!res.data) return await setIsLiked(like => !like);
            else {
                const newArticles = [...articles];
                newArticles[0].likes = isLiked ? newArticles[0].likes - 1 : newArticles[0].likes + 1;
                setArticles(newArticles);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        loading ? <Loader /> : articles.length && <Fragment>
            <Navigation title={articles[0].title} />
            {articles.length > 2 &&
                <div className="vizew-pager-area">
                    <div className="vizew-pager-prev">
                        <p>PREVIOUS ARTICLE</p>
                        <ReaderModel tags={tags} userId={userId} article={articles[1]} />
                    </div>
                    <div className="vizew-pager-next">
                        <p>NEXT ARTICLE</p>
                        <ReaderModel tags={tags} userId={userId} article={articles[2]} />
                    </div>
                </div>
            }
            <ArticleDetails article={articles[0]} tags={tags} isLiked={isLiked} changeLike={changeLike} />
        </Fragment>
    )
}

export default Reader;