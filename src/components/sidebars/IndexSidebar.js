import React from 'react';

const IndexSidebar = ({ data }) => {
    return (
        <div className="sidebar-sticky">
            {/* ***** Single Widget ***** */}
            <div className="single-widget">
                {/* Section Heading */}
                <div className="section-heading style-2 mb-30">
                    <h4>Bir ayə</h4>
                    <div className="line" />
                </div>
                {/* Single Blog Post */}
                <div className="single-post-area">
                    <div className="post-content">
                        <h5 className="font-weight-bold text-center">{data[0].ayahOrHadith}</h5>
                        <div className='font-italic text-center '>({data[0].source})</div>
                    </div>
                </div>
            </div>
            {/* ***** Single Widget ***** */}
            <div className="single-widget mt-2">
                {/* Section Heading */}
                <div className="section-heading style-2 mb-30">
                    <h4>Bir hədis</h4>
                    <div className="line" />
                </div>
                {/* Single Blog Post */}
                <div className="single-post-area">
                    <div className="post-content">
                        <h5 className="font-weight-bold text-center">{data[1].ayahOrHadith}</h5>
                        <div className='font-italic text-center '>({data[1].source})</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexSidebar;