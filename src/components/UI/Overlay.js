
import React from 'react';
import { MdError } from 'react-icons/md';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const OverlayDanger = props => (
    <div className='error-icon-position'>
        <OverlayTrigger placement={'top'} overlay={
            <Popover className='bg-danger'>
                <Popover.Content>{props.msg}</Popover.Content>
            </Popover>
        } >
            <span><MdError size='2.2em' className='text-danger' /></span>
        </OverlayTrigger>
    </div>
);

export default OverlayDanger;