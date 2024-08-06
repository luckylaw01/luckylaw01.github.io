function displayCourses() {
    let coursesDiv = document.getElementById('courses');
    coursesDiv.innerHTML = '';

    window.courses.slice(0, 3).forEach(course => {
        let courseCard = `
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${course.title}</h5>
                        <p class="card-text">${course.description}</p>
                        <p class="card-text"><small class="text-muted">Instructor: ${course.instructor}</small></p>
                        <p class="card-text"><small class="text-muted">Price: KES ${course.price}</small></p>
                        <div class="d-flex justify-content-between">
                            <a href="#" class="btn btn-primary">Edit</a>
                            <a href="#" class="btn btn-danger">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        coursesDiv.innerHTML += courseCard;
    });
}

function populateInstructors() {
    let instructorSelect = document.getElementById('instructor');
    instructorSelect.innerHTML = '';

    window.instructors.forEach(instructor => {
        let option = document.createElement('option');
        option.value = instructor.id;
        option.text = instructor.name;
        instructorSelect.appendChild(option);
    });
}

const addCourseForm = document.getElementById('add-course-form');
const courseCode = document.getElementById('course-code');
const copyCourseCode = document.getElementById('copy-course-code');

addCourseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Course added successfully!');

    const newCourse = {
        id: window.courses.length + 1,
        title: addCourseForm.title.value,
        description: addCourseForm.description.value,
        instructorId: parseInt(addCourseForm.instructor.value),
        instructor: addCourseForm.instructor.options[addCourseForm.instructor.selectedIndex].text,
        price: parseInt(addCourseForm.price.value),
        image: addCourseForm.image.value,
        duration: addCourseForm.duration.value,
        level: addCourseForm.level.value,
        category: addCourseForm.category.value,
        topics: addCourseForm.topics.value.split(',').map(topic => topic.trim())
    };

    window.courses.push(newCourse);
    displayCourses();

    const code = courseCode.querySelector('pre');
    code.innerText = JSON.stringify(newCourse, null, 4);
});

copyCourseCode.addEventListener('click', () => {
    const code = courseCode.querySelector('pre').innerText;
    navigator.clipboard.writeText(code);

    copyCourseCode.innerText = 'Copied!';
    setTimeout(() => {
        copyCourseCode.innerText = 'Copy Code';
    }, 2000);
});

populateInstructors();
displayCourses();
