$(document).ready(onReady);

// const employeeInfo = [];
const monthlyBudget = 20000;
const allEmployees = [];
let totalMonthlyCost = 0;

function onReady() {
    $('#js-salary-calc-form').on('submit', submitForm);
    $('#js-table-body').on('click', ".js-row", deleteButton)

}

function deleteButton() {
    $(this).remove();
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

    // allEmployees.employee = parseFloat(allEmployees.employee);

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
        $('#js-table-body').append(`
        <tr class="js-row">
             <td>${employee.firstName}</td>
             <td>${employee.lastName}</td>
             <td>${employee.employeeID}</td>
             <td>${employee.jobTitle}</td>
             <td>${employee.employeeAnnualSalary}</td>
             <td> <button> Delete
             </button></td>
        </tr>
        `)
        totalAnnualSalary += parseFloat(employee.employeeAnnualSalary);
        console.log(totalAnnualSalary);
        totalMonthlyCost = totalAnnualSalary / 12;
        $('#js-total-monthly-cost').empty();
        $("#js-total-monthly-cost").append(`
        <h2>Total Monthly Cost: $${totalMonthlyCost.toFixed(0)}</h2>
        `);
        if (totalMonthlyCost > 20000) {
            $('#js-total-monthly-cost').addClass('red');
        } else {
            $('#js-total-monthly-cost').removeClass('red')
        }
    }

    // console.log(totalAnnualSalary);
    // take total salary and divide/ by 12
    //once i have monthly, i want to change the .text of an html element to show the monthly rate.
}

// function removeEmployee() {
//     $(this).remove();
//     letremoveEmployee = $('.removeButton').data(employee);
// }