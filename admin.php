<?php require 'Header.php'; ?>
<!-- Navbar End -->

<!-- This page should allow the admin to create courses, masterclasses, Instructors. -->

<!-- Admin Panel Start -->
<div class="container-fluid bg-light py-5">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-3">
                <div class="list-group shadow">
                    <a href="admin.html" class="list-group-item list-group-item-action active">Dashboard</a>
                    <a href="admin-courses.html" class="list-group-item list-group-item-action">Courses</a>
                    <a href="admin-masterclass.html" class="list-group-item list-group-item-action">Masterclasses</a>
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
                        <h4 class="m-0">Dashboard</h4>
                    </div>
                    <div class="card-body">
                        <div class="row g-5">
                            <div class="col-lg-4">
                                <div class="card bg-light shadow">
                                    <div class="card-body">
                                        <h5 class="card-title">Courses</h5>
                                        <p class="card-text">Create, Edit and Delete Courses</p>
                                        <a href="admin-courses.html" class="btn btn-primary">Manage</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card bg-light shadow">
                                    <div class="card-body">
                                        <h5 class="card-title
                                            ">Masterclasses</h5>
                                        <p class="card-text">Create, Edit and Delete Masterclasses</p>
                                        <a href="admin-masterclass.html" class="btn btn-primary">Manage</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card bg-light shadow">
                                    <div class="card-body">
                                        <h5 class="card-title
                                            ">Instructors</h5>
                                        <p class="card-text">Create, Edit and Delete Instructors</p>
                                        <a href="admin-instructors.html" class="btn btn-primary">Manage</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card bg-light shadow">
                                    <div class="card-body">
                                        <h5 class="card-title
                                            ">Students</h5>
                                        <p class="card-text">Create, Edit and Delete Students</p>
                                        <a href="#" class="btn btn-primary">Manage</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card bg-light shadow">
                                    <div class="card-body">
                                        <h5 class="card-title
                                            ">Assignments</h5>
                                        <p class="card-text">Create, Edit and Delete Assignments</p>
                                        <a href="#" class="btn btn-primary">Manage</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card bg-light shadow">
                                    <div class="card-body">
                                        <h5 class="card-title
                                            ">Feedback</h5>
                                        <p class="card-text">View and Respond to Feedback</p>
                                        <a href="#" class="btn btn-primary">Manage</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card bg-light shadow">
                                    <div class="card-body">
                                        <h5 class="card-title
                                            ">Settings</h5>
                                        <p class="card-text">Change Admin Settings</p>
                                        <a href="#" class="btn btn-primary">Manage</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card shadow mt-5">
                    <div class="card-header bg-primary text-light">
                        <h4 class="m-0">Courses</h4>
                    </div>
                    <div class="card-body">
                        <div class="row g-5">
                            <div class="col-lg-4">
                                <div class="card bg-light shadow">
                                    <div class="card-body">
                                        <h5 class="card-title
                                            ">Create Course</h5>
                                        <p class="card-text">Create a new course</p>
                                        <a href="#" class="btn btn-primary">Create</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card bg-light shadow">
                                    <div class="card-body">
                                        <h5 class="card-title
                                            ">Edit Course</h5>

                                        <p class="card-text">Edit an existing course</p>
                                        <a href="#" class="btn btn-primary">Edit</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card bg-light shadow">
                                    <div class="card-body">
                                        <h5 class="card-title


                                            ">Delete Course</h5>
                                        <p class="card-text">Delete a course</p>
                                        <a href="#" class="btn btn-primary">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Admin Panel End -->






<!-- Footer-->
<?php require 'Footer.php'; ?>