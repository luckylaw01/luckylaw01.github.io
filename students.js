// This is the javascript file for students.html
const coursesInStudents = document.getElementById('coursesInStudents');


function displayCoursesInStudents(courses, coursesInStudents) {
    const limitedCourses = courses.slice(0, 6); // Limit the courses to the first 6
    limitedCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('col-lg-4');
        courseCard.innerHTML = `
            <div class="card border-0 shadow">
                <img class="card-img-top" src="${course.image}" alt="">
                <div class="card-body">
                    <h5 class="card-title mb-3">${course.title}</h5>
                    <p class="card-text">${course.description}</p>
                    <a href="course.html?id=${course.id}" class="btn btn-link text-primary">Learn More</a>
                </div>
            </div>
        `;

        coursesInStudents.appendChild(courseCard);
    });
}

displayCoursesInStudents(courses, coursesInStudents);

