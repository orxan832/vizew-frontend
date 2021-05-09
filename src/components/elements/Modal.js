import React from 'react';
import { Modal } from 'react-bootstrap';
import Ayah from '../forms/ayah';
import Hadith from '../forms/hadith';
import Article from '../forms/article';
import Link from '../forms/link';
import Tag from '../forms/tag';

const AdminModal = props => {

    const elements = {
        ayah: <Ayah {...props} />,
        hadith: <Hadith {...props} />,
        article: <Article {...props} />,
        link: <Link {...props} />,
        tag: <Tag {...props} />
    };
    const { tabId, modal, modalHeader, modalHandler } = props;
    return (
        <Modal
            size={`${tabId === 'v-pills-article' ? 'xl' : 'lg'}`}
            centered
            show={modal}
            onHide={modalHandler}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title className='text-dark'>
                    {modalHeader}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {elements[tabId.split('-')[2]]}
            </Modal.Body>
        </Modal>
    )
}

export default AdminModal;