import React from 'react';

const User = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-group">
                <label htmlFor="title">User</label>
                <input
                    type="text"
                    className="form-control"
                    name="type"
                    value={props.values.type || ''}
                    onChange={props.onChange} />
            </div>
            <button type="submit" className="btn btn-success float-right">Yadda Saxla</button>
        </form>
    )
}

export default User;