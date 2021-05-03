import React from 'react';

const Tag = props => {
    console.log(props.data);
    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Teq</label>
                <input
                    type="text"
                    className="form-control bg-outline-white"
                    name="type"
                    value={props.data?.type}
                    onChange={props.onChange} />
            </div>
            <button type="submit" className="btn btn-success float-right">Yadda Saxla</button>
        </form>
    )
}

export default Tag;