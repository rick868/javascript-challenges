let name = "John";
console.log(name);

let seniorDoctor = "Kevin";
let juniorDoctor = "Alice";
console.log(seniorDoctor);
console.log(juniorDoctor);

//primitive types
let doctor = "dr. James";
let isApproved = false;
let firstName = undefined;
console.log(doctor);

let patientDetails = {
    name: "John",
    age: "14",
    isAdmitted: true
};
console.log(patientDetails.name);
console.log(patientDetails.age);       


let patientOccupancy = ['John', 'Kevin', 'Alice'];
patientOccupancy [3] = 'Peter'
console.log(patientOccupancy.length);

//functions

function greetPatient(name) {
    console.log("Hello " + name);
}

function hospitalRegistry(patientDetails) {
    console.log("Patient Name: " + patientDetails.name);
    console.log("Patient Age: " + patientDetails.age);
    console.log("Is Admitted: " + patientDetails.isAdmitted);   

}
// performing a task
function greet(name, lastName) {
    console.log('Hello' + ' ' + name + ' '+ lastName);
}
greet('Teex', 'Keith');

// calculating a value
function square(number) {
   return number*number
}
console.log(square(10));
//or
let number = square(5);
console.log(number);