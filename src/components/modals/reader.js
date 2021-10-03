import React from "react";
import { Modal } from "react-bootstrap";

const Reader = (props) => {
  const { modal, modalHandler } = props;
  const { title, subject, article } = props.article;
  return (
    <Modal
      size="xl"
      centered
      show={modal}
      onHide={modalHandler}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-dark">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1 className="text-dark text-center">{subject}</h1>
        <div dangerouslySetInnerHTML={{ __html: article }}></div>
      </Modal.Body>
    </Modal>
  );
};

export default Reader;
