// Write your solution in this file!
// Initialize employee Object
let employee = {
    name: 'John Doe',
    streetAddress: '123 Main St'
};

// Function to update employee with a new key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to update employee with a new key-value pair (destructive)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key-value pair from the employee (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function to delete a key-value pair from the employee (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Test the functions
console.log("Initial employee:", employee);

let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'city', 'New York');
console.log("Updated employee (non-destructive):", updatedEmployee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'state', 'NY');
console.log("Updated employee (destructive):", employee);

let deletedEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log("Employee after deleting streetAddress (non-destructive):", deletedEmployee);

destructivelyDeleteFromEmployeeByKey(employee, 'city');
console.log("Employee after deleting city (destructive):", employee);
