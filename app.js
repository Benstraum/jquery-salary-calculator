$(document).ready(readyNow)

let employeeArr = []





function readyNow() {

    $('#submitBtn').on('click', submitButton)


}

function submitButton() {

    let personObject = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        iD: $('#iD').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val()

    }
    employeeArr.push(personObject)
        $('#firstName').val('')
        $('#lastName').val('')
        $('#iD').val('')
        $('#title').val('')
        $('#annualSalary').val('')


}
console.log(employeeArr)