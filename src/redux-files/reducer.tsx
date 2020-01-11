import { combineReducers } from "redux";
import { REQUEST_ALL_EMPLOYEES, RECEIVE_ALL_EMPLOYEES, X, ReceiveCreateEmployeeType, ReceiveDeleteEmployeeType, ReceiveEditEmployeeType,REQUEST_CREATE_EMPLOYEE, RECEIVE_CREATE_EMPLOYEE, EmployeeType, REQUEST_DELETE_EMPLOYEE, RECEIVE_DELETE_EMPLOYEE, AllEmployeesType, REQUEST_EDIT_EMPLOYEE, RECEIVE_EDIT_EMPLOYEE } from "./actions";

function employees(state = {isFetching: false, items: []}, action:AllEmployeesType){
  // console.log(action.employees)
  switch(action.type){
    case REQUEST_ALL_EMPLOYEES: 
      return { ...state, isFetching: true };
    case RECEIVE_ALL_EMPLOYEES:
      return {
        ...state,
        isFetching: false,
        items: action.employees
      };
    default: 
      return state;
  }
}

function employee(state = {isCreating: false, employee: {}}, action: ReceiveCreateEmployeeType) {
  // console.log(action)
  switch (action.type) {
    case REQUEST_CREATE_EMPLOYEE:
      return { ...state, isCreating: true };
    case RECEIVE_CREATE_EMPLOYEE:
      return {
        ...state,
        isCreating: false,
        employee: action.employee
      }
    default:
      return state;
  }
}

function editEmp(state = {isEditing: false, employee: {}}, action: ReceiveEditEmployeeType) {
  switch (action.type) {
    case REQUEST_EDIT_EMPLOYEE:
      return { ...state,isEditing:true};
    case RECEIVE_EDIT_EMPLOYEE:
      return {
        ...state,
        isEditing: false,
        employee: action.employee
      }
  
    default:
      return state;
  }
}

function deleteEmp(state = {isDeleting: false, success: {}}, action: ReceiveDeleteEmployeeType) {
  // console.log(action)
  switch (action.type) {
    case REQUEST_DELETE_EMPLOYEE:
      return { ...state, isDeleting: true};
    case RECEIVE_DELETE_EMPLOYEE:
      return {
        ...state,
        isDeleting: false,
        success: action.success
      }
    default:
      return state;
  }
}

function getEmployees(state={}, action:AllEmployeesType){
  switch(action.type){
    case REQUEST_ALL_EMPLOYEES:
    case RECEIVE_ALL_EMPLOYEES:
      let newState = { ...state, "employees": employees(state = { isFetching: true, items: [] }, action) }
      return newState
    default: 
      return state;
  }
}


function createEmployee(state={}, action:ReceiveCreateEmployeeType) {
  switch (action.type) {
    case REQUEST_CREATE_EMPLOYEE:
    case RECEIVE_CREATE_EMPLOYEE:
      let newState = { ...state, "employee": employee(state = { isCreating: true, employee: {} }, action) }
      return newState
    default:
      return state;
  }
}



function deleteEmployee(state={}, action:ReceiveDeleteEmployeeType) {
  // console.log(action)
  switch (action.type) {
    case REQUEST_DELETE_EMPLOYEE:
    case RECEIVE_DELETE_EMPLOYEE:
      let newState = { ...state, "success": deleteEmp(state = { isDeleting: true, success: {}}, action)}
      return newState
  
    default:
      return state;
  }
}

function editEmployee(state={}, action: ReceiveEditEmployeeType) {
  switch (action.type) {
    case REQUEST_EDIT_EMPLOYEE:
    case RECEIVE_EDIT_EMPLOYEE:
      let newState = { ...state, "employee": editEmp(state = { isEditing: true, employee: {} }, action) }
      return newState
  
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  getEmployees,
  createEmployee,
  deleteEmployee,
  editEmployee
})

export default rootReducer;