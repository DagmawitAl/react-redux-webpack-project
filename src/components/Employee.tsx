//import React from 'react';

import '../styles/index.css';
import React, { Component } from 'react'
import "../styles/employee.module.css";
import { connect } from "react-redux";
import { requestDeleteEmployee, requestEditEmployee } from "../redux-files/actions";
import EditEmployeeModal from './EditEmployeeModal';
// import Employee from './Employee';
import { editEmployee } from 'redux-files/sagas';
// import "../human_icon.png"

// import { REQUEST_ALL_EMPLOYEES } from "../redux-files/actions";

class Employee extends Component<EmployeeProps,EmployeeState> {    
    constructor(props : Employee["props"]){
        super(props)
        this.onEmployeeClicked = this.onEmployeeClicked.bind(this)
        this.onDeleteButtonClicked = this.onDeleteButtonClicked.bind(this)
        this.onEditButtonClicked = this.onEditButtonClicked.bind(this)
        this.state = {
            show: false,
            name: "",
            salary: "",
            age: "",
        }
    }
    onEmployeeClicked() {
        // const {dispatch} = this.props
        // //console.log(dispatch)
        // this.props.dispatch(dispatch)
        // dispatch(REQUEST_ALL_EMPLOYEES, 1)
    }
    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    onDeleteButtonClicked(){
        this.props.dispatch(requestDeleteEmployee(this.props.employee.id))
    }

    onEditButtonClicked(){
        this.props.dispatch(requestEditEmployee(this.props.employee.id,this.props.employee.employee_name,this.props.employee.employee_salary,this.props.employee.employee_age))
    }

    onNameChange = (value: string) => {
        this.setState({name:value})
    }

    onSalaryChange = (value: string) => {
        this.setState({salary: value})
    }

    onAgeChange = (value: string) => {
        this.setState({age: value})
    }

    onSubmitClicked = () => {
        this.props.dispatch(requestEditEmployee(this.props.employee.id,this.state.name, this.state.salary, this.state.age))
    }

    render() {
        const {success,isDeleting} = this.props
        const {employee,isEditing} = this.props
        console.log(success)
        return (
            <div className="employee" onClick={this.onEmployeeClicked}>
                <EditEmployeeModal handleClose={this.hideModal} show={this.state.show}>
                <div className="create-employee-modal-container">
                        <h3>Edit Employee</h3>
                        {/* {employee.id != undefined && <p>A new Employee was created with an Id of {employee.id}</p>} */}
                        <input className="create-employee-inputs" value={this.props.employee.employee_name} type="text" placeholder="Name" onChange={event => this.onNameChange(event.target.value)}/>
                        <input className="create-employee-inputs" value={this.props.employee.employee_salary} type="number" placeholder="Salary" onChange={event => this.onSalaryChange(event.target.value)}/>
                        <input className="create-employee-inputs" type="number" value={this.props.employee.employee_age} placeholder="Age"onChange={event => this.onAgeChange(event.target.value)}/>
                        <button className="create-employee-submit" onClick={this.onSubmitClicked}>
                            {isEditing && <p>Updating ...</p>}
                            {!isEditing && <p>Submit</p>}
                        </button>
                    </div>
                </EditEmployeeModal>
            
                <div className="employee-image-container">
                    {success != undefined &&<p>Employee has been deleted</p>}
                </div>
                <div className="employee-info-container">
                    <p>ID: {this.props.employee.id}</p>
                    <p>Name: {this.props.employee.employee_name}</p>
                    <p>Age: {this.props.employee.employee_age}</p>
                    <p>Salary: {this.props.employee.employee_salary}</p>
                </div>
                <div className="employee-dm-container">
                    <button className="employee-delete-button" onClick={this.onDeleteButtonClicked}>Delete</button>
                    <button className="employee-update-button" onClick={this.onEditButtonClicked}>Edit</button>
                </div>
            </div>
        )
    }
}

export type EmployeeType = {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
}

interface EmployeeProps {
    editEmployee: { isEditing: boolean, employee: EmployeeType },
    isDeleting: boolean;
    isEditing: boolean;
    success: {};
    key: string;
    employee: EmployeeType;
    dispatch: Function;
}

interface EmployeeState {
    show: boolean,
    name: string,
    salary: string,
    age: string,
}

function mapStateToProps(state:any){
    const {deleteEmployee,editEmployee} = state

    const {isDeleting, success} = deleteEmployee["success"] || {
        isDeleting: false,
        success: {}
    }

    const { isEditing, employee } = editEmployee["employee"] || {
        isEditing: false,
        employee: {},
    }

    return {
        deleteEmployee: {isDeleting,success},
        editEmployee: {isEditing,employee}
    }
}

export default connect(mapStateToProps)(Employee)