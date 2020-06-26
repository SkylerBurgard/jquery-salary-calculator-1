$(document).ready(onReady);

const monthlyBudget = 20000;

function onReady() {
    $('#js-salary-calc-form').on('submit', submitEmployee);

    // render();
}

function submitEmployee(event) {
    event.preventDefault();

    const submitEmployee = {
        firstName: $('js-input-firstName').val(),
        lastName: $('js-input-lastName').val(),
        employeeID: $('js-input-employeeID').val(),
        jobTitle: $('js-input-jobTitle').val(),
        employeeAnnualSalary: $('js-input-employeeAnnualSalary').val()
    };
    console.log(submitEmployee);
}