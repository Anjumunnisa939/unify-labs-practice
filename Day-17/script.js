console.log("Student Dashboard Started");

const output = document.getElementById("output");

// student data
const students = [
    { name: "Anjum", marks: 80 },
    { name: "Sara", marks: 45 },
    { name: "Ali", marks: 90 },
    { name: "John", marks: 60 }
];


// rest operator
function printNames(...names) {
    console.log("Names:", names);
}

printNames("Anjum", "Sara", "Ali");


// show all students using for...of
function showAll() {

    let result = "";

    for (const student of students) {
        result += student.name + " : " + student.marks + "<br>";
    }

    output.innerHTML = result;
}


// filter passed students
function showPassed() {

    const passed = students.filter(s => s.marks >= 50);

    let result = "";

    passed.forEach(s => {
        result += s.name + " : " + s.marks + "<br>";
    });

    output.innerHTML = result;
}


// map + spread operator
function addBonus() {

    const bonus = students.map(s => {
        return {
            ...s,
            marks: s.marks + 5
        };
    });

    let result = "Bonus Added:<br>";

    bonus.forEach(s => {
        result += s.name + " : " + s.marks + "<br>";
    });

    output.innerHTML = result;
}


// reduce + destructuring
function showAverage() {

    const total = students.reduce((sum, s) => sum + s.marks, 0);

    const avg = total / students.length;

    const { name, marks } = students[0];

    output.innerHTML =
        "Average Marks: " + avg + "<br>" +
        "First Student: " + name + " (" + marks + ")";
}
