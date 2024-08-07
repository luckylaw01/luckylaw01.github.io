<?php require 'Header.php'; ?>
<!-- Navbar End -->

<!-- This a single course Page. It has All course details. -->

<!-- Page header start -->
<div class="container-fluid bg-primary py-5" id="courseHeader">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <h1 class="text-white
                        ">Advanced Web Development</h1>
                <p class="text-white mb-0">Learn to build high quality websites and web applications</p>
            </div>
            <div class="col-lg-6">
                <img class="img-fluid" src="img/course-2.jpg" alt="">
            </div>
        </div>
    </div>
</div>
<!-- Page header end -->

<!-- Course details start -->
<div class="container py-5" id="courseDetails">
    <div class="row">
        <div class="col-lg-8">
            <h3>Course Description</h3>
            <p class="text-muted
                    ">This course is designed to help you learn how to build high quality websites and web applications. You will learn how to build websites using HTML, CSS, JavaScript, PHP, MySQL, and other web technologies. You will also learn how to use popular web development tools like Git, GitHub, and Visual Studio Code. By the end of this course, you will have the skills and knowledge you need to build your own websites and web applications.</p>
            <h3>Course Content</h3>
            <ul class="list-unstyled">
                <li>Introduction to Web Development</li>
                <li>HTML and CSS</li>
                <li>JavaScript</li>
                <li>PHP and MySQL</li>
                <li>Web Development Tools</li>
            </ul>
            <h3>Course Instructor</h3>
            <div class="d-flex align-items-center">
                <img class="img-fluid me-3" src="img/instructor-1.jpg" style="width: 80px; height: 80px;" alt="">
                <div>
                    <h5 class="mb-0">John
                    </h5>
                    <p class="mb-0">Web Developer</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title
                            ">Course Details</h5>
                    <ul class="list-unstyled">
                        <li><i class="bi bi-calendar3 me-2"></i>Start Date: 01/01/2022</li>
                        <li><i class="bi bi-clock me-2"></i>Duration: 6 Months</li>
                        <li><i class="bi bi-people me-2"></i>Students: 50</li>
                        <li><i class="bi bi-award me-2"></i>Certificate: Yes</li>
                        <li><i class="bi bi-currency-dollar me-2"></i>Price: $500</li>
                    </ul>
                    <a href="" class="btn btn-primary w-100">Enroll Now</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Course details end -->

<!-- Course curriculum start -->
<div class="container-fluid bg-light py-5" id="courseCurriculum">
    <div class="container">
        <h3 class="text-center">Course Curriculum</h3>
        <div class="accordion" id="courseCurriculum">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Introduction to Web Development
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#courseCurriculum">
                    <div class="accordion-body">
                        <ul class="list-unstyled">
                            <li>What is Web Development?</li>
                            <li>How the Web Works</li>
                            <li>Web Development Tools</li>
                            <li>Web Development Technologies</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        HTML and CSS
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#courseCurriculum">
                    <div class="accordion-body">
                        <ul class="list-unstyled">
                            <li>Introduction to HTML</li>
                            <li>HTML Elements</li>
                            <li>Introduction to CSS</li>
                            <li>CSS Properties</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        JavaScript
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#courseCurriculum">
                    <div class="accordion-body">
                        <ul class="list-unstyled">
                            <li>Introduction to JavaScript</li>
                            <li>JavaScript Variables</li>
                            <li>JavaScript Functions</li>
                            <li>JavaScript Objects</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        PHP and MySQL
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#courseCurriculum">
                    <div class="accordion-body">
                        <ul class="list-unstyled">
                            <li>Introduction to PHP</li>
                            <li>PHP Variables</li>
                            <li>Introduction to MySQL</li>
                            <li>MySQL Queries</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Web Development Tools
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#courseCurriculum">
                    <div class="accordion-body">
                        <ul class="list-unstyled">
                            <li>Introduction to Git</li>
                            <li>Introduction to GitHub</li>
                            <li>Introduction to Visual Studio Code</li>
                            <li>Web Development Best Practices</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Course curriculum end -->

<!-- Course instructor start -->
<div class="container py-5" id="courseInstructor">
    <h3 class="text-center">Course Instructor</h3>
    <div class="row g-4">
        <div class="col-lg-4">
            <div class="card">
                <img class="img-fluid" src="img/instructor-1.jpg" alt="">
                <div class="card-body">
                    <h5 class="card-title">John</h5>
                    <p class="card-text">Web Developer</p>
                    <a href="" class="btn btn-primary">View Profile</a>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <img class="img-fluid" src="img/instructor-2.jpg" alt="">
                <div class="card-body">
                    <h5 class="card-title
                            ">Jane</h5>
                    <p class="card-text">Web Developer</p>
                    <a href="" class="btn btn-primary">View Profile</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Course instructor end -->

<!-- Related Courses Start -->
<div class="container-fluid bg-light py-5" id="relatedCourses">
    <div class="container">
        <h3 class="text-center">Related Courses</h3>
        <div class="row g-4">
            <div class="col-lg-4">
                <div class="card">
                    <img class="img-fluid" src="img/course-1.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title
                                ">Web Development</h5>
                        <p class="card-text">Learn to build high quality websites and web applications</p>
                        <a href="" class="btn btn-primary">View Course</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <img class="img-fluid" src="img/course-3.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title
                                ">Software Engineering</h5>
                        <p class="card-text">Learn to build high quality software applications</p>
                        <a href="" class="btn btn-primary">View Course</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <img class="img-fluid" src="img/course-4.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title
                                ">Graphics Design</h5>
                        <p class="card-text">Learn to create high quality graphics and designs</p>
                        <a href="" class="btn btn-primary">View Course</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Related Courses End -->



<!--Course Testimonial Start -->
<div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="text-center">
            <!-- <h6 class="section-title bg-white text-center text-primary px-3">Testimonial</h6> -->
            <h1 class="mb-5">Testimonials</h1>
        </div>
        <div class="owl-carousel testimonial-carousel position-relative">
            <div class="testimonial-item text-center">
                <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-5.jpg" style="width: 80px; height: 80px;">
                <h5 class="mb-0">John Doe</h5>
                <p>Web Developer</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">
                        <!-- 23 words -->
                        I really enjoyed the JavaScript section of this course. The explanations were clear and the exercises were helpful in solidifying my understanding.
                    </p>
                </div>
            </div>
            <div class="testimonial-item text-center">
                <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-1.jpg" style="width: 80px; height: 80px;">
                <h5 class="mb-0">Jane Smith</h5>
                <p>PHP Developer</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">The PHP and MySQL section of this course was fantastic. I learned a lot and now feel confident in building dynamic web applications.</p>
                </div>
            </div>
            <div class="testimonial-item text-center">
                <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-3.jpg" style="width: 80px; height: 80px;">
                <h5 class="mb-0">Sarah Johnson</h5>
                <p>Web Designer</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">The web development tools section of this course was extremely helpful. I learned how to use Git, GitHub, and Visual Studio Code effectively.</p>
                </div>
            </div>
            <div class="testimonial-item text-center">
                <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-4.jpg" style="width: 80px; height: 80px;">
                <h5 class="mb-0">Michael Brown</h5>
                <p>Frontend Developer</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">I highly recommend this course. The instructors are knowledgeable and the course material is well-structured. I learned a lot and improved my skills.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Course Testimonial End -->

<!-- Footer-->
<?php require 'Footer.php'; ?>