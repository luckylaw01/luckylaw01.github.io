/*
    Replace with instructors from the array:

                    <div class="mb-3">
                                <label for="course" class="form-label
                                ">Course</label>
                                <select class="form-select" id="course" name="course" required>
                                    <option value="">Select Course</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Software Engineering">Software Engineering</option>
                                    <option value="Software Applications">Software Applications</option>
                                    <option value="Graphics Design">Graphics Design</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="instructor" class="form-label
                                ">Instructor</label>
                                <select class="form-select" id="instructor" name="instructor" required>
                                    <option value="">Select Instructor</option>
                                    <option value="John Doe">John Doe</option>
                                    <option value="Jane Doe">Jane Doe</option>
                                    <option value="James Doe">James Doe</option>
                                    <option value="Jenny Doe">Jenny Doe</option>
                                </select>
                            </div>

                            // Array of instructors
window.instructors = [
    {
        id: 1,
        name: "L Munyaka",
        title: "Web Development",
        image: "img/instructor-l-munyaka.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        bio: "L Munyaka is a web developer with over 5 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others."
    },
    {
        id: 2,
        name: "Emmanuel Omondi",
        title: "Software Engineering",
        image: "img/instructor-emanuel-omondi.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
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
        bio: "James Kivuti is a software developer with over 6 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others.",
        courses: [3, 8]
    }
]

// Array of courses
// Array of courses
window.courses = [
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
    },

    {
        id: 2,
        title: "Data Science",
        description: "This course is designed to give students a foundational understanding of data science. Students will learn the basics of Python, R, and SQL.",
        instructorId: instructors[4].id,
        instructor: instructors[4].name,
        price: 15000,
        image: "img/course-data-science.jpg",
        duration: "4 months",
        level: "Intermediate",
        students: 65,
        rating: 5,
        category: "softwareEngineering",
        isForColleges: true,
        isOngoing: true,
        topics: [
            {
                title: "Python",
                subtopics: ["Variables", "Functions", "Loops"]
            },
            {
                title: "R",
                subtopics: ["Variables", "Functions", "Loops"]
            },
            {
                title: "SQL",
                subtopics: ["Variables", "Functions", "Loops"]
            }
            ]
    },

    {
        id: 3,
        title: "Mobile App Development",
        description: "This course is designed to give students a foundational understanding of mobile app development. Students will learn the basics of Android and iOS development.",
        instructorId: 3,
        instructor: instructors[2].name,
        price: 20000,
        image: "img/course-mobile-development.jpg",
        duration: "6 months",
        level: "Advanced",
        students: 10,
        rating: 4,
        category: "softwareEngineering",
        isForColleges: true,
        isOngoing: true,
        topics: [
            {
                title: "Android Development",
                subtopics: ["Activities", "Fragments", "Intents"]
            },
            {
                title: "iOS Development",
                subtopics: ["View Controllers", "Storyboards", "Auto Layout"]
            }
        ]
    },

    {
        id: 4,
        title: "Structured Programming",
        description: "This course is designed to give students a foundational understanding of structured programming. Students will learn the basics of supervised and unsupervised learning.",
        instructorId: instructors[3].id,
        instructor: instructors[3].name,
        price: 25000,
        image: "img/course-structured-programming-c.jpg",
        duration: "1 month",
        level: "Expert",
        students: 5,
        rating: 30,
        category: "knecMasterclasses",
        isForColleges: true,
        isOngoing: true,
        topics: [
            {
                title: "Supervised Learning",
                subtopics: ["Classification", "Regression"]
            },
            {
                title: "Unsupervised Learning",
                subtopics: ["Clustering", "Association"]
            }
        ]
    }
]

                            */

const courseSelect = document.getElementById('course');
const instructorSelect = document.getElementById('instructor');

// Populate the options with courses names from data.js
courses.forEach(course => {
    const option = document.createElement('option');
    option.value = course.id;
    option.textContent = course.title;
    courseSelect.appendChild(option);
});

// Populate the options with instructors names from data.js
instructors.forEach(instructor => {
    const option = document.createElement('option');
    option.value = instructor.id;
    option.textContent = instructor.name;
    instructorSelect.appendChild(option);
});

