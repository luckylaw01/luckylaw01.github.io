function displayInstructors() {
    let instructors = window.instructors.slice(0, 5);
    let instructorsDiv = document.getElementById('instructors');

    instructorsDiv.innerHTML = '';

    instructors.forEach(instructor => {
        let instructorCard = `
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${instructor.name}</h5>
                        <p class="card-text">${instructor.title}</p>
                        <div class="d-flex justify-content-between">
                            <a href="#" class="btn btn-primary">Edit</a>
                            <a href="#" class="btn btn-danger">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        instructorsDiv.innerHTML += instructorCard;
    });
}

displayInstructors();
