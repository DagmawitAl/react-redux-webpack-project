import { call, put, takeEvery, all, take } from 'redux-saga/effects'
import { REQUEST_ALL_EMPLOYEES, REQUEST_ALL_EMPLOYEES_FAILED, RECEIVE_ALL_EMPLOYEES, REQUEST_CREATE_EMPLOYEE, RECEIVE_CREATE_EMPLOYEE, REQUEST_DELETE_EMPLOYEE, REQUEST_DELETE_EMPLOYEE_FAILED, RECEIVE_DELETE_EMPLOYEE, RECEIVE_EDIT_EMPLOYEE, REQUEST_EDIT_EMPLOYEE_FAILED, REQUEST_EDIT_EMPLOYEE } from "./actions";
import Api from "../api/api";


export function* fetchEmployeeData() {
    try {
        const employees = yield call(Api.fetchAllEmployees)
        yield put({type: RECEIVE_ALL_EMPLOYEES, employees})
     } catch (error) {
        yield put({type: REQUEST_ALL_EMPLOYEES_FAILED, error})
     }    
}

export function* createEmployee(name: string, salary: string, age: string) {
    try {
        const employee = yield call(Api.createEmployee, name, salary, age)
        yield put({type: RECEIVE_CREATE_EMPLOYEE, employee})
    } catch (error) {
        yield put({type: REQUEST_ALL_EMPLOYEES_FAILED, error})
    }
}

export function* deleteEmployee(id: string){
    try{
        const response = yield call(Api.deleteEmployee, id)
        yield put({type:RECEIVE_DELETE_EMPLOYEE, success:response.success})
    } catch(error){
        yield put({type: REQUEST_DELETE_EMPLOYEE_FAILED, error})
    }
}

export function* editEmployee(id: string, name: string, salary: string, age: string) {
    try{
        const employee = yield call(Api.editEmployee,id,name,salary,age)
        yield put({type:RECEIVE_EDIT_EMPLOYEE,employee})
    }catch(error){
        yield put({type: REQUEST_EDIT_EMPLOYEE_FAILED,error})
    }
}

export function *WatchFetchAsync() {
    yield takeEvery(REQUEST_ALL_EMPLOYEES, fetchEmployeeData)
}

export function* WatchCreateEmployeeAsync(){
    const { name, age, salary } = yield take(REQUEST_CREATE_EMPLOYEE)
    yield call(createEmployee, name, age, salary)
}

export function* WatchDeleteEmployeeAsync() {
    const { id } = yield take(REQUEST_DELETE_EMPLOYEE)
    yield call(deleteEmployee, id)
}

export function* WatchEditEmployeeAsync(){
    const { id, name, age, salary } = yield take(REQUEST_EDIT_EMPLOYEE)
    yield call(editEmployee, id, name, age, salary)
}

export default function* rootSaga() {
    yield all([
      WatchCreateEmployeeAsync(),
      WatchFetchAsync(),
      WatchDeleteEmployeeAsync(),
      WatchEditEmployeeAsync()
    ])
  }