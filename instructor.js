

// Get the instructor id from the url
const urlParams = new URLSearchParams(window.location.search);
const instructorId = parseInt(urlParams.get('id'));

// Find the instructor with the given id
const instructor = instructors.find(instructor => instructor.id === instructorId);

// Set the page title to the instructor's name
document.title = instructor.name;

// Set the page header
document.getElementById('instructorHeader').innerHTML = `
    <div class="container-fluid bg-primary py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="text-white">${instructor.name}</h1>
                    <p class="text-white
                    ">${instructor.title}</p>
                </div>
                <div class="col-lg-6">
                    <img class="img-fluid" src="${instructor.image}" alt="">
                </div>
            </div>
        </div>
    </div>
`;

// Set the instructor details
document.getElementById('instructor-details').innerHTML = `
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-8">
                <h2 class="mb-4">About ${instructor.name}</h2>
                <p class="mb-4">${instructor.bio}</p>
                <h3 class="mb-4">Courses Taught by ${instructor.name}</h3>
                <div class="row">
                    ${instructor.courses.map(courseId => {
                        const course = courses.find(course => course.id === courseId);
                        return `
                            <div class="col-md-6">
                                <div class="course-item bg-light p-4 mb-4">
                                    <img class="img-fluid mb-3" src="${course.image}" alt="">
                                    <h4 class="mb-3">${course.title}</h4>
                                    <p class="mb-0">${course.description}</p>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card bg-light p-4">
                    <h3 class="mb-4">Contact ${instructor.name}</h3>
                    <p class="mb-2"><i class="bi bi-envelope me-3"></i>
                    <a href="mailto: ${instructor.email}">${instructor.email}
                    </a> </p>
                    <p class="mb-2"><i class="bi bi-telephone me-3"></i>${instructor.phone}</p>
                    <p class="mb-2"><i class="bi bi-geo-alt me-3"></i>${instructor.location}</p>
                    <div class="d-flex">
                        <a href="#" class="btn btn-primary me-2">Email</a>
                        <a href="#" class="btn btn-primary">Call</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

// Set the other instructors
document.getElementById('other-instructors').innerHTML = `
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="text-center">
                <h6 class="section-title bg-white text-center text-primary px-3">Instructors</h6>
                <h1 class="mb-5">Meet Our Instructors</h1>
            </div>
            <div class="row g-4">
                ${instructors.filter(otherInstructor => otherInstructor.id !== instructorId).map(otherInstructor => `
                    <div class="col-lg-3 col-md-6">
                        <div class="instructor
                        -item bg-light p-4 text-center">
                            <img class="img-fluid mb-3" src="${otherInstructor.image}" alt="">
                            <h4 class="mb-3">${otherInstructor.name}</h4>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
`;

