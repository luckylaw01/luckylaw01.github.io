const coursesInIndex = document.getElementById('coursesInIndex');
const instructorsInIndex = document.getElementById('instructorsInIndex');
//Link to course page with url identification parameters using index for each course
const courseLink = 'course.html?course=';

function displayCourses(courses, container) {
    // Limiting to first three courses
    const coursesToShow = courses.slice(0, 3);

    coursesToShow.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'col-lg-4 col-md-6 wow fadeInUp';
        courseElement.setAttribute('data-wow-delay', '0.1s');
        
        courseElement.innerHTML = `
            <div class="course-item bg-light">
                <div class="position-relative overflow-hidden">
                    <img class="img-fluid" src="${course.image}" alt="">
                    <div class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                        <a href="
                            ${courseLink + course.id}
                        " class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style="border-radius: 30px 0 0 30px;">Learn More</a>
                        <a href="${courseLink + course.id}" class="flex-shrink-0 btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;">Enrol Now</a>
                    </div>
                </div>
                <div class="text-center p-4 pb-0">
                    <h3 class="mb-0">Ksh.${course.price.toFixed(2)}</h3>
                    <div class="mb-3">
                        ${'<small class="fa fa-star text-primary"></small>'.repeat(Math.floor(course.rating))}
                        ${course.rating % 1 !== 0 ? '<small class="fa fa-star-half-alt text-primary"></small>' : ''}
                        <small>(${course.students})</small>
                    </div>
                    <h5 class="mb-4">${course.title}</h5>
                </div>
                <div class="d-flex border-top">
                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-user-tie text-primary me-2"></i>${course.instructor}</small>
                    <small class="flex-fill text-center border-end py-2"><i class="fa fa-clock text-primary me-2"></i>${course.duration}</small>
                    <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>${course.students} Students</small>
                </div>
            </div>
        `;

        container.appendChild(courseElement);
    });
}
displayCourses(courses, coursesInIndex);


function displayInstructors(instructors, container) {
    // Limiting to first three instructors
    const instructorsToShow = instructors.slice(0, 4);

    instructorsToShow.forEach((instructor, index) => {
        const instructorElement = document.createElement('div');
        instructorElement.className = `col-lg-3 col-md-6 wow fadeInUp`;
        instructorElement.setAttribute('data-wow-delay', `${0.1 + index * 0.2}s`);
        
        instructorElement.innerHTML = `
            <div class="team-item bg-light">
                <div class="overflow-hidden">
                    <img class="img-fluid" src="${instructor.image}" alt="">
                </div>
                <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                    <div class="bg-light d-flex justify-content-center pt-2 px-1">
                        <a class="btn btn-sm-square btn-primary mx-1" href="${instructor.facebook}"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square btn-primary mx-1" href="${instructor.twitter}"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square btn-primary mx-1" href="${instructor.instagram}"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="text-center p-4">
                    <h5 class="mb-0">${instructor.name}</h5>
                    <small>${instructor.title}</small>
                </div>
            </div>
        `;
        container.appendChild(instructorElement);
    });
}

displayInstructors(instructors, instructorsInIndex);