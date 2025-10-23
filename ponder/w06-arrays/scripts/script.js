
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

function parseGrades(string) {
    return string.toUpperCase().split("").filter(char => // uppercase, split each into a character array, then filter
        ("ABCDF".includes(char)) // filter based on if matches grade letters
    );
}

function average(array) {
    return array.reduce((r, n) => r+n) / array.length; // sum array of numbers, then average
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'},
];


// messing around:
// students table doesn't have grades, so adding those:
let allStudents = students;
allStudents.forEach(student => // for each student entry,
    // set a grade average from the parsed letters of their name,
    student.grade = average(parseGrades(student.first).map(grade =>
        convert(grade)) // which are converted to points for the average <-
    )
);
console.log(allStudents);

console.log(words);
// same as with students grade assignment, but executed on given word array:
gradeWords = words.map(word => parseGrades(word));
console.log(gradeWords);

gpaWords = gradeWords.map(grades =>
    average(grades.map(grade => 
        convert(grade)
    ))
);
console.log(gpaWords);

// add words to student list as students:
for (let i = 0; i < words.length; i++) {
    allStudents.push({last: "", first: words[i], grade: gpaWords[i]}) // words are now students
}
console.log(allStudents);

