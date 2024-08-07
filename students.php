<!-- The School of Advanced Programming (SOAP) is a platform that provides a wide range of courses for students to learn and enhance their skills. The platform offers military grade courses in various ICT fields such as Web Development, Software Engineering Software Applications and Graphics Design. SOAP aims to provide high-quality education to students and help them achieve their career goals.
It also povides training services to colleges on select ICT courses and also provides consultancy services to colleges on ICT related issues.
It also provides a platform for lecturers to request for assignment and thei students to access and submit them. -->

<?php require 'Header.php'; ?>
<!-- Navbar End -->


<!-- Header Start -->
<div class="container-fluid bg-primary py-5 mb-0 page-header">
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
                <h1 class="display-3 text-white animated slideInDown">Students</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                        <li class="breadcrumb-item"><a class="text-white" href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Students</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</div>
<!-- Header End -->


<!-- A colorful banner to advertise offers, discounts and new courses -->
<div class="container-fluid bg-light py-5">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-6">
                <h1 class="mb-4">Get 50% off on all courses</h1>
                <p class="mb-4">Enroll in any course and get 50% off on all courses. Offer valid for a limited time only.</p>
                <a href="student-enroll.html" class="btn btn-primary">Enroll Now</a>
            </div>

            <div id="carouselExampleSlidesOnly" class="col-lg-6 carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/feature-1-soap.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5 class="text-dark">QUICKBOOKS ACCOUNTING</h5>
                                <p>Newly added course</p> -->
                            <a href="#" class="btn btn-dark">view now</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/feature-2-soap.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5 class="text-dark">SPSS Statistics</h5>
                                <p>New course</p> -->
                            <a href="#" class="btn btn-dark">view now</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/feature-3-soap.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5 class="text-dark">GIS Materclass</h5>
                                <p>Let your students Ace GIS</p> -->
                            <a href="#" class="btn btn-dark">view now</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>


<!-- Options/feature for students in SOAP as a platform:
    1. Learn - LMS
    2. live Masterclasses
    3. View and submit assignments
    4. Guided Projects
    A container divided into four colorful columns with images, icons and text to represent the features of the platform for students. -->

<div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row g-5">

            <div class="col-lg-3">
                <a href="courses.html">
                    <div class="card border-0 shadow">
                        <img class="card-img-top" src="img/course-cyber-security.jpg" alt="">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Learn</h5>
                            <p class="card-text text-body">Access to our Learning Management System (LMS) to learn and enhance your skills.</p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-3">
                <a href="masterclasses.html">
                    <div class="card border-0 shadow">
                        <img class="card-img-top" src="img/service-masterclasses.png" alt="">
                        <div class="card-body">
                            <h5 class="card-title
                                mb-3">Live Masterclasses</h5>
                            <p class="card-text text-body">Join our live masterclasses to learn from industry experts and professionals.</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3">
                <a href="courses.html">
                    <div class="card border-0 shadow">
                        <img class="card-img-top" src="img/service-assignment-portal.jpg" alt="">
                        <div class="card-body">
                            <h5 class="card-title
                                mb-3">View & Submit Assignments</h5>
                            <p class="card-text text-body">View and submit assignments to test your knowledge and skills.</p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="col-lg-3">
                <a href="courses.html" class="text-body">
                    <div class="card border-0 shadow">
                        <img class="card-img-top" src="img/course-.jpg" alt="">
                        <div class="card-body">
                            <h5 class="card-title
                                mb-3">Guided Projects</h5>
                            <p class="card-text text-body">Work on guided projects to apply your skills and knowledge in real-world scenarios.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>


<!-- Overview of courses for our students -->
<div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="text-center">
            <!-- <h6 class="section-title bg-white text-center text-primary px-3">Courses</h6> -->
            <h1 class="mb-5">Overview of courses for our students</h1>
        </div>
        <div class="row g-5" id="coursesInStudents">
        </div>
    </div>
</div>
<!-- Overview of courses for our students end -->

<!-- Testimonial Start -->
<div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="text-center">
            <!-- <h6 class="section-title bg-white text-center text-primary px-3">Testimonial</h6> -->
            <h1 class="mb-5">What Our Students Say!</h1>
        </div>
        <div class="owl-carousel testimonial-carousel position-relative">
            <div class="testimonial-item text-center">
                <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-5.jpg" style="width: 80px; height: 80px;">
                <h5 class="mb-0">Claire Wanjiru</h5>
                <p>Accountant</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">
                        <!-- 23 words -->
                        I may have been just the way I was with my manual accounting skills, but now I earn double after learning Quickbooks here.
                    </p>
                </div>
            </div>
            <div class="testimonial-item text-center">
                <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-1.jpg" style="width: 80px; height: 80px;">
                <h5 class="mb-0">Eric Makau</h5>
                <p>Web Developer</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">I did not learn web development. I learn Advanced Web Development. I now currently perform better than everyone else.</p>
                </div>
            </div>
            <div class="testimonial-item text-center">
                <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-3.jpg" style="width: 80px; height: 80px;">
                <h5 class="mb-0">Anthony Othiambo</h5>
                <p>Data Analyst</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Oh Python! My savior. All gratitude to the tutors from SOAP who taught me in the best way that's humanly possible</p>
                </div>
            </div>
            <div class="testimonial-item text-center">
                <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-4.jpg" style="width: 80px; height: 80px;">
                <h5 class="mb-0">Nelson Mwaniki</h5>
                <p>Student</p>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">I learnt at SOAP in Six months what I had been trying to leanr in Campus for four years</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Testimonial End -->


<!-- Footer-->
<?php require 'Footer.php'; ?>