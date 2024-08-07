<?php require 'Header.php'; ?>
<!-- Navbar End -->

<!-- Add course start -->
<div class="container-fluid bg-light py-5">
    <div class="container py-5">
        <div class="row">

            <div class="col-lg-3">
                <div class="list-group shadow">
                    <a href="admin.html" class="list-group-item list-group-item-action">Dashboard</a>
                    <a href="admin-courses.html" class="list-group-item list-group-item-action active">Courses</a>
                    <a href="admin-masterclass.html" class="list-group-item list-group-item-action">Masterclasses</a>
                    <a href="admin-instructors.html" class="list-group-item list-group-item-action">Instructors</a>
                    <a href="admin-students.html" class="list-group-item list-group-item-action">Students</a>
                    <a href="admin-assignments.html" class="list-group-item list-group-item-action">Assignments</a>
                    <a href="admin-feedback.html" class="list-group-item list-group-item-action">Feedback</a>
                    <a href="admin-settings.html" class="list-group-item list-group-item-action">Settings</a>
                </div>
            </div>

            <div class="col-lg-9">
                <h2 class="fw-bold mb-4">Add Course</h2>
                <form id="add-course-form" class="row g-3">
                    <div class="col-12">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" name="title" required>
                    </div>
                    <div class="col-12">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" id="description" name="description" required></textarea>
                    </div>
                    <div class="col-12">
                        <label for="instructor" class="form-label">Instructor</label>
                        <select class="form-select" id="instructor" name="instructor" required>
                            <!-- Dynamically populated -->
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="price" class="form-label">Price</label>
                        <input type="number" class="form-control" id="price" name="price" required>
                    </div>
                    <div class="col-12">
                        <label for="image" class="form-label">Image</label>
                        <input type="text" class="form-control" id="image" name="image" required>
                    </div>
                    <div class="col-12">
                        <label for="duration" class="form-label">Duration</label>
                        <input type="text" class="form-control" id="duration" name="duration" required>
                    </div>
                    <div class="col-12">
                        <label for="level" class="form-label">Level</label>
                        <input type="text" class="form-control" id="level" name="level" required>
                    </div>
                    <div class="col-12">
                        <label for="category" class="form-label">Category</label>
                        <input type="text" class="form-control" id="category" name="category" required>
                    </div>
                    <div class="col-12">
                        <label for="topics" class="form-label">Topics</label>
                        <textarea class="form-control" id="topics" name="topics" required></textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Add Course</button>
                    </div>
                </form>
            </div>

        </div>
        <div id="course-code" class="mt-5">
            <h2 class="fw-bold mb-4">Course Code</h2>
            <pre class="bg-dark text-light p-3 rounded">
                {
                    id: 0,
                    title: "Sample Course",
                    description: "Sample Description",
                    instructorId: 0,
                    instructor: "Sample Instructor",
                    price: 0,
                    image: "img/sample.jpg",
                    duration: "0 months",
                    level: "Beginner",
                    category: "Sample Category",
                    topics: [
                        {
                            title: "Sample Topic",
                            subtopics: ["Sample Subtopic 1", "Sample Subtopic 2"]
                        }
                    ]
                }
            </pre>
            <button id="copy-course-code" class="btn btn-primary">Copy Code</button>
        </div>
    </div>

    <div class="container-fluid row">
        <div class="container py-5">
            <div data-fillout-id="iyjAFxoSSAus" data-fillout-embed-type="popup" data-fillout-button-text="Add Course" data-fillout-dynamic-resize data-fillout-button-color="#729BDD" data-fillout-inherit-parameters data-fillout-popup-size="medium"></div>
            <script src="https://server.fillout.com/embed/v1/"></script>
        </div>
    </div>

</div>
<!-- Add course end -->


<!-- view all courses in a table 
        {
        id: 1,
        title: "Web Development",
        description: "This course is designed to give students a foundational understanding of web development. Students will learn the basics of HTML, CSS, and JavaScript.",
        instructorId: instructors[5].id,
        instructor: instructors[5].name,
        price: 10000,
        image: "img/course-web-design.jpg",
        duration: "3 months",
        level: "Beginner",
        students: 27,
        rating: 5,
        category: "webDevelopment",
        isForColleges: true,
        isOngoing: true,
        topics: [
            {
                title: "HTML",
                subtopics: ["Elements", "Attributes", "Tags"]
            }, 
            {
                title: "CSS",
                subtopics: ["Selectors", "Properties", "Values"]
            },
            {
                title: "JavaScript",
                subtopics: ["Variables", "Functions", "Loops"]
            }
        ]
    }

    All columns except the topics should be displayed in the table. The topics should be displayed in a modal when the course is clicked. -->



<!-- View Courses Start -->
<div class="container-fluid bg-light py-5">
    <div class="container py-5">
        <h2 class="fw-bold mb-4">View Courses</h2>
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Duration</th>
                        <th>Level</th>
                        <th>Students</th>
                        <th>Rating</th>
                        <th>Category</th>
                        <th>For Colleges</th>
                        <th>Ongoing</th>
                    </tr>
                </thead>
                <tbody id="viewAllCourses">
                    <tr>
                        <td>1</td>
                        <td>Web Development</td>
                        <td>L Munyaka</td>
                        <td>10000</td>
                        <td>3 months</td>
                        <td>Beginner</td>
                        <td>27</td>
                        <td>5</td>
                        <td>Web Development</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Software Engineering</td>
                        <td>J Doe</td>
                        <td>15000</td>
                        <td>6 months</td>
                        <td>Intermediate</td>
                        <td>15</td>
                        <td>4</td>
                        <td>Software Engineering</td>
                        <td>No</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Software Applications</td>
                        <td>K Smith</td>
                        <td>12000</td>
                        <td>4 months</td>
                        <td>Advanced</td>
                        <td>20</td>
                        <td>4.5</td>
                        <td>Software Applications</td>
                        <td>Yes</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<!-- View Courses End -->

<!-- Footer-->
<?php require 'Footer.php'; ?>