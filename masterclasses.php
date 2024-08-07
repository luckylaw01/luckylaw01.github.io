<!-- This is the page displaying Masterclasses being offered -->
<!-- The School of Advanced Programming (SOAP) is a platform that provides a wide range of courses for students to learn and enhance their skills. The platform offers military grade courses in various ICT fields such as Web Development, Software Engineering Software Applications and Graphics Design. SOAP aims to provide high-quality education to students and help them achieve their career goals.
It also povides training services to colleges on select ICT courses and also provides consultancy services to colleges on ICT related issues.
It also provides a platform for lecturers to request for assignment and thei students to access and submit them. -->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>SOAP - Masterclasses</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="School of Advanced Programming (SOAP) is a platform that provides a wide range of courses for students to learn and enhance their skills." name="description" />
  <meta content="School of Advanced Programming, SOAP, School of Advanced Programming (SOAP), SOAP Kenya, Programming , SOAP Online, SOAP Courses, Computer Science, SOAP Colleges, SOAP Instructors, SOAP Team, SOAP Testimonials, Quickbooks instructor, SOAP 404, Web Development, Graphics Design" name="keywords" />

  <!-- Favicon -->
  <link href="img/favicon.png" rel="icon" />

  <!-- Google Web Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet" />

  <!-- Icon Font Stylesheet -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

  <!-- Libraries Stylesheet -->
  <link href="lib/animate/animate.min.css" rel="stylesheet" />
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

  <!-- Customized Bootstrap Stylesheet -->
  <link href="css/bootstrap.min.css" rel="stylesheet" />

  <!-- Template Stylesheet -->
  <link href="css/style.css" rel="stylesheet" />
  <script src="data.js" defer></script>
  <script src="masterclasses.js" defer></script>
  <style>
    .masterclass-container {
      display: flex;
      margin-bottom: 20px;
      background: #f9f9f9;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      overflow: hidden;
    }

    .masterclass-image {
      position: relative;
      width: 40%;
    }

    .masterclass-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .masterclass-title {
      position: absolute;
      bottom: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
    }

    .masterclass-details {
      padding: 20px;
      width: 60%;
    }

    .masterclass-details h5 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .masterclass-details p {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    .masterclass-details .info {
      font-size: 0.9rem;
      margin-bottom: 5px;
    }

    .masterclass-details .price,
    .masterclass-details .date {
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 5px;
    }

    @media (max-width: 768px) {
      .masterclass-container {
        flex-direction: column;
      }

      .masterclass-image {
        width: 100%;
      }

      .masterclass-details {
        width: 100%;
      }
    }
  </style>
</head>

<body>
  <!-- Spinner Start -->
  <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div class="spinner-border text-primary" style="width: 3rem; height: 3rem" role="status">
      <span class="sr-only">S.0.A.P</span>
    </div>
  </div>
  <!-- Spinner End -->

  <!-- Navbar Start -->
  <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a href="index.php" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
      <h2 class="m-0 text-primary">
        <!--</a></a> code icon -->
        <i class="bi bi-code-slash"></i>
        SOAP
      </h2>
    </a>
    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <a href="index.php" class="nav-item nav-link active">Home</a>
        <a href="courses.php" class="nav-item nav-link">Courses</a>
        <a href="students.php" class="nav-item nav-link">Students</a>
        <a href="colleges.php" class="nav-item nav-link">Colleges</a>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About</a>
          <div class="dropdown-menu fade-down m-0">
            <a href="team.php" class="dropdown-item">Our Team</a>
            <a href="testimonial.php" class="dropdown-item">Testimonial</a>
            <a href="contact.php" class="dropdown-item">Contact</a>
          </div>
        </div>
      </div>
      <a href="student-enroll.php" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i class="fa fa-arrow-right ms-3"></i></a>
    </div>
  </nav>
  <!-- Navbar End -->

  <!-- Header Start -->
  <div class="container-fluid bg-primary py-5 mb-0 page-header">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10 text-center">
          <h1 class="display-3 text-white animated slideInDown">
            Masterclasses
          </h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <a class="text-white" href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-white" href="#">Pages</a>
              </li>
              <li class="breadcrumb-item text-white active" aria-current="page">
                Masterclasses
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!-- Header End -->

  <!-- Masterclasses Start -->
  <!-- Masterclasses are online classes that are organized to allow students to learn from the best in the industry. The classes are taught by professionals who have been in the industry for a long time and have a lot of experience. The classes are designed to help students learn new skills and improve their existing skills. The classes are also a great way for students to network with other students and professionals in the industry. They also target students with upcoming examinations.like KNEC, KASNEB, ICDL, and many more. -->

  <!-- The masterclass card should have the following details:
    - Course Name
    - Course Description
    - course Instructor
    - Masterclass Fee
    - Masterclass Date
    - Masterclass Time
    - Masterclass Duration
    - Masterclass Venue
    - Masterclass Target Audience
    - Masterclass Requirements
    - Masterclass Benefits -->

  <div class="container py-5">
    <div class="row g-4" id="masterclassesInMasterclasses"></div>
  </div>

  <!-- Testimonial Start -->
  <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
      <div class="text-center">
        <!-- <h6 class="section-title bg-white text-center text-primary px-3">Testimonial</h6> -->
        <h1 class="mb-5">Our Students Say!</h1>
      </div>
      <div class="owl-carousel testimonial-carousel position-relative">
        <div class="testimonial-item text-center">
          <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-5.jpg" style="width: 80px; height: 80px" />
          <h5 class="mb-0">Claire Wanjiru</h5>
          <p>Accountant</p>
          <div class="testimonial-text bg-light text-center p-4">
            <p class="mb-0">
              <!-- 23 words -->
              I may have been just the way I was with my manual accounting
              skills, but now I earn double after learning Quickbooks here.
            </p>
          </div>
        </div>
        <div class="testimonial-item text-center">
          <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-1.jpg" style="width: 80px; height: 80px" />
          <h5 class="mb-0">Eric Makau</h5>
          <p>Web Developer</p>
          <div class="testimonial-text bg-light text-center p-4">
            <p class="mb-0">
              I did not learn web development. I learn Advanced Web
              Development. I now currently perform better than everyone else.
            </p>
          </div>
        </div>
        <div class="testimonial-item text-center">
          <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-3.jpg" style="width: 80px; height: 80px" />
          <h5 class="mb-0">Anthony Othiambo</h5>
          <p>Data Analyst</p>
          <div class="testimonial-text bg-light text-center p-4">
            <p class="mb-0">
              Oh Python! My savior. All gratitude to the tutors from SOAP who
              taught me in the best way that's humanly possible
            </p>
          </div>
        </div>
        <div class="testimonial-item text-center">
          <img class="border rounded-circle p-2 mx-auto mb-3" src="img/testimonials-4.jpg" style="width: 80px; height: 80px" />
          <h5 class="mb-0">Nelson Mwaniki</h5>
          <p>Student</p>
          <div class="testimonial-text bg-light text-center p-4">
            <p class="mb-0">
              I learnt at SOAP in Six months what I had been trying to leanr
              in Campus for four years
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Testimonial End -->

  <!-- Footer Start -->
  <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Quick Link</h4>
          <a class="btn btn-link" href="about.php">About Us</a>
          <a class="btn btn-link" href="contact.php">Contact Us</a>
          <a class="btn btn-link" href="privacy.php">Privacy Policy</a>
          <a class="btn btn-link" href="terms.php">Terms & Condition</a>
          <a class="btn btn-link" href="faq.php">FAQs & Help</a>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Contact</h4>
          <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Tumaini, Ongata Rongai, Kenya</p>
          <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+254762303141</p>
          <p class="mb-2"><i class="fa fa-envelope me-3"></i>soapinstitute@onmail.com</p>
          <div class="d-flex pt-2">
            <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-youtube"></i></a>
            <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Gallery</h4>
          <div class="row g-2 pt-2">
            <div class="col-4">
              <img class="img-fluid bg-light p-1" src="img/course-1.jpg" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid bg-light p-1" src="img/course-2.jpg" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid bg-light p-1" src="img/course-3.jpg" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid bg-light p-1" src="img/course-2.jpg" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid bg-light p-1" src="img/course-3.jpg" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid bg-light p-1" src="img/course-1.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <h4 class="text-white mb-3">Newsletter</h4>
          <p>Get recent updates about our course offers by signing up to our newsletter.</p>
          <div class="position-relative mx-auto" style="max-width: 400px;">
            <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a class="border-bottom" href="https://soapinstitute.live">School Of Advanced Programming</a>, All Right Reserved.
            <span>Designed By <a class="border-bottom" href="https://soapinstitute.live">SOAP</a></span>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-menu">
              <a href="index.php">Home</a>
              <a href="cookie.php">Cookies</a>
              <a href="help.php">Help</a>
              <a href="faq.php">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->

  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"></a>

  <!-- JavaScript Libraries -->
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/waypoints/waypoints.min.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>

  <!-- Template Javascript -->
  <script src="js/main.js"></script>
</body>

</html>