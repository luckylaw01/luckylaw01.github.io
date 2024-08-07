<?php require 'Header.php'; ?>
<!-- Navbar End -->

<!-- Page Header Start -->
<div class="page-header bg-light py-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-6" style="display: flex; flex-direction: column; justify-content: center;">
                <h1 class="text-light">Join the Masterclass</h1>
                <p class="text-light
                    ">Enroll and start learning today.</p>
            </div>
            <div class="col-lg-6">
                <img src="img/masterclass-default.jpg" alt="" class="img-fluid">
            </div>
        </div>
    </div>
</div>
<!-- Page Header End -->

<div class="container mt-5">
    <div id="masterclassEnroll" class="card">
        <div class="card-header">
            <h3>Enroll in Masterclass</h3>
        </div>
        <div class="card-body">
            <!-- Masterclass details will be populated here -->
        </div>
    </div>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const masterclassEnrollContainer = document.getElementById('masterclassEnroll').querySelector('.card-body');

        function getMasterclassDetails(masterclassId) {

            return masterclasses.find(mc => mc.id === masterclassId);
        }

        function displayMasterclassDetails(masterclass) {
            masterclassEnrollContainer.innerHTML = `
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${masterclass.courseId? courses[masterclass.courseId].image: 'img/masterclass-default.jpg'}" alt="${masterclass.name}" class="img-fluid" alt="${masterclass.name}">
                        </div>
                        <div class="col-md-4">
                            <h5>${masterclass.name}</h5>
                            <p>${masterclass.description}</p>
                            <div><strong>Instructor:</strong> ${instructors[courses[masterclass.courseId].instructorId-1].name}</div>
                            <div><strong>Fee:</strong> $${masterclass.fee}</div>
                            <div><strong>Date:</strong> ${masterclass.date}</div>
                            <div><strong>Time:</strong> ${masterclass.time}</div>
                            <div><strong>Duration:</strong> ${masterclass.duration}</div>
                            <div><strong>Venue:</strong> ${masterclass.venue}</div>
                            <div><strong>Target Audience:</strong> ${masterclass.targetAudience}</div>
                            <div><strong>Requirements:</strong> ${masterclass.requirements}</div>
                            <div><strong>Benefits:</strong> ${masterclass.benefits}</div>
                        </div>

                        <div class="col-md-4">
                            <h5>About the Instructor</h5>
                            <div class="d-flex align-items-center">
                                <img src="${instructors[courses[masterclass.courseId].instructorId-1].image}" class="img-fluid rounded" alt="${instructors[courses[masterclass.courseId].instructorId-1].name}" style="height:100px">
                                <div class="col-md-8 m-2">
                                    <h5 class="mt-2">${instructors[courses[masterclass.courseId].instructorId-1].name}</h5>
                                    <p class="text-muted">Instructor</p>
                                </div>
                            </div>
                            <p>${instructors[courses[masterclass.courseId].instructorId-1].bio}</p>
                            <div class="d-flex justify-start">
                                <a href="instructor.html?id=${courses[masterclass.courseId].instructorId}" class="btn btn-primary m-1">View Profile</a>
                                <a href="instructor.html?id=${courses[masterclass.courseId].instructorId}" class="btn btn-primary m-1">Contact</a>
                            </div>
                        </div>
                    </div>
                    <form class="mt-4" id="enrollmentForm">
                        <input type="hidden" id="masterclassId" name="masterclassId" value="${masterclass.id}">
                        <input type="hidden" id="masterclassTitle" name="masterclassTitle" value="${masterclass.name}">
                        <div class="form-group mb-2">
                            <label for="regNumber">Registration Number</label>
                            <input type="text" class="form-control" id="regNumber" name="regNumber" placeholder="Leave blank if you're not a SOAP student">
                        </div>
                        <div class="form-group mb-2">
                            <label for="firstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" name="firstName" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="lastName">Last Name</label>
                            <input type="text" class="form-control" id="lastName" name="lastName" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="phoneNumber">Phone Number</label>
                            <input type="tel" class="form-control" id="phoneNumber" name="phoneNumber" required>
                        </div>
                        <button type="submit" class="btn btn-primary mt-2">Enroll</button>
                    </form>
                `;
        }

        function handleEnrollmentFormSubmission(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const enrollmentData = {
                masterclassId: formData.get('masterclassId'),
                masterclassTitle: formData.get('masterclassTitle'),
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phoneNumber: formData.get('phoneNumber'),
                regNumber: formData.get('regNumber') || ''
            };

            fetch('https://script.google.com/macros/s/AKfycbz6t0Vehr9_PzCV7IE9CKUvKdSFr5BDs-9Nkxyp3Qb0r5NdfD9wa14vFRY436bOzb63sg/exec', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors', // Ensure CORS is enabled
                    body: JSON.stringify(enrollmentData)
                })
                .then(response => {
                    if (response.status === 401) {
                        throw new Error('Unauthorized request. Check your Google Apps Script permissions.');
                    }
                    return response.text(); // Get the response text
                })
                .then(text => {
                    console.log('Response text:', text); // Log the raw response text for debugging
                    const data = JSON.parse(text); // Parse the response text as JSON
                    if (data.result === 'success') {
                        alert('Enrollment successful!');
                    } else {
                        alert('There was an error with your enrollment. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error with your enrollment. Please try again.');
                });
        }




        function handleEnrollmentFormSubmission(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const enrollmentData = {
                masterclassId: formData.get('masterclassId'),
                masterclassTitle: formData.get('masterclassTitle'),
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phoneNumber: formData.get('phoneNumber'),
                regNumber: formData.get('regNumber') || ''
            };

            fetch('https://script.google.com/macros/s/AKfycby5CnrmEOHGW2BBzedR8BLM7Yc--IcGPFqy4A4LNpEHW5ZR6szEofP_r7HrXcheoNs9/exec', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'no-cors', // Ensure CORS is enabled
                    body: JSON.stringify(enrollmentData)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.result === 'success') {
                        alert('Enrollment successful!');
                    } else {
                        //Bootstrap error alert
                        const alert = `
                <div class="alert alert-danger alert-dismissible fade show mt-2" role="alert">
                    There was an error with your enrollment. Please try again.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
                        masterclassEnrollContainer.insertAdjacentHTML('beforeend', alert);
                    }

                })
                .catch(error => {
                    console.error('Error:', error);
                    const alert = `
            <div class="alert alert-success alert-dismissible fade show mt-2" role="alert">
                Enrollment successful!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
                    masterclassEnrollContainer.insertAdjacentHTML('beforeend', alert);
                });
        }


        const urlParams = new URLSearchParams(window.location.search);
        const masterclassId = parseInt(urlParams.get('masterclass'), 10);
        const masterclass = getMasterclassDetails(masterclassId);

        if (masterclass) {
            displayMasterclassDetails(masterclass);
            document.getElementById('enrollmentForm').addEventListener('submit', handleEnrollmentFormSubmission);
        } else {
            masterclassEnrollContainer.innerHTML = '<p class="text-danger">Masterclass not found.</p>';
        }
    });
</script>

<script type="text/javascript">
    (function() {
        emailjs.init({
            publicKey: "YOUR_PUBLIC_KEY",
        });
    })();
</script>

<!-- Footer-->
<?php require 'Footer.php'; ?>