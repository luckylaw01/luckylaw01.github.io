<?php require 'Header.php'; ?>
<!-- Navbar End -->

<!-- This page should allow the admin to create courses, masterclasses, Instructors. -->

<!-- Add Instructor form 
        Picks fields exactly like this example:
        {
        id: 1,
        name: "L Munyaka",
        title: "Web Development",
        image: "img/instructor-l-munyaka.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "lmunyaka@example.com",
        phone: "1234567890",
        bio: "L Munyaka is a web developer with over 5 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others.",
        courses: [1, 6]
    }

    Then it models the responses exactly into that format. The id should be default 0. It then shows the Js object as code, and has a button to copy the code to the clipboard. -->


<!-- Add Instructor Start -->
<div class="container-fluid bg-light py-5">
    <div class="container py-5">
        <div class="row">

            <div class="col-lg-3">
                <div class="list-group shadow">
                    <a href="admin.html" class="list-group-item list-group-item-action">Dashboard</a>
                    <a href="admin-courses.html" class="list-group-item list-group-item-action">Courses</a>
                    <a href="admin-masterclass.html" class="list-group-item list-group-item-action">Masterclasses</a>
                    <a href="admin-instructors.html" class="list-group-item list-group-item-action active">Instructors</a>
                    <a href="admin-students.html" class="list-group-item list-group-item-action">Students</a>
                    <a href="admin-assignments.html" class="list-group-item list-group-item-action">Assignments</a>
                    <a href="admin-feedback.html" class="list-group-item list-group-item-action">Feedback</a>
                    <a href="admin-settings.html" class="list-group-item list-group-item-action">Settings</a>
                </div>
            </div>

            <div class="col-lg-9">
                <h2 class="fw-bold mb-4">Add Instructor</h2>
                <form id="add-instructor-form" class="row g-3">
                    <div class="col-12">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>
                    <div class="col-12">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" name="title" required>
                    </div>
                    <div class="col-12">
                        <label for="image" class="form-label">Image</label>
                        <input type="text" class="form-control" id="image" name="image" required>
                    </div>
                    <div class="col-12">
                        <label for="facebook" class="form-label">Facebook</label>
                        <input type="text" class="form-control" id="facebook" name="facebook" required>
                    </div>
                    <div class="col-12">
                        <label for="twitter" class="form-label">Twitter</label>
                        <input type="text" class="form-control" id="twitter" name="twitter" required>
                    </div>
                    <div class="col-12">
                        <label for="instagram" class="form-label">Instagram</label>
                        <input type="text" class="form-control" id="instagram" name="instagram" required>
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                    <div class="col-12">
                        <label for="phone" class="form-label">Phone</label>
                        <input type="tel" class="form-control" id="phone" name="phone" required>
                    </div>
                    <div class="col-12">
                        <label for="bio" class="form-label">Bio</label>
                        <textarea class="form-control" id="bio" name="bio" required></textarea>
                    </div>
                    <div class="col-12">
                        <label for="courses" class="form-label">Courses</label>
                        <select class="form-select" id="courses" name="courses" required>
                            <option value="1">Web Development</option>
                            <option value="2">Software Engineering</option>
                            <option value="3">Software Applications</option>
                            <option value="4">Graphics Design</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Add Instructor</button>
                    </div>
                </form>
            </div>
        </div>
        <div id="instructor-code" class="mt-5">
            <h2 class="fw-bold mb-4">Instructor Code</h2>
            <pre class="bg-dark text-light p-3 rounded">
                    {
                        id: 0,
                        name: "L Munyaka",
                        title: "Web Development",
                        image: "img/instructor-l-munyaka.jpg",
                        facebook: "#",
                        twitter: "#",
                        instagram: "#",
                        email: "munyakalawrence01@gmail.com",
                        phone: "1234567890",
                        bio: "L Munyaka is a web developer with over 5 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others.",
                        courses: [1, 6],
                    }
                </pre>
            <button id="copy-instructor-code" class="btn btn-primary">Copy Code</button>
        </div>
    </div>
</div>

<!-- Add Instructor End -->

<!-- script for Add instrutor -->
<script>
    // select the courses dropdown should get the courses from the data.js file array of courses
    const coursesDropdown = document.getElementById('courses');
    courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.id;
        option.innerText = course.title;
        coursesDropdown.appendChild(option);
    });

    const addInstructorForm = document.getElementById('add-instructor-form');
    const instructorCode = document.getElementById('instructor-code');
    const copyInstructorCode = document.getElementById('copy-instructor-code');

    addInstructorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = addInstructorForm.name.value;
        const title = addInstructorForm.title.value;
        const image = addInstructorForm.image.value;
        const facebook = addInstructorForm.facebook.value;
        const twitter = addInstructorForm.twitter.value;
        const instagram = addInstructorForm.instagram.value;
        const email = addInstructorForm.email.value;
        const phone = addInstructorForm.phone.value;
        const bio = addInstructorForm.bio.value;
        const courses = addInstructorForm.courses.value;

        const instructor = {
            id: 0,
            name,
            title,
            image,
            facebook,
            twitter,
            instagram,
            email,
            phone,
            bio,
            courses
        };

        // Change the code to the new instructor as a javascript object

        const code = instructorCode.querySelector('pre');
        code.innerText = JSON.stringify(instructor, null, 4);
        const formattedInstructor = JSON.stringify(instructor, null, 4);
        code.innerText = formattedInstructor;


    });

    copyInstructorCode.addEventListener('click', () => {
        const code = instructorCode.querySelector('pre').innerText;
        navigator.clipboard.writeText(code);
    });

    // Feedback when the code is copied
    copyInstructorCode.addEventListener('click', () => {
        copyInstructorCode.innerText = 'Copied!';
        setTimeout(() => {
            copyInstructorCode.innerText = 'Copy Code';
        }, 2000);
    });
</script>

<div class="container-fluid bg-light py-5">
    <div class="container py-5">
        <div data-fillout-id="97hww39BmGus" data-fillout-embed-type="popup" data-fillout-button-text="Save Instructor" data-fillout-dynamic-resize data-fillout-inherit-parameters data-fillout-popup-size="medium"></div>
        <script src="https://server.fillout.com/embed/v1/"></script>
    </div>
</div>



<!-- Footer-->
<?php require 'Footer.php'; ?>