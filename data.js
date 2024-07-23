// These page holds an array of objects that represent the data that is used in the html FileSystem. There needs to be functions with parameters that can be called to add the data into the array. Other functions can be used to retrieve data from the array. These are courses, instructors, testimonials, and students.

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
        bio: "Emmanuel Omondi is a software engineer with over 3 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others."
    },
    {
        id: 3,
        name: "James Kivuti",
        title: "Software Development",
        image: "img/instructor-james-kivuti.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        bio: "James Kivuti is a software developer with over 6 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others."
    },
    {
        id: 4,
        name: "Wilfred Mukiri",
        title: "Graphics Design",
        image: "img/instructor-wilfred-mukiri.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        bio: "Wilfred Mukiri is a graphics designer with over 8 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others."

    },
    {
        id: 5,
        name: "Samuel Mwangi",
        title: "Software Development",
        image: "img/instructor-samuel-mwangi.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        bio: "Samuel is a software developer with over 10 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others."
    }
];

// Function to add instructors
function addInstructor(newId, newName, newTitle, newImage, newFacebook, newTwitter, newInstagram, newBio) {
    const newInstructor = {
        id: newId,
        name: newName,
        title: newTitle,
        image: newImage,
        facebook: newFacebook,
        twitter: newTwitter,
        instagram: newInstagram,
        bio: newBio
    };
    instructors.push(newInstructor);
}



// Array of courses
window.courses = [
    {
        id: 1,
        title: "Web Development",
        description: "This course is designed to give students a foundational understanding of web development. Students will learn the basics of HTML, CSS, and JavaScript.",
        instructorId: 1,
        instructor: instructors[0].name,
        price: 10000,
        image: "img/course-web-design.jpg",
        duration: "3 months",
        level: "Beginner",
        students: 27,
        rating: 5,
        category: "Web Development",
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
        instructorId: 2,
        instructor: instructors[1].name,
        price: 15000,
        image: "img/course-data-science.jpg",
        duration: "4 months",
        level: "Intermediate",
        students: 65,
        rating: 5,
        category: "Data Science",
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
        category: "Software Engineering",
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
        category: "Structured Programming",
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
        category: "OOP",
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
            title: "Object Oriented Programming Advanced",
            description: "This course is designed to give students a foundational understanding of object oriented programming. Students will learn the basics of inheritance and polymorphism.",
            instructorId: instructors[1].id,
            instructor: instructors[1].name,
            price: 7000,
            image: "img/course-oop-java.jpg",
            duration: "1.5 months",
            level: "student",
            students: 8,
            rating: 29,
            category: "OOP",
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
            id: 7,
            title: "QuickBooks Accounting",
            description: "This course is designed to give students a foundational understanding of QuickBooks Accounting. Students will learn the basics of accounting and bookkeeping.",
            instructorId: instructors[0].id,
            instructor: instructors[0].name,
            price: 8000,
            image: "img/course-quickbooks.jpg",
            duration: "2 months",
            level: "beginner",
            students: 10,
            rating: 30,
            category: "Accounting",
            isForColleges: true,
            isOngoing: true,
            topics: [
                {
                    title: "Accounting",
                    subtopics: ["Income Statements", "Balance Sheets"]
                },
                {
                    title: "Bookkeeping",
                    subtopics: ["Ledgers", "Journals"]
                }
            ]
        }
]

// What syntax error do i have saying unexpected token 'function'?
// I have to add a closing bracket to the end of the file

// Function to add courses
function addCourse(newId, newTitle, newDescription, instructorId, instructor, price, image, duration, level, students, rating, category, isForColleges, isOngoing, topics) {
    const newCourse = {
        id: newId,
        title: newTitle,
        description: newDescription,
        instructorId: instructorId,
        instructor: instructor,
        price: price,
        image: image,
        duration: duration,
        level: level,
        students: students,
        rating: rating,
        category: category,
        isForColleges: isForColleges,
        isOngoing: isOngoing,
        topics: topics.map(topic => ({
            title: topic.title,
            subtopics: topic.subtopics
        }))
    };
    courses.push(newCourse);
}

/*
    Add the following courses:
    - AutoCAD
    - Adobe Photoshop
    - Geographic Information Systems (GIS)
    - Python Programming
    - Backend Development
*/

addCourse(
    8,
    "AutoCAD",
    "This course is designed to give students a foundational understanding of AutoCAD. Students will learn the basics of 2D and 3D modeling.",
    instructors[2].id,
    instructors[2].name,
    10000,
    "img/course-autocad.jpg",
    "2 months",
    "Beginner",
    15,
    4,
    "Graphics Design",
    true,
    true,
    [
        {
            title: "2D Modeling",
            subtopics: ["Lines", "Circles", "Rectangles"]
        },
        {
            title: "3D Modeling",
            subtopics: ["Extrude", "Revolve", "Sweep"]
        }
    ]
);

addCourse(
    9,
    "Adobe Photoshop",
    "This course is designed to give students a foundational understanding of Adobe Photoshop. Students will learn the basics of photo editing and graphic design.",
    instructors[3].id,
    instructors[3].name,
    12000,
    "img/course-photoshop.jpg",
    "1 month",
    "Intermediate",
    20,
    5,
    "Graphics Design",
    true,
    true,
    [
        {
            title: "Photo Editing",
            subtopics: ["Cropping", "Resizing", "Adjusting Brightness"]
        },
        {
            title: "Graphic Design",
            subtopics: ["Layers", "Text", "Shapes"]
        }
    ]
);

addCourse(
    10,
    "Geographic Information Systems (GIS)",
    "This course is designed to give students a foundational understanding of Geographic Information Systems (GIS). Students will learn the basics of mapping and spatial analysis.",
    instructors[4].id,
    instructors[4].name,
    15000,
    "img/course-gis.jpg",
    "1 month",
    "Advanced",
    25,
    4,
    "GIS",
    true,
    true,
    [
        {
            title: "Mapping",
            subtopics: ["Layers", "Symbols", "Labels"]
        },
        {
            title: "Spatial Analysis",
            subtopics: ["Buffering", "Overlay", "Intersect"]
        }
    ]
);

addCourse(
    11,
    "Python Programming",
    "This course is designed to give students a foundational understanding of Python programming. Students will learn the basics of variables, functions, and loops.",
    instructors[0].id,
    instructors[0].name,
    20000,
    "img/course-python.jpg",
    "6 months",
    "Expert",
    30,
    5,
    "Software Engineering",
    true,
    true,
    [
        {
            title: "Variables",
            subtopics: ["Integers", "Floats", "Strings"]
        },
        {
            title: "Functions",
            subtopics: ["Parameters", "Return Values"]
        },
        {
            title: "Loops",
            subtopics: ["For Loops", "While Loops"]
        }
    ]
);

addCourse(
    12,
    "Backend Development",
    "This course is designed to give students a foundational understanding of backend development. Students will learn the basics of Node.js, Express, and MongoDB.",
    instructors[1].id,
    instructors[1].name,
    25000,
    "img/course-backend.jpg",
    "3 months",
    "Expert",
    35,
    4,
    "Backend Development",
    true,
    true,
    [
        {
            title: "Node.js",
            subtopics: ["Modules", "NPM", "Events"]
        },
        {
            title: "Express",
            subtopics: ["Routes", "Middleware", "Templates"]
        },
        {
            title: "MongoDB",
            subtopics: ["Collections", "Documents", "Queries"]
        }
    ]
);




// Array of testimonials
window.testimonials = [
    {
        name: "John Doe",
        title: "Web Developer",
        image: "images/john-doe.jpg",
        quote: "I learned a lot from this course. The instructor was very knowledgeable and the course material was well-organized."
    },

    {
        name: "Jane Doe",
        title: "Data Scientist",
        image: "images/jane-doe.jpg",
        quote: "This course exceeded my expectations. The instructor was very engaging and the course material was very relevant."
    },

    {
        name: "James Doe",
        title: "Mobile App Developer",
        image: "images/james-doe.jpg",
        quote: "I would highly recommend this course to anyone interested in mobile app development. The instructor was very helpful and the course material was very comprehensive."
    },

    {
        name: "Jessica Doe",
        title: "Machine Learning Engineer",
        image: "images/jessica-doe.jpg",
        quote: "This course was very informative. The instructor was very knowledgeable and the course material was very well-organized."
    },

    {
        name: "Jack Doe",
        title: "Cybersecurity Expert",
        image: "images/jack-doe.jpg",
        quote: "I learned a lot from this course. The instructor was very engaging and the course material was very relevant."
    },

    {
        name: "Jill Doe",
        title: "Artificial Intelligence Expert",
        image: "images/jill-doe.jpg",
        quote: "This course exceeded my expectations. The instructor was very helpful and the course material was very comprehensive."
    },

    {
        name: "Joe Doe",
        title: "QuickBooks Accounting Expert",
        image: "images/joe-doe.jpg",
        quote: "I would highly recommend this course to anyone interested in accounting. The instructor was very knowledgeable and the course material was very well-organized."
    }
];



// Function to add testimonials
function addTestimonial(newName, newTitle, newImage, newQuote) {
    const newTestimonial = {
        name: newName,
        title: newTitle,
        image: newImage,
        quote: newQuote
    };
    testimonials.push(newTestimonial);
}

// Define and add the first testimonial
addTestimonial(
    "John Doe",
    "Web Developer",
    "image1.jpg",
    "I learned a lot from this course. The instructor was very knowledgeable and the course material was well-organized."
);




