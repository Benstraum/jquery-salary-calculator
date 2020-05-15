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

function appendToDom(array){
    $('#tableBody').empty();
    for(el of array){
        $('#tableBody').append(`
            <tr>
            <th>${el.firstName}</th>
            <th>${el.lastName}</th>
            <th>${el.iD}</th>
            <th>${el.title}</th>
            <th>${el.annualSalary}</th>
            </th>`)
    }
};