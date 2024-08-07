<?php require 'Header.php'; ?>
<!-- Navbar End -->

<!-- This page should allow the admin to create courses, masterclasses, Instructors. -->

<!-- Admin Panel Start -->
<div class="container-fluid bg-light py-5">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-3">
                <div class="list-group shadow">
                    <a href="admin.html" class="list-group-item list-group-item-action">Dashboard</a>
                    <a href="admin-courses.html" class="list-group-item list-group-item-action">Courses</a>
                    <a href="admin-masterclass.html" class="list-group-item list-group-item-action active">Masterclasses</a>
                    <a href="admin-instructors.html" class="list-group-item list-group-item-action">Instructors</a>
                    <a href="admin-students.html" class="list-group-item list-group-item-action">Students</a>
                    <a href="admin-assignments.html" class="list-group-item list-group-item-action">Assignments</a>
                    <a href="admin-feedback.html" class="list-group-item list-group-item-action">Feedback</a>
                    <a href="admin-settings.html" class="list-group-item list-group-item-action">Settings</a>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="card shadow">
                    <div class="card-header bg-primary text-light">
                        <h4 class="m-0">Masterclasses</h4>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="m-0">Masterclasses</h5>
                            <div data-fillout-id="4JMMisrp9Xus" data-fillout-embed-type="popup" data-fillout-button-text="Add Masterclass" data-fillout-dynamic-resize data-fillout-button-color="#ABB8C3" data-fillout-inherit-parameters data-fillout-popup-size="medium"></div>
                            <script src="https://server.fillout.com/embed/v1/"></script>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Masterclass</th>
                                        <th>Instructor</th>
                                        <th>Duration</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="masterclasses-list">
                                    <tr>
                                        <td>Masterclass 1</td>
                                        <td>Instructor 1</td>
                                        <td>2 Weeks</td>
                                        <td>01/01/2022</td>
                                        <td>14/01/2022</td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-primary">Edit</button>
                                            <button type="button" class="btn btn-sm btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <!-- Pagination Start -->
                            <nav>
                                <ul class="pagination
                                    justify-content-center">
                                    <li class="page-item disabled">
                                        <a href="#" class="page-link">Previous</a>
                                    </li>
                                    <li class="page-item active">
                                        <a href="#" class="page-link">1</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">Next</a>
                                    </li>
                                </ul>
                            </nav>
                            <!-- Pagination End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script>
            // Spinner
            window.addEventListener('load', function() {
                const spinner = document.getElementById('spinner');
                setTimeout(() => {
                    spinner.className += ' hidden';
                }, 1000);
            });

            // Tooltip
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });

            //add masterclass
        </script>

    </div>

</div>
<!-- Admin Panel End -->

<!-- Footer-->
<?php require 'Footer.php'; ?>