import React from 'react';
import {  } from "react-redux";
import '../styles/index.css';

import { connect } from "react-redux";
import { requestAllEmployees, requestCreateEmployee, EmployeeType } from "../redux-files/actions";
import Employee from './Employee';
import CreateEmployeeModal from './CreateEmployeeModal';

// import from "styled-component"

class App extends React.PureComponent<AppProps,AppState> {
    constructor(props : App["props"]) {
        super(props)
        this.getEmployee()
        this.state = {
            show: false,
            name: "",
            salary: "",
            age: "",
        }
    }

    getEmployee = () => {
        this.props.dispatch(requestAllEmployees())
    }

    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    onSubmitClicked = () => {
        this.props.dispatch(requestCreateEmployee(this.state.name, this.state.salary, this.state.age))
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
    

	render() {
        const { employees, isFetching } = this.props.allEmployees
        const {employee, isCreating} = this.props.createEmployee 
        
		return (
            
			<div className="container">
				<h1>Employees</h1>
                <button className="add-employee-btn" onClick={this.showModal}>Add Employee</button>
                <CreateEmployeeModal handleClose={this.hideModal} show={this.state.show}>
                    <div className="create-employee-modal-container">
                        <h3>Add Employee</h3>
                        {employee.id != undefined && <p>A new Employee was created with an Id of {employee.id}</p>}
                        <input className="create-employee-inputs" type="text" placeholder="Name" onChange={event => this.onNameChange(event.target.value)}/>
                        <input className="create-employee-inputs" type="number" placeholder="Salary" onChange={event => this.onSalaryChange(event.target.value)}/>
                        <input className="create-employee-inputs" type="number" placeholder="Age"onChange={event => this.onAgeChange(event.target.value)}/>
                        <button className="create-employee-submit" onClick={this.onSubmitClicked}>
                            {isCreating && <p>Adding ...</p>}
                            {!isCreating && <p>Submit</p>}
                        </button>
                    </div>
                </CreateEmployeeModal>
                <br/><br/><br/>
                <div className="employee-container">
                {isFetching && <h2>Loading...</h2>}
                {employees.length > 0 && 
                    employees.map((item:any) => <Employee key={item.id} employee={item}/>)
                }
                </div>
			</div>
		);
	}
}

interface AppProps {
    allEmployees: { isFetching: boolean, employees: [] },
    createEmployee: { isCreating: boolean, employee: EmployeeType },
    dispatch: Function,
}

interface AppState {
    show: boolean,
    name: string,
    salary: string,
    age: string,
}

function mapStateToProps(state:any) {
    const { getEmployees, createEmployee } = state
    
    const { isFetching, items } = getEmployees["employees"] || {
      isFetching: true,
      items: [],
    }

    const { isCreating, employee } = createEmployee["employee"] || {
        isCreating: false,
        employee: {},
    }

    

    return {
        allEmployees: { isFetching, employees: items },
        createEmployee: { isCreating, employee }
    }
  }

export default connect(mapStateToProps)(App)