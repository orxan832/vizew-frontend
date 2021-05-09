import React, { useEffect, useState } from 'react';
import axios from '../../helper/axios';
import { validation } from '../../helper/functions';
import * as notification from '../../helper/notification';
import { sweetConfirm } from '../../helper/sweet';
import Select from '../elements/Select';

const Link = props => {

    const [form, setForm] = useState(props.form);
    const [tagSelect, setTagSelect] = useState([]);
    const [tagOptions, setTagOptions] = useState([]);

    const getData = async () => {
        const { tags } = props;
        const tagSelectData = [];
        const tagOptions = [];
        tags.map(d => tagSelectData.push({ label: d.tag, value: d.id }));
        setTagSelect(tagSelectData);
        if (form.control === 2) {
            form.tags.split(',').map(tag => {
                const data = tags.find(d => d.id === Number(tag));
                tagOptions.push({ label: data.tag, value: data.id });
            })
            setTagOptions(tagOptions);
        }
    }

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const selectChangeHandler = option => {
        setTagOptions(option);
    }

    const onSubmit = e => {
        e.preventDefault();
        const { tabId, headers, modalHeader, getData, modalHandler } = props;
        const tagsArray = [];
        tagOptions.map(option => tagsArray.push(option.value));
        const tags = tagsArray.toString();
        form.tags = tags;
        const tab = tabId.split("-")[2];
        const access = validation(form, headers);
        if (access) {
            sweetConfirm(async () => {
                await axios.post(`/${tab}/CRUD`, { ...form });
                getData(tabId, modalHeader)
                modalHandler();
                notification.success(`Məlumat müvəffəqiyyətlə ${form.control === 1 ? 'əlavə olundu' : 'dəyişdirildi'}.`);
            });
        } else {
            notification.error('Xanaları tam şəkildə doldurun!');
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    name='format'
                    placeholder='Format'
                    value={form.format || ''}
                    onChange={changeHandler} />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    name='link'
                    placeholder='Keçid'
                    value={form.link || ''}
                    onChange={changeHandler} />
            </div>
            <Select
                options={tagSelect}
                changed={selectChangeHandler}
                value={tagOptions}
            />
            <button type="submit" className="btn btn-success float-right mt-3">Yadda Saxla</button>
        </form>
    )
}

export default Link;