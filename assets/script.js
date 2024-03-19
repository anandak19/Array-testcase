var students  = [
    {name: 'Anu', age: 19, department: 'Computer Science', totalMarks: 700},
    {name: 'Manoj', age: 18, department: 'Biology Science', totalMarks: 650},
    {name: 'Sujith', age: 18, department: 'Commerce', totalMarks: 710},
    {name: 'Rahul', age: 19, department: 'Computer Science', totalMarks: 750},
    {name: 'Krishna', age: 19, department: 'Biology Science', totalMarks: 610},
    {name: 'Surya', age: 17, department: 'Commerce', totalMarks: 725},
    {name: 'Nishad', age: 18, department: 'Humanities', totalMarks: 699},
    {name: 'Sanker', age: 20, department: 'Computer Science', totalMarks: 680},
    {name: 'Sandra', age: 18, department: 'Biology Science', totalMarks: 627},
    {name: 'Athira', age: 17, department: 'Commerce', totalMarks: 740},
    {name: 'Joyal', age: 17, department: 'Computer Science', totalMarks: 728},
    {name: 'Sanuja', age: 18, department: 'Biology Science', totalMarks: 687},
    {name: 'Kiran', age: 19, department: 'Humanities', totalMarks: 790},
    {name: 'Nishad', age: 17, department: 'Biology Science', totalMarks: 600},
    {name: 'Praveena', age: 18, department: 'Humanities', totalMarks: 800},
    {name: 'Krishna', age: 17, department: 'Commerce', totalMarks: 725},
    {name: 'Sujith', age: 17, department: 'Humanities', totalMarks: 755},
  ];

//   function to display an Array of students into table 
function displayTable(studentsArray) {
    var tableBody = document.getElementById('tableBody');

    tableBody.innerHTML = '';

    studentsArray.forEach((student) => {
        var row = document.createElement('tr');

        var nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        var ageCell = document.createElement('td');
        ageCell.textContent = student.age;
        row.appendChild(ageCell);

        var departmentCell = document.createElement('td');
        departmentCell.textContent = student.department;
        row.appendChild(departmentCell);

        var totalMarksCell = document.createElement('td');
        totalMarksCell.textContent = student.totalMarks;
        row.appendChild(totalMarksCell);

        tableBody.appendChild(row);
    });
}


function sortByName() {
     students.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    });
}

function sortByDepartment() {
    students.sort((a, b) => {
        if (a.department < b.department) {
            return -1;
        } else if (a.department > b.department) {
            return 1;
        } else {
            return 0;
        }
    });
}

function sortByAge() {
    return students.sort((a, b) => a.age - b.age);
}

function sortByTotalMarks() {
    return students.sort((a, b) => a.age - b.age);
}

function handleSelection() {
    var dropdown = document.getElementById("sortDropdown");
    var selectedValue = dropdown.value;
    if (selectedValue == 'name') {
        sortByName();
        displayTable(students);

    }else if (selectedValue == 'age'){
        sortByAge();
        displayTable(students);

    }else if (selectedValue == 'department'){
        sortByDepartment();
        displayTable(students);

    }else if (selectedValue == 'totalMarks'){
        sortByTotalMarks();
        displayTable(students);

    }else{
        alert("Select a field to sort")
    }
  }


  function searchStudentName() {
    var searchInput = document.getElementById("searchInput");
    var inputName = searchInput.value;

    studentName = inputName.toLowerCase();
    var foundStudents = students.filter((student) => {
       return student.name.toLowerCase() == studentName;
    });
    displayTable(foundStudents)
}


function filterStudents() {
    var filterMarkInput = document.getElementById('filterInput');
    var filterMark = parseInt(filterMarkInput.value);

    const greaterMark = students.filter((students) => {
        return students.totalMarks > filterMark
    });

    displayTable(greaterMark)
}


displayTable(students);