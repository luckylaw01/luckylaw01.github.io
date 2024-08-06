

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

/*

    <!-- Add course end -->


    <!-- view all courses in a table 
        {
        id: 1,
        title: "Web Development",
        description: "This course is designed to give students a foundational understanding of web development. Students will learn the basics of HTML, CSS, and JavaScript.",
        instructorId: instructors[5].id,
        instructor: instructors[5].name,
        price: 10000,
        image: "img/course-web-design.jpg",
        duration: "3 months",
        level: "Beginner",
        students: 27,
        rating: 5,
        category: "webDevelopment",
        isForColleges: true,
        isOngoing: true,
        topics: [
            {
                title: "HTML",
                subtopics: ["Elements", "Attributes", "Tags"]
            }, 
            {
                title: "CSS",
                subtopics: ["Selectors", "Properties", "Values"]
            },
            {
                title: "JavaScript",
                subtopics: ["Variables", "Functions", "Loops"]
            }
        ]
    }

    All columns except the topics should be displayed in the table. The topics should be displayed in a modal when the course is clicked. -->

-->

<!-- View Courses Start -->
<div class="container-fluid bg-light py-5">
    <div class="container py-5">
        <h2 class="fw-bold mb-4">View Courses</h2>
        <div class="table-responsive" id="viewAllCourses">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Duration</th>
                        <th>Level</th>
                        <th>Students</th>
                        <th>Rating</th>
                        <th>Category</th>
                        <th>For Colleges</th>
                        <th>Ongoing</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Web Development</td>
                        <td>L Munyaka</td>
                        <td>10000</td>
                        <td>3 months</td>
                        <td>Beginner</td>
                        <td>27</td>
                        <td>5</td>
                        <td>Web Development</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Software Engineering</td>
                        <td>J Doe</td>
                        <td>15000</td>
                        <td>6 months</td>
                        <td>Intermediate</td>
                        <td>15</td>
                        <td>4</td>
                        <td>Software Engineering</td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Software Applications</td>
                        <td>K Smith</td>
                        <td>12000</td>
                        <td>4 months</td>
                        <td>Advanced</td>
                        <td>20</td>
                        <td>4.5</td>
                        <td>Software Applications</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<!-- View Courses End -->

*/

function displayCourses() {
    let viewAllCourses = document.getElementById('viewAllCourses');
    viewAllCourses.innerHTML = '';

    window.courses.forEach(course => {
        let courseRow = document.createElement('tr');
        courseRow.innerHTML = `
            
                <td>${course.id}</td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td>${course.price}</td>
                <td>${course.duration}</td>
                <td>${course.level}</td>
                <td>${course.students}</td>
                <td>${course.rating}</td>
                <td>${course.category}</td>
                <td>${course.isForColleges ? 'Yes' : 'No'}</td>
                <td>${course.isOngoing ? 'Yes' : 'No'}</td>
            
        `;
        viewAllCourses.appendChild(courseRow);
    });
}

displayCourses();


