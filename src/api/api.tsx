function fetchAllEmployees() {
    return fetch(`http://dummy.restapiexample.com/api/v1/employees`).then(res => {
            return res.json().then(res => {
                return res
            })
         })
    // return [{"id":"1","employee_name":"John","employee_salary":"1123","employee_age":"23","profile_image":""},
    //         {"id":"627","employee_name":"steevenn","employee_salary":"123","employee_age":"23","profile_image":""}]
}

const delay = (ms:number) => new Promise(res => setTimeout(res, ms))
function createEmployee(name: string, salary: string, age: string) {
    return fetch(`http://dummy.restapiexample.com/api/v1/create`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            name,
            salary,
            age
        })
    }).then(res => {
        return res.json().then(res => {
            return res
        })
    })
}

function deleteEmployee(id:string) {
    return fetch(`http://dummy.restapiexample.com/api/v1/delete/`+id, {
        method: 'DELETE'
    }
    ).then(res => {
        return res.json().then(res => {
            return res
        })
     })
}

function editEmployee(id:string, name: string, salary: string, age: string) {
    return fetch(`http://dummy.restapiexample.com/api/v1/update/`+id,{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            id,
            name,
            salary,
            age
        })
    }).then(res => {
        return res.json().then(res => {
            return res
        })
    })
}

const Api = {
    fetchAllEmployees,
    createEmployee,
    deleteEmployee,
    editEmployee
}

export default Api;