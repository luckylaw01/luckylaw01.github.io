// This is the javascript file for colleges.html

const coursesInColleges = document.getElementById('coursesInColleges');

function displayAllCoursesForColleges(courses, container) {
    courses
        .filter(course => course.isForColleges)
        .forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'col-lg-4';

            courseElement.innerHTML = `
                <div class="card border-0 shadow">
                    <img class="card-img-top" src="${course.image}" alt="">
                    <div class="card-body">
                        <h5 class="card-title mb-3">${course.title}</h5>
                        <p class="card-text">${course.description}</p>
                        <a href="course.html?course=${course.id}" class="btn btn-link text-primary">Learn More</a>
                    </div>
                </div>
            `;
            container.appendChild(courseElement);
        });
}

displayAllCoursesForColleges(courses, coursesInColleges);