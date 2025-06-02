import React from "react";
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastNotification = ({ show, message, handleClose }) => {
    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast onClose={handleClose} show={show} delay={3000} autohide>
                {/* <Toast.Header>
                    <strong className="me-auto">Erro</strong>
                    <small>Agora</small>
                </Toast.Header> */}
                <Toast.Body className="bg-danger text-white rounded">
                    {message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default ToastNotification;

// dispositivos@RDSL