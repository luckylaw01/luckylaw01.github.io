const coursesInCourses = document.getElementById('coursesInCourses');
const courseLink = 'course.html?course=';

function displayAllCourses(courses, container) {
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'col-lg-4';
        
        courseElement.innerHTML = `
            <div class="card border-0 shadow">
                <img class="card-img-top" src="${course.image}" alt="">
                <div class="card-body">
                    <h5 class="card-title mb-3">${course.title}</h5>
                    <p class="card-text">${course.description}</p>
                    <a href="${courseLink + course.id }" class="btn btn-link text-primary">Learn More</a>
                </div>
            </div>
        `;

        container.appendChild(courseElement);
    });
}


// Call the function to display courses
displayAllCourses(courses, coursesInCourses);

