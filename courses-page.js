const coursesInCourses = document.getElementById('coursesInCourses');
const courseLink = 'course.html?course=';

/*
    <!-- Categories select Start -->
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="d-flex justify-content-center" id="">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group" id="select-buttons">

                    <input type="radio" class="btn-check" name="btnradio" value="all" id="btnradio0" autocomplete="off" checked>
                    <label class="btn btn-outline-primary" for="btnradio1" value="Web Design" >All Courses</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="webDevelopment" autocomplete="off">
                    <label class="btn btn-outline-primary" for="btnradio1">Web Development</label>

                    <input type="radio" class="btn-check" name="btnradio" value="graphicsDesign" id="btnradio2" autocomplete="off">
                    <label class="btn btn-outline-primary" for="btnradio2">Graphic Design</label>

                    <input type="radio" class="btn-check" name="btnradio" value="knecMasterclasses" id="btnradio3" autocomplete="off">
                    <label class="btn btn-outline-primary" for="btnradio3">KNEC Masterclasses</label>

                    <input type="radio" class="btn-check" name="btnradio" value="softwareEngineering" id="btnradio4" autocomplete="off">
                    <label class="btn btn-outline-primary" for="btnradio4">Software Engineering</label>
                </div>
            </div>
        </div>
    </div>
    <!-- Categories select End -->
*/

function displayAllCourses(courses, container) {
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'col-lg-4';
        
        courseElement.innerHTML = `
            <div class="card border-0 shadow">
                <img class="card-img-top" src="${course.image}" alt="">
                <div class="card-body">
                    <h5 class="card-title mb-3">${course.title}</h5>
                    <p class="card-text">${course.description}</p>
                    <a href="${courseLink + course.id }" class="btn btn-link text-primary">Learn More</a>
                </div>
            </div>
        `;

        container.appendChild(courseElement);
    });
}

// Function to filter courses based on category
function filterCourses(category) {
    // Clear the container
    coursesInCourses.innerHTML = '';

    // Filter courses based on category
    const filteredCourses = courses.filter(course => course.category === category);

    // Display filtered courses
    displayAllCourses(filteredCourses, coursesInCourses);
}

// Event listener for radio buttons
const radioButtons = document.querySelectorAll('input[name="btnradio"]');
radioButtons.forEach(button => {
    button.addEventListener('change', () => {
        const selectedCategory = button.value;
        filterCourses(selectedCategory);
    });
});

// Call the function to display courses
displayAllCourses(courses, coursesInCourses);








