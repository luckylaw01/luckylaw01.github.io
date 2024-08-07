<?php require 'Header.php'; ?>
<!-- Navbar End -->

<!-- Page Header Start -->
<div class="page-header bg-light py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-6" style="display: flex; flex-direction: column; justify-content: center;">
                <h1 class="text-light">Request Training services</h1>
                <p class="text-light
                        ">From the School of Advanced Programming</p>
            </div>
            <div class="col-lg-6">
                <img src="img/course-1.jpg" alt="" class="img-fluid">
            </div>
        </div>
    </div>
</div>
<!-- Page Header End -->

<!-- Request Form Start -->
<div class="container py-5">
    <div class="row">
        <div class="col-lg-8">
            <div class="card shadow">
                <div class="card-body">
                    <h3 class="card-title">Request Form</h3>
                    <form id="requestForm">
                        <div class="mb-3">
                            <label for="collegeName" class="form-label">College Name</label>
                            <input type="text" class="form-control" id="collegeName" name="collegeName" required>
                        </div>
                        <div class="mb-3">
                            <label for="course" class="form-label">Course</label>
                            <select class="form-select" id="course" name="course" required>
                                <option value="">Select Course</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Software Engineering">Software Engineering</option>
                                <option value="Software Applications">Software Applications</option>
                                <option value="Graphics Design">Graphics Design</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="instructor" class="form-label">Instructor (Optional)</label>
                            <select class="form-select" id="instructor" name="instructor">
                                <option value="">Select Instructor if you want a specific instructor</option>
                                <option value="John Doe">John Doe</option>
                                <option value="Jane Doe">Jane Doe</option>
                                <option value="James Doe">James Doe</option>
                                <option value="Jenny Doe">Jenny Doe</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="startDate" class="form-label">Start Date</label>
                            <input type="date" class="form-control" id="startDate" name="startDate" required>
                        </div>
                        <div class="mb-3">
                            <label for="endDate" class="form-label">End Date</label>
                            <input type="date" class="form-control" id="endDate" name="endDate" required>
                        </div>
                        <div class="mb-3">
                            <label for="time" class="form-label">Time</label>
                            <input type="time" class="form-control" id="time" name="time" required>
                        </div>
                        <div class="mb-3">
                            <label for="venue" class="form-label">Venue</label>
                            <input type="text" class="form-control" id="venue" name="venue" required>
                        </div>
                        <div class="mb-3">
                            <label for="contact" class="form-label">Contact</label>
                            <input type="text" class="form-control" id="contact" name="contact" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <div id="feedback" class="alert" role="alert" style="display: none;"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card shadow">
                <div class="card-body">
                    <h3 class="card-title">Contact Information</h3>
                    <p class="card-text">For more information, contact us at:</p>
                    <p class="card-text">Tumaini, Ongata Rongai, Kenya</p>
                    <p class="card-text">+254762303141</p>
                    <p class="card-text">
                        <a href="mailto: soapinstitute@onmail.com">soapinstitute@onmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Request Form End -->

<script>
    $(document).ready(function() {
        $('#requestForm').on('submit', function(e) {
            e.preventDefault();

            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbwrPz6pil5--0ZM7qbpRE2h520bOoE6xiG4HeOrAOogwRgO30aEbafZZ8pqoP742xZ_Sw/exec',
                method: 'POST',
                data: $(this).serialize(),
                success: function(response) {
                    $('#feedback').removeClass('alert-danger').addClass('alert-success').text('Request submitted successfully! We will get back to you, soon!').show();
                    $('#requestForm')[0].reset();
                },
                error: function() {
                    $('#feedback').removeClass('alert-success').addClass('alert-danger').text('An error occurred. Please try again.').show();
                }
            });
        });
    });
</script>



<!-- Footer-->
<?php require 'Footer.php'; ?>