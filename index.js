const Marks =prompt("Enter student marks (between 0 and 100):");

// Check the grade based on the input marks
let grade;
if (Marks >= 80) {
    grade = "A";
} else if (Marks >= 60) {
    grade = "B";
} else if (Marks >= 50) {
    grade = "C";
} else if (Marks >= 40) {
    grade = "D";
} else {
    grade = "E";
}

// Output the result
console.log(`The student's grade is: ${grade}`);