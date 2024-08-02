//Javascript file for course.html

//Extract courseId from the url
const url = window.location.href;
let courseId = url.split('?')[1].split('=')[1];

// Note courseId-1 corresponds to the index of the course in the array courses in data.js

const courseHeader = document.getElementById('courseHeader');
const courseDetails = document.getElementById('courseDetails');
const courseInstructor = document.getElementById('courseInstructor');
const courseCurriculum = document.getElementById('courseCurriculum');

courseId = courseId - 1;
// Get the instructor details(index in the instructors array)
const instructorId = courses[courseId].instructorId - 1;

// Course Header
courseHeader.innerHTML = `
<div class="container-fluid bg-primary py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <h1 class="text-white">${courses[courseId].title}</h1>
                        <p class="text-white
                        ">${courses[courseId].description}</p>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid" src="${courses[courseId].image}" alt="">
                    </div>
                </div>
            </div>
        </div>
`;

courseCurriculum.innerHTML = `
<div class="container-fluid bg-light py-5">
            <div class="container">
                <h3 class="text-center">Course Curriculum</h3>
                <div class="accordion" id="courseCurriculum">
                    ${courses[courseId].topics.map((topic, index) => {
                        return `
                        <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                ${topic.title}
                            </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#courseCurriculum">
                            <div class="accordion-body">
                                <ul class="list-unstyled">
                                    ${topic.subtopics.map(subtopic => {
                                        return `<li>${subtopic}</li>`
                                    }).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                        `
                    }).join('')}
                </div>
            </div>
        </div>
`;

courseDetails.innerHTML = `
<div class="container py-5">
            <div class="row">
                <div class="col-lg-8">
                    <h3>Course Description</h3>
                    <p class="text-muted">${courses[courseId].description}</p>
                    <h3>Course Content</h3>
                    <ul class="list-unstyled">
                        ${courses[courseId].topics.map(topic => {
                            return `<li>${topic.title}</li>`
                        }).join('')}
                    </ul>
                    <h3>Course Instructor</h3>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid me-3" src="${instructors[instructorId].image}" style="width: 80px; height: 80px;" alt="">
                        <div>
                            <h5 class="mb-0">${courses[courseId].instructor}
                            </h5>
                            <p class="mb-0">${instructors[instructorId].title}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title ">Course Details</h5>
                            <ul class="list-unstyled">
                                <li><i class="bi bi-calendar3 me-2"></i>Start Date: 01/01/2022</li>
                                <li><i class="bi bi-clock me-2"></i>Duration: ${courses[courseId].duration}</li>
                                <li><i class="bi bi-people me-2"></i>Students: ${courses[courseId].students}</li>
                                <li><i class="bi bi-award me-2"></i>Certificate: Yes</li>
                                <li><i class="bi bi-currency-dollar me-2"></i>Price: Ksh. ${courses[courseId].price}</li>
                            </ul>
                            <a href="student-enroll.html" class="btn btn-primary w-100">Enroll Now</a>
                            
                            <div class="mb-3"></div>
                            <h5 class="card-title ">Are you a college?</h5>
                            <a href="college-request.html?id=${courseId}&instructorId=${instructorId}" class="btn btn-primary w-100">Request Course</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

courseInstructor.innerHTML = `
        <div class="container py-5">
            <h3 class="text-center">Course Instructor</h3>
            <div class="row g-4">
                <div class="col-lg-4">
                    <div class="card">
                        <img class="img-fluid" src="${instructors[instructorId].image}" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${courses[courseId].instructor}</h5>
                            <p class="card-text">${instructors[instructorId].title}</p>
                            <a href="instructor.html?id=${instructorId+1}" class="btn btn-primary mb-2">View Profile</a>
                            <a href="${instructors[instructorId].facebook}" class="btn btn-primary mb-2">Facebook</a>
                            <a href="${instructors[instructorId].twitter}" class="btn btn-primary mb-2">Twitter</a>
                            <a href="${instructors[instructorId].instagram}" class="btn btn-primary mb-2">Instagram</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="mb-5"></div>
                    <h4>About ${courses[courseId].instructor}</h4>
                    <p>${instructors[instructorId].bio}</p>    
                    
                </div>
            </div>
        </div>
         <!-- Course instructor end -->
         `;

// Related Courses

const relatedCourses = document.getElementById('relatedCourses');

relatedCourses.innerHTML = `
<div class="container-fluid bg-light py-5" id="relatedCourses">
    <div class="container">
        <h3 class="text-center">Related Courses</h3>
        <div class="row g-4">
            ${courses
                .filter(course => course.category === courses[courseId].category)
                .map(course => {
                    return `
                    <div class="col-lg-4">
                        <div class="card">
                            <img class="img-fluid" src="${course.image}" alt="">
                            <div class="card-body">
                                
                                <h5 class="card-title">${course.title}</h5>
                                <p class="card-text">${course.description}</p>
                                <a href="course.html?id=${course.id}" class="btn btn-primary">View Course</a>
                            </div>
                        </div>
                    </div>
                    `;
                })
                .join('')}
        </div>
    </div>
</div>
`;








