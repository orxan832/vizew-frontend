import React from 'react';
import Select from 'react-select';

const AdminSelect = props => {
    return (
        <Select
            isMulti
            className='text-dark'
            options={props.options}
            placeholder='Teqlər...'
            onChange={props.changed}
            value={props.value}
        />
    )
}

export default AdminSelect;