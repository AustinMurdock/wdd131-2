
const course1 = {
    code: "CSE121b",
    name: "Javascript Language",
    logo: "images/javascript.svg",
    sections: [
        { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T"},
        { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A"},
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        };
        console.log("student enrolled to section " + sectionNum);
    },
};

function setCourse(course) {
    document.getElementById("courseName").innerText = course.name;
    document.getElementById("courseCode").innerText = course.code;
    document.getElementById("courseLogo").setAttribute("src", course.logo);
}

function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`;
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

setCourse(course1);
renderSections(course1.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    course1.enrollStudent(sectionNum);
});
