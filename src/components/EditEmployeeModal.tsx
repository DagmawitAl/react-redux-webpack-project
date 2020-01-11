import React, { Component, ReactChildren } from 'react'
import "../styles/create-employee-modal.module.css"

export default class EditEmployeeModal extends Component<EditEmployeeModalProps>{
    constructor(props : EditEmployeeModal["props"]){
        super(props)
    }

    render() {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <button className="modal-close-btn" onClick={()=>this.props.handleClose()}>Close</button>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

interface EditEmployeeModalProps {
    handleClose: Function;
    show: boolean;
}