$(document).ready(onReady);

// const employeeInfo = [];
const monthlyBudget = 20000;
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
    render();
}

function render() {
    $('#js-table-body').empty();

    let totalAnnualSalary = 0;

    for (let employee of allEmployees) {
        totalAnnualSalary += employee.employeeAnnualSalary
        $('#js-table-body').append(`
        <tr>
             <td>${employee.firstName}</td>
             <td>${employee.lastName}</td>
             <td>${employee.employeeID}</td>
             <td>${employee.jobTitle}</td>
             <td>${employee.employeeAnnualSalary}</td>
        </tr>
        `)
    }

    console.log(totalAnnualSalary);
}

function removeEmployee() {
    $(this).remove();
    letremoveEmployee = $('.removeButton').data(employee);
}