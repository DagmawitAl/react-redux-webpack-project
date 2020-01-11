export const REQUEST_ALL_EMPLOYEES = 'REQUEST_ALL_EMPLOYEES'
export const RECEIVE_ALL_EMPLOYEES = 'RECEIVE_ALL_EMPLOYEES'
export const REQUEST_ALL_EMPLOYEES_FAILED = 'REQUEST_ALL_EMPLOYEES_FAILED'

export const REQUEST_CREATE_EMPLOYEE = 'REQUEST_CREATE_EMPLOYEE'
export const RECEIVE_CREATE_EMPLOYEE = 'RECEIVE_CREATE_EMPLOYEE'
export const REQUEST_CREATE_EMPLOYEE_FAILED = 'REQUEST_CREATE_EMPLOYEE_FAILED'

export const REQUEST_DELETE_EMPLOYEE = 'REQUEST_DELETE_EMPLOYEE'
export const RECEIVE_DELETE_EMPLOYEE = 'RECEIVE_DELETE_EMPLOYEE'
export const REQUEST_DELETE_EMPLOYEE_FAILED = 'REQUEST_DELETE_EMPLOYEE_FAILED'

export const REQUEST_EDIT_EMPLOYEE = 'REQUEST_EDIT_EMPLOYEE'
export const RECEIVE_EDIT_EMPLOYEE = 'RECEIVE_EDIT_EMPLOYEE'
export const REQUEST_EDIT_EMPLOYEE_FAILED = 'REQUEST_EDIT_EMPLOYEE_FAILED'

export function requestAllEmployees() : RequestAllEmployeesType {
    return {
      type: REQUEST_ALL_EMPLOYEES,
    }
}

export function receiveAllEmployees(employees:[]) : AllEmployeesType{
    return {
        type: RECEIVE_ALL_EMPLOYEES,
        employees
    }
}

export function receiveCreateEmployee(name: string, salary: string, age: string, id: string) {
    return {
        type: RECEIVE_CREATE_EMPLOYEE,
        employee: { name,
                    salary,
                    age,
                    id }
    }
}

export function requestCreateEmployee(name: string, salary: string, age: string) {
    return {
        type: REQUEST_CREATE_EMPLOYEE,
        name,
        salary,
        age
    }
}

export function requestDeleteEmployee(id:string) {
    return{
        type: REQUEST_DELETE_EMPLOYEE,
        id
    }
}

export function requestEditEmployee(id:string,name:string,salary:string,age:string) {
    return{
        type: REQUEST_EDIT_EMPLOYEE,
        name,
        salary,
        age
    }
}

type RequestAllEmployeesType = {
    type: string
}

export type AllEmployeesType = {
    type: string,
    employees: []
}

export type RequestCreateEmployeeType = {
    type: string,
    name: string,
    salary: string,
    age: string,
}

export type ReceiveCreateEmployeeType = {
    type: string,
    employee: EmployeeType
}

export type EmployeeType = {
    name: string,
    salary: string,
    age: string,
    id: string
}

export type ReceiveDeleteEmployeeType = {
    type: string,
    success: string
}

export type ReceiveEditEmployeeType = {
    type: string,
    employee: EmployeeType
}

export type X = RequestAllEmployeesType | AllEmployeesType