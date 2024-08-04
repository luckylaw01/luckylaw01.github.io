/*

    <div id="instructors" class="row g-3">
                        <!-- Instructor Card -->
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">L Munyaka</h5>
                                    <p class="card-text">Web Development</p>
                                    <div class="d-flex justify-content-between">
                                        <a href="#" class="btn btn-primary">Edit</a>
                                        <a href="#" class="btn btn-danger">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Instructor Card -->
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">J Doe</h5>
                                    <p class="card-text">Software Engineering</p>
                                    <div class="d-flex justify-content-between">
                                        <a href="#" class="btn btn-primary">Edit</a>
                                        <a href="#" class="btn btn-danger">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Instructor Card -->
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">K Smith</h5>
                                    <p class="card-text">Software Applications</p>
                                    <div class="d-flex justify-content-between">
                                        <a href="#" class="btn btn-primary">Edit</a>
                                        <a href="#" class="btn btn-danger">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Instructor Card -->
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">P Johnson</h5>
                                    <p class="card-text">Graphics Design</p>
                                    <div class="d-flex justify-content-between">
                                        <a href="#" class="btn btn-primary">Edit</a>
                                        <a href="#" class="btn btn-danger">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    window.instructors = [
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
    },
    {
        id: 2,
        name: "Emmanuel Omondi",
        title: "Software Engineering",
        image: "img/instructor-emanuel-omondi.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "eomondi@example.com",
        phone: "9876543210",
        bio: "Emmanuel Omondi is a software engineer with over 3 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others.",
        courses: [2, 12]
    },
    {
        id: 3,
        name: "James Kivuti",
        title: "Software Development",
        image: "img/instructor-james-kivuti.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "jkivuti@example.com",
        phone: "4567890123",
        bio: "James Kivuti is a software developer with over 6 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others.",
        courses: [3, 8]
    },
    {
        id: 4,
        name: "Wilfred Mukiri",
        title: "Graphics Design",
        image: "img/instructor-wilfred-mukiri.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "wmukiri@example.com",
        phone: "0123456789",
        bio: "Wilfred Mukiri is a graphics designer with over 8 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others.",
        courses: [9, 10]

    },
    {
        id: 5,
        name: "Samuel Mwangi",
        title: "Python Developer",
        image: "img/instructor-samuel-mwangi.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "smwangi@example.com",
        phone: "9870123456",
        bio: "Samuel is a software developer with over 10 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others.",
        courses: [11]
    },
    {
        id: 6,
        name: "Ian Pius",
        title: "Senior Web Developer",
        image: "img/instructor-ian-pius.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "ipius@example.com",
        phone: "5678901234",
        bio: "Ian is a software developer with over 10 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others.",
        courses: [1]
    }
];

*/

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