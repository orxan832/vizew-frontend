import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../../helper/axios';
import { formatDate } from '../../helper/functions';
import { initSocket } from '../../helper/socket';
import { error, info } from '../../helper/notification';
import { MdClear } from 'react-icons/md';
import { sweetConfirm } from '../../helper/sweet';
import { setState } from '../../redux/actions/common';

const Comment = props => {

    const { articleId } = props;

    const [comments, setComments] = useState(false);

    const comment = useRef('');

    const { id, full_name } = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const socket = useMemo(() => initSocket(), []);

    const getComments = useCallback(async () => {
        const res = await axios.get(`/article/getComments/${articleId}`);
        res.data.length > 0 && setComments(res.data);
    }, [articleId]);

    useEffect(() => {
        socket.on('saved', async resultData => {
            if (resultData.insertId) {
                const data = { id: resultData.insertId, user_id: resultData.userId, article_id: articleId, comment: resultData.comment, comment_date: new Date(), commentator: resultData.full_name, };
                await setComments(prev => ([...prev, data]));
                dispatch(setState('commentSituation', { process: 'saved', insertId: resultData.insertId }));
                comment.current.value = '';
            }
        });

        socket.on('deleted', async id => {
            if (id) {
                await setComments(prev => (prev.filter(comment => comment.id !== id)));
                dispatch(setState('commentSituation', { process: 'deleted', id }));
                comment.current.value = '';
            }
        });

        getComments();
        return () => socket.disconnect();
    }, [getComments, articleId, dispatch, socket]);

    const renderComments = () => (
        comments ?
            <ul>
                {comments.map(item => <li key={item.id} className="single_comment_area">
                    <div className='d-flex justify-content-between'>
                        <div className="comment-content d-flex">
                            <div className="comment-meta">
                                <Link to="#" className="comment-date">{formatDate(item.comment_date)}</Link>
                                <h6>{item.user_id === id ? 'Sən' : item.commentator}</h6>
                                <p>{item.comment}</p>
                            </div>
                        </div>
                        {item.user_id === id && <MdClear size='1.5rem' className='comment-delete-icon' title='Şərhi sil' onClick={() => deleteHandler(item.id)} />}
                    </div>
                </li>)}
            </ul> : <h6 className="text-center font-italic">Hələki bu məqalə üçün şərh yoxdur.</h6>)


    const deleteHandler = id => sweetConfirm(async () => {
        await socket.emit('delete', id);
    })

    const submitHandler = e => {
        e.preventDefault();
        if (!id) {
            error('Zəhmət olmasa şərh yazmaq üçün giriş edin.');
            return;
        }
        if (comment !== '') {
            const data = { userId: id, articleId, comment: comment.current.value, full_name };
            socket.emit('save', data);
        } else {
            info('Zəhmət olmasa şərhinizi yazın.')
        }
    }

    return (
        <Fragment>
            <div className="comment_area clearfix mb-50">
                <div className="section-heading style-2">
                    <h4>Şərhlər</h4>
                    <div className="line" />
                </div>
                {renderComments()}
            </div>
            <div className="post-a-comment-area">
                <div className="section-heading style-2">
                    <h4>Şərhini bildir</h4>
                    <div className="line" />
                </div>
                <div className="contact-form-area">
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={submitHandler}>
                                <input type="text" ref={comment} className="vizew form-control" placeholder="Şərhi yazdıqdan sonra Enter düyməsinə sıxın*" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Comment;