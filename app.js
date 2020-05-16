$(document).ready(readyNow);

let employeeArr = [];

let totalValue = $('#monthCost').find('#totalCost').text();

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
let monthResult = result/12;
$('#totalCost').empty()
    $(this).parent().parent().remove()
 $('#totalCost').append(monthResult)



 
 let totalValue = $('#monthCost').find('#totalCost').text();

 if(totalValue>20000){
    $('#monthCost').find('#totalCost').addClass('red')
 } else{
    $('#monthCost').find('#totalCost').removeClass('red')
 }
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

            $('#tableBody').append(`
            <tr class="row">
            <th>${el.firstName}</th>
            <th >${el.lastName}</th>
            <th>${el.iD}</th>
            <th>${el.title}</th>
            <th class="money">${el.annualSalary}</th>
            <th class="button"><button id="deleteButton">Delete</button></th>
            </th>`)

        //I need to better understand where i am navigating from /where i am storing my data
        //  $(this).siblings('table').data('salary', parseInt(el.annualSalary))
        //console.log(   $(this).siblings('table').data('salary'));
       
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

    let monthResult = result/12;
  
    $('#totalCost').append(monthResult)

   
    let totalValue = $('#monthCost').find('#totalCost').text();
    if(totalValue>20000){
    $('#monthCost').find('#totalCost').addClass('red')

    }
}

   
