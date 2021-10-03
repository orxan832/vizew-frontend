import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const customStyles = {
    control: base => ({
        ...base,
        padding: '5px 0'
    }),
    menu: provided => ({ ...provided, zIndex: 9999 })
};

const firstOption = [{ label: 'Hamısı', value: '*' }];

const SearchSidebar = props => {

    const [tagOptions, setTagOptions] = useState([]);
    const [authorOptions, setAuthorOptions] = useState([]);

    const { tags } = useSelector(state => state.common);

    const fillTagsSelect = () => firstOption.concat(tags?.map(({ id, tag }) => ({ label: tag, value: id })));

    const fillAuthorsSelect = () => firstOption.concat(props.authors?.map(({ id, full_name }) => ({ label: full_name, value: id })));

    const tagsSelectChangeHandler = options => options[options.length - 1]?.value === '*' ?
        setTagOptions(options.filter(o => o.value === '*')) :
        setTagOptions(options.filter(o => o.value !== '*'));

    const authorsSelectChangeHandler = options => options[options.length - 1]?.value === '*' ?
        setAuthorOptions(options.filter(o => o.value === '*')) :
        setAuthorOptions(options.filter(o => o.value !== '*'));

    const submitHandler = () => {
        const tags = tagOptions.length === 0 ? false : (tagOptions[0]?.value === '*' ? false : tagOptions?.map(tag => tag.value));
        const authors = authorOptions.length === 0 ? false : (authorOptions[0]?.value === '*' ? false : authorOptions?.map(author => author.value));
        props.search(tags, authors);
    }

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="sidebar-area sidebar-sticky mx-2">
                <div className="single-widget latest-video-widget mb-50">
                    <div className="section-heading style-2 mb-30">
                        <h4>Ətraflı axtarış</h4>
                        <div className="line"></div>
                        <div className='d-flex flex-column align-content-center mt-4'>
                            <Select
                                options={fillTagsSelect()}
                                placeholder='Teqlərə görə...'
                                className='mt-4'
                                styles={customStyles}
                                isMulti
                                value={tagOptions}
                                onChange={tagsSelectChangeHandler} />
                            <Select
                                options={fillAuthorsSelect()}
                                placeholder='Müəlliflərə görə...'
                                className='mt-4'
                                styles={customStyles}
                                isMulti
                                value={authorOptions}
                                onChange={authorsSelectChangeHandler} />
                            <button className="btn vizew-btn rounded mt-4"
                                disabled={tagOptions.length === 0 && authorOptions.length === 0} onClick={submitHandler}>Axtar</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(SearchSidebar);