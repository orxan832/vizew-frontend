import React, { Fragment } from 'react';
import ListModel from '../articleModels/listModel';

const Latest = props => {

    const renderArticles = () => props.data.map(d => <ListModel key={d.id} {...d} noMargin={true} />)

    return (
        <Fragment>
            <div className="section-heading style-2" >
                <h4>Son məqalələr</h4>
                <div className="line" />
            </div>
            {renderArticles()}
        </Fragment>
    )
}

export default Latest;