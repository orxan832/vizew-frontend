import React from 'react';
import { Modal } from 'react-bootstrap';
import Ayah from '../forms/ayah';
import Tag from '../forms/tag';

const AdminModal = props => {
    const renderBody = () => {
        switch (props.tabId) {
            case 'v-pills-ayah':
                return <Ayah {...props} />;
            case 'v-pills-type':
                return <Tag {...props} />;
            default:
                break;
        }
    }
    return (
        <Modal
            size="lg"
            centered
            show={props.show}
            onHide={props.hide}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title className='text-dark'>
                    {props.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {renderBody()}
            </Modal.Body>
        </Modal>
    )
}

export default AdminModal;