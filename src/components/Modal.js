import React from "react";
// import { Button, Modal } from "react-bootstrap";
import "../index.css";

function Modal(props) {
  return (
    <div className="modal-container">
        <a href={"#open-modal-"+props.id}>Open Modal</a>
        <div id={"open-modal-"+props.id} className="modal-window">
        <div>
          <a href="#modal-close" title="Close" className="modal-close">close &times;</a>
          <h2>{props.title}</h2>
          <div><img src={props.image} alt={props.title}></img></div>
          <div>price: {props.price}</div>
          <div>Description: {props.description}</div>
        </div>
        </div>
      </div>);
}
export default Modal;
