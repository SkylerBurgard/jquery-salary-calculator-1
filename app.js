$(document).ready(onReady);

// const employeeInfo = [];
const monthlyBudget = 0;
const employeeAnnualSalary = [];

function onReady() {
    $('#js-salary-calc-form').on('submit', submitForm);


}

function submitForm(event) {
    event.preventDefault();

    const employee = {
        firstName: $('#js-input-firstName').val(),
        lastName: $('#js-input-lastName').val(),
        employeeID: $('#js-input-employeeID').val(),
        jobTitle: $('#js-input-jobTitle').val(),
        employeeAnnualSalary: $('#js-input-employeeAnnualSalary').val()
    };

    employeeAnnualSalary.employee = parseFloat(employeeAnnualSalary.employee);

    console.table(employee);

}

function render() {}