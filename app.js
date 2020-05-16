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


    let monthResult = result / 12;


    $('#totalCost').empty()


    //using .text i loop through and change existing array by splicing out matching object based on salary
    for (let i = 0; employeeArr.length > i; i++) {
        if (value == employeeArr[i].annualSalary) {
            employeeArr.splice(i, 1)
        }
    }

    $(this).parent().parent().remove()



    $('#totalCost').append(monthResult)

    //this here includes the conditional to change background to red or white based on new total from delete
    let totalValue = $('#monthCost').find('#totalCost').text();

    if (totalValue > 20000) {
        $('#monthCost').find('#totalCost').addClass('red')
    } else {
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

    //established array of object created
    employeeArr.push(personObject);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iD').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    // appendToDom(employeeArr);
    appendToDom(personObject);
}


function appendToDom(theObject) {




    //instead of looping through array. push just entered object

    let row = `<tr class="row">
  <th>${theObject.firstName}</th>
  <th >${theObject.lastName}</th>
  <th>${theObject.iD}</th>
  <th>${theObject.title}</th>
  <th class="money">${theObject.annualSalary}</th>
  <th class="button"><button id="deleteButton">Delete</button></th>
  </th>`

    $('#tableBody').append(row)

    //I need to better understand where i am navigating from /where i am storing my data
    //  $(this).siblings('table').data('salary', parseInt(el.annualSalary))
    //console.log(   $(this).siblings('table').data('salary'));



    appendTotal(employeeArr)
};

//allows result to be grabbed elsewhere
let result = 0;


function appendTotal(array) {


    $('#totalCost').empty()

    //calculates total annual sallary in array
    result = 0;
    for (el of array) {

        result += parseInt(el.annualSalary)

    }
    //creates the monthly salary value
    let monthResult = result / 12;
    //appends the monthly salary value
    $('#totalCost').append(monthResult)


    let totalValue = $('#monthCost').find('#totalCost').text();
    if (totalValue > 20000) {
        $('#monthCost').find('#totalCost').addClass('red')

    }
}