import React, { useState } from 'react';
import axios from '../../helper/axios';
import * as notification from '../../helper/notification';
import { sweetConfirm } from '../../helper/sweet';

const Tag = props => {

    const [form, setForm] = useState(props.form);
    const [loading, setLoading] = useState(false);

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        const { tabId, modalHeader, getData, modalHandler } = props;
        if (form.tag !== undefined && form.tag !== '') {
            const tab = tabId.split("-")[2];
            sweetConfirm(async () => {
                setLoading(true);
                await axios.post(`/${tab}/CRUD`, { ...form });
                getData(tabId, modalHeader)
                modalHandler();
                notification.success(`Məlumat müvəffəqiyyətlə ${form.control === 1 ? 'əlavə olundu' : 'dəyişdirildi'}.`);
                setLoading(false);
            });
        } else {
            notification.error('Xanaları tam şəkildə doldurun!');
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control bg-outline-white"
                    name="tag"
                    placeholder="Teq"
                    value={form.tag || ''}
                    onChange={changeHandler} />
            </div>
            <button type="submit" disabled={loading} className="btn btn-success float-right mt-3">{loading ? 'Gözləyin...' : 'Yadda Saxla'}</button>
        </form>
    )
}

export default Tag;