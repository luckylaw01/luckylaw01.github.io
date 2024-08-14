
const courseSelect = document.getElementById('course');


/*

        <!-- Enroll Start -->
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-8">
                <h4 class="mb-4">Enroll in a Course</h4>
                <form id="enroll-form" class="row g-3">
                    <div class="col-md-6">
                        <label for="first-name" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="first-name" name="first-name" placeholder="Enter your first name" required>
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="last-name" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="last-name" name="last-name" placeholder="Enter your last name" required>
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" required>
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="phone" class="form-label">Phone Number</label>
                        <input type="tel" class="form-control" id="phone" name="phone" placeholder="Enter your phone number" required>
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="gender" class="form-label">Gender</label>
                        <select class="form-control" id="gender" name="gender" required>
                            <option value="" disabled selected>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" name="address" placeholder="Enter your address (County, Hometown)" required>
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="course" class="form-label">Preferred course</label>
                        <select class="form-control" id="course" name="course" required>
                            <option value="" disabled selected>Select a course</option>
                            
                        </select>
                        <div class="invalid-feedback"></div>
                    </div>
                    <div class="col-md-6"></div>

                    
                    <div class="col-md-6 d-none" id="registration-number-div">
                        <label for="registration-number" class="form-label">Registration Number</label>
                        <input type="text" class="form-control" id="registration-number" name="registration-number" placeholder="Enter your registration number">
                        <div class="invalid-feedback"></div>
                    </div>

                    <div class="col-12">
                        <div class="alert alert-success d-none" role="alert"></div>
                        <div class="alert alert-danger d-none" role="alert"></div>
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Enroll</button>
                    </div>
                </form>
            </div>
            <div class="col-lg-4">
                <div class="p-5 bg-light rounded">
                    <h4 class="mb-4">When Enrolling, please note:</h4>
                    <ul class="list-unstyled mb-0">
                        <li class="mb-2"><i class="fa fa-check text-primary me-2"></i>You will fill the form, and get contacted later with your details</li>
                        <li class="mb-2"><i class="fa fa-check text-primary me-2"></i>SOAP will contact you from <b>soapinstitute@onmail.com</b> only</li>
                        <li class="mb-2"><i class="fa fa-check text-primary me-2"></i>Select the course category, it's optional</li>
                        <li class="mb-2"><i class="fa fa-check text-primary me-2"></i>As of today, all courses are online</li>
                        <li class="mb-2"><i class="fa fa-check text-primary me-2"></i>For colleges visit <a href="college-request.html">Colleges portal</a> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Enroll End -->

        <script>

        document.getElementById('has-registration-number').onchange = function() {
            const registrationNumberDiv = document.getElementById('registration-number-div');
            if (this.value === 'yes') {
                registrationNumberDiv.classList.remove('d-none');
            } else {
                registrationNumberDiv.classList.add('d-none');
            }
        };

        document.getElementById('enroll-form').onsubmit = function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => (data[key] = value));

            // Check whether the registration number is provided. If not, generate one
            if (!data['registration-number']){
                data['registration-number'] = 'SOAP-ST' + Math.floor(Math.random() * 10000);
            }

            const regNumber = data['registration-number'];

            fetch('https://script.google.com/macros/s/AKfycbzCzu0zod2zO8hCtqA4dtLBCKPLQgObBYT6gAy6VgaZmUdVunMH0fcwO5Fu6IYuvxL3tg/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(data)
            }).then(response => {
                document.querySelector('.alert-success').classList.remove('d-none');
                document.querySelector('.alert-success').textContent = 'You have enrolled successfully! You will be contacted with details soon. Your registration number is ' + regNumber;
            }).catch(error => {
                document.querySelector('.alert-danger').classList.remove('d-none');
                document.querySelector('.alert-danger').textContent = 'There was an error submitting the form.';
            });
        };
    </script>

*/

// Populate the options with courses names from data.js
courses.forEach(course => {
    const option = document.createElement('option');
    option.value = course.id + '-' + course.title;
    option.textContent = course.title;
    courseSelect.appendChild(option);
});





