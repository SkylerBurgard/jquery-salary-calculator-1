$(document).ready(onReady);

// const employeeInfo = [];
const monthlyBudget = 0;
const allEmployees = [];

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

    allEmployees.employee = parseFloat(allEmployees.employee);

    $('#js-input-firstName').val('');
    $('#js-input-lastName').val('');
    $('#js-input-employeeID').val('');
    $('#js-input-jobTitle').val('');
    $('#js-input-employeeAnnualSalary').val('');

    // console.table(employee);
    allEmployees.push(employee);
    console.table(allEmployees);
}

function render() {}