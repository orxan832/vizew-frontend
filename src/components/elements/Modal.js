import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Tag from '../forms/tag';
import User from '../forms/user';

const AdminModal = props => {
    console.log(props);
    const renderBody = () => {
        switch (props.tabId) {
            case 'v-pills-type':
                return <Tag data={props.data} />;
            case 'v-pills-user':
                return <User data={props.data} />;
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
        >
            <Modal.Header closeButton>
                <Modal.Title className='text-dark'>
                    {props.header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tag data={props.data} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AdminModal;