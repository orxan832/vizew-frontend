import React from 'react';
import { Modal } from 'react-bootstrap';

const SendMail = props => (
    <Modal show={props.show} onHide={props.modalHandler} centered>
        <Modal.Header closeButton className='bg-modal'>
            <h6 className="font-weight-bold text-center">Emailinizə göndərilən təsdiq kodunu daxil edin</h6>
        </Modal.Header>
        <Modal.Body className='bg-modal'>
            <input
                type="number"
                name="userCode"
                onChange={props.changeCodeHandler}
                value={props.userCode}
                className="form-control text-white rounded" />
            <div className='d-flex justify-content-between'>
                <button
                    type="button"
                    onClick={props.modalHandler}
                    className="btn info-btn rounded btn-w-45">
                    İmtina et</button>
                <button
                    type="button"
                    onClick={props.submitHandler}
                    className="btn vizew-btn rounded btn-w-45">
                    Save changes
            </button>
            </div>
        </Modal.Body>
    </Modal>
);

export default SendMail;