// function addition(x, y , callback){
//     setTimeout(() => {
//     document.write(`The sum of ${x} and ${y} is ${x+y}.`); 
//     callback(); 
//      }, 5000); } 
//      // display() function is called just after the ending of addition() function
//     function mycallback(){ 
//     document.write('Numbers added and thank u'); 
//      } 
//      // Calling addition() function
//     addition(5,5,mycallback);






// Pretend that this response is coming from the server
const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}  ""${student.subject}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();

