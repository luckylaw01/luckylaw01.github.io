/*
    populate the options with courses names from data.js

    <label for="course" class="form-label">Preffered course</label>
                        <select class="form-control" id="course" name="course" required>
                            <option value="" disabled selected>Select a course</option>
                            <option value="web-development">Web Development</option>
                            <option value="software-engineering">Software Engineering</option>
                            <option value="graphics-design">Graphics Design</option>
                            <option value="knec-Masterclasses">KNEC Matserclasses</option>
                        </select>

    course structre:

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
    },
    {
        id: 5,
        title: "Object Oriented Programming",
        description: "This course is designed to give students a foundational understanding of object oriented programming. Students will learn the basics of inheritance and polymorphism.",
        instructorId: instructors[0].id,
        instructor: instructors[0].name,
        price: 5000,
        image: "img/course-oop-c++.jpg",
        duration: "1 month",
        level: "beginner",
        students: 5,
        rating: 30,
        category: "knecMasterclasses",
        isForColleges: true,
        isOngoing: true,
        topics: [
            {
                title: "Ethical Hacking",
                subtopics: ["Footprinting", "Scanning"]
            },
            {
                title: "Network Security",
                subtopics: ["Firewalls", "Intrusion Detection Systems"]
            }
        ]
    },
    
        {
            id: 6,
            title: "Object Oriented Programming II",
            description: "Java. This course is designed to give students a foundational understanding of object oriented programming. Students will learn the basics of inheritance and polymorphism.",
            instructorId: instructors[1].id,
            instructor: instructors[1].name,
            price: 7000,
            image: "img/course-oop-java.jpg",
            duration: "1.5 months",
            level: "student",
            students: 8,
            rating: 29,
            category: "softwareEngineering",
            isForColleges: true,
            isOngoing: true,
            topics: [
                {
                    title: "Ethical Hacking",
                    subtopics: ["Footprinting", "Scanning"]
                },
                {
                    title: "Network Security",
                    subtopics: ["Firewalls", "Intrusion Detection Systems"]
                }
            ]
        }
];
*/

const courseSelect = document.getElementById('course');

// Populate the options with courses names from data.js
courses.forEach(course => {
    const option = document.createElement('option');
    option.value = course.id;
    option.textContent = course.title;
    courseSelect.appendChild(option);
});

