$(document).ready(readyNow);

let employeeArr = [];

parseInt($('#tableBody').data('salary'))





function readyNow() {

    $('#submitBtn').on('click', submitButton)

    $('#tableBody').on('click', '#deleteButton', deleteHandler)
};





function deleteHandler() {


    let value = $(this).closest('tr').find('.money').text();
    // .closest() gets the closest tr parent .
    // .find() finds the element with class 'sibbling' inside that `tr`
    // .text() gets the text inside the element.

result -= value
$('#totalCost').empty()
    $(this).parent().parent().remove()
 $('#totalCost').append(result)



}

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
        if (parseInt(el.annualSalary) >= 20001) {
            $('#tableBody').append(`
            <tr class="row">
            <th>${el.firstName}</th>
            <th >${el.lastName}</th>
            <th>${el.iD}</th>
            <th>${el.title}</th>
            <th class="money" style = "background-color:red;">${el.annualSalary}</th>
            <th class="button"><button id="deleteButton">Delete</button></th>
            </th>`)



        } else {

            $('#tableBody').append(`
            <tr class="row">
            <th>${el.firstName}</th>
            <th >${el.lastName}</th>
            <th>${el.iD}</th>
            <th>${el.title}</th>
            <th class="money">${el.annualSalary}</th>
            <th class="button"><button id="deleteButton">Delete</button></th>
            </th>`)





        }
        //I need to better understand where i am navigating from /where i am storing my data
        //  $(this).siblings('table').data('salary', parseInt(el.annualSalary))
        //console.log(   $(this).siblings('table').data('salary'));
        console.log($(this))
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