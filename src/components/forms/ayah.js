import React, { useEffect, useState } from 'react';
import axios from '../../helper/axios';
import * as notification from '../../helper/notification';
import { sweetConfirm } from '../../helper/sweet';
import Select from 'react-select';

const Ayah = props => {

    const [formData, setFormData] = useState(props.formData);
    const [types, setTypes] = useState([]);
    const [typeOptions, setTypeOptions] = useState([]);

    const changeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const selectChangeHandler = option => {
        setTypeOptions(option);
    }

    const onSubmit = e => {
        e.preventDefault();
        const typesArray = [];
        typeOptions.map(option => typesArray.push(option.value));
        const types = typesArray.toString();
        const tab = props.tabId.split("-")[2];
        sweetConfirm(async () => {
            await axios.post(`/${tab}/CRUD`, { ...formData, types });
            props.refresh();
            props.hide();
            notification.success("Məlumat müvəffəqiyyətlə əlavə olundu.");
        });
    }

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('/type/data');
            const types = [];
            const typeOptions = [];
            res.data.map(d => types.push({ label: d.type, value: d.id }));
            setTypes(types);
            if (formData.control === 2) {
                formData.types.split(',').map(type => {
                    const data = res.data.find(d => d.id === Number(type));
                    typeOptions.push({ label: data.type, value: data.id });
                })
                setTypeOptions(typeOptions);
            }
        }
        getData();
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <textarea
                    rows='4'
                    className="form-control"
                    name='ayah'
                    placeholder='Ayət'
                    value={formData.ayah || ''}
                    onChange={changeHandler} />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    name='source'
                    placeholder='Mənbə'
                    value={formData.source || ''}
                    onChange={changeHandler} />
            </div>
            <Select
                isMulti
                options={types}
                placeholder='Teqlər...'
                onChange={selectChangeHandler}
                value={typeOptions}
            />
            <button type="submit" className="btn btn-success float-right mt-3">Yadda Saxla</button>
        </form>
    )
}

export default Ayah;