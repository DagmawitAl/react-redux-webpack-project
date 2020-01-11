import React, { Component } from 'react';
// import { connect } from "react-redux";

import Employee from '../components/Employee';
import '../styles/employees.module.css';

// import {Dispatch} from 'redux'

export default class Employees extends Component<AppProps> {
    constructor(props: Employees['props']) { super(props); }

    render() {
        let list = [{"id":"1","employee_name":"John","employee_salary":"1123","employee_age":"23","profile_image":""},
                    {"id":"627","employee_name":"steevenn","employee_salary":"123","employee_age":"23","profile_image":""}]
        let dispatch = this.props.dispatch;
        return (
            <div className="employees-container">
                {list.map(function(item) {
                    return <Employee dispatch={dispatch} 
                                    profile_image={item.profile_image}
                                    employee_name={item.employee_name}
                                    employee_age={item.employee_age}
                                    employee_salary={item.employee_salary}
                                    id={item.id} />
                })}
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     const { getAllEmployees } = state
//     const { isFetching, items:  } = getAllEmployees || {
//       isFetching: true,
//       items: [],
//     }
  
//     return {
//       emp,
//       isFetching,
//       lastUpdated,
//     }
// }

interface AppProps {
    employees: [],
    isFetching: boolean,
    dispatch: Function,
}