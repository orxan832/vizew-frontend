import React, { useState } from 'react';
import axios from '../../helper/axios';
import * as notification from '../../helper/notification';
import { sweetConfirm } from '../../helper/sweet';

const Tag = props => {

    const [formData, setFormData] = useState(props.formData);

    const changeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        const tab = props.tabId.split("-")[2];
        sweetConfirm(async () => {
            await axios.post(`/${tab}/CRUD`, { ...formData });
            props.refresh();
            props.hide();
            notification.success("Məlumat müvəffəqiyyətlə əlavə olundu.");
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control bg-outline-white"
                    name="type"
                    placeholder="Teq"
                    value={formData.type || ''}
                    onChange={changeHandler} />
            </div>
            <button type="submit" className="btn btn-success float-right">Yadda Saxla</button>
        </form>
    )
}

export default Tag;