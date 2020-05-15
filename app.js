$(document).ready(readyNow);

let employeeArr = [];





function readyNow() {

    $('#submitBtn').on('click', submitButton)

};

function submitButton() {

    let personObject = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        iD: $('#iD').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val()

    };
    employeeArr.push(personObject);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iD').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    appendToDom(employeeArr);
}
console.log(employeeArr);

function appendToDom(array) {
    $('#tableBody').empty();
    for (el of array) {
        if(parseInt(el.annualSalary)>=20001){
        $('#tableBody').append(`
            <tr>
            <th>${el.firstName}</th>
            <th >${el.lastName}</th>
            <th>${el.iD}</th>
            <th>${el.title}</th>
            <th style = "background-color:red;">${el.annualSalary}</th>
            <th><button id="deleteButton">Delete</button></th>
            </th>`)
        } else {
            $('#tableBody').append(`
            <tr>
            <th>${el.firstName}</th>
            <th >${el.lastName}</th>
            <th>${el.iD}</th>
            <th>${el.title}</th>
            <th>${el.annualSalary}</th>
            <th><button id="deleteButton">Delete</button></th>
            </th>`)
        }


    }

    appendTotal(employeeArr)
};


let result = 0;


function appendTotal(array) {
    $('#totalCost').empty()

    result = 0;
    for (el of array) {

        result += parseInt(el.annualSalary)

    }

    $('#totalCost').append(result)
}