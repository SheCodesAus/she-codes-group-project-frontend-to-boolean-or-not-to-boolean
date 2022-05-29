import React, { useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
// import ReactDom from 'react-dom';

//styles
import "./GlobalModal.css";

const Modal = props => {
    // this function allows the user to close the modal when clicking escape
    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])

    const ReactDOM = require('react-dom')
     
    // code to return a modal
    return ReactDOM.createPortal(
        <CSSTransition 
        in={props.show}
        unmountOnExit
        timeout={{ enter: 0, exit: 300 }}
        >
            
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="content" onClick={e => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{props.title}</h4>
                        <div className="modal-body">{props.children}</div>
                    <div className="modal-footer">
                        <button onClick={props.onClose} className="button">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </CSSTransition>,
            document.getElementById("root")
    )
}

export default Modal;

// document.getElementById('root')

// 11. Add submit button to modal
// Technically, we could have a submit button in order to take an action for the modal. I will let you do it since it’s similar to close button.

// Hint: Add the submit button next to close button and bind onClick={props.onSubmit} and update App.js to pass a function to <Modal onSubmit={yourFunction} />
// 