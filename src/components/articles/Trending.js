import React from 'react';
import MainModel from '../articleModels/mainModel';

const Trending = props => {

    const renderArticles = () => props.data.map(d => <MainModel key={d.id} {...d} column='4' />)

    return (
        <section className="trending-posts-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Section Heading */}
                        <div className="section-heading">
                            <h4>Ən çox baxılanlar</h4>
                            <div className="line" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {renderArticles()}
                </div>
            </div>
        </section>
    )
}

export default Trending;