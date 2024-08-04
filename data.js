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
    },
    {
        id: 7,
        name: "Tabitha Waithera",
        title: "Cybersecurity Engineer",
        image: "img/instructor-tabitha-waithera.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "twaithera@example.com",
        phone: "9012345678",
        bio: "Tabitha is a cybersecurity engineer with over 3 years of experience. She has worked on a wide range of projects, from small websites to large web applications. She is passionate about teaching and sharing her knowledge with others.",
        courses: [5]
    },
    {
        id: 8,
        name: "Ngatia Mwai",
        title: "Systems Testing Engineer",
        image: "img/instructor-ngatia-mwai.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#",
        email: "ngatiamwai@gmail.com",
        phone: "9012345678",
        bio: "Ngatia is a systems testing engineer with over 3 years of experience. He has worked on a wide range of projects, from small websites to large web applications. He is passionate about teaching and sharing his knowledge with others.",
        courses: [5],
    }
];

// Function to add instructors
function addInstructor(newId, newName, newTitle, newImage, newFacebook, newTwitter, newInstagram, newEmail, newPhone, newBio, courses) {
    const newInstructor = {
        id: newId,
        name: newName,
        title: newTitle,
        image: newImage,
        facebook: newFacebook,
        twitter: newTwitter,
        instagram: newInstagram,
        email: newEmail,
        phone: newPhone,
        bio: newBio,
        courses: courses
    };
    instructors.push(newInstructor);
}



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
            category: "knecMasterclasses",
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
        },
        {
            id: 8,
            title: "AutoCAD",
            description: "This course is designed to give students a foundational understanding of AutoCAD. Students will learn the basics of 2D and 3D modeling.",
            instructorId: instructors[2].id,
            instructor: instructors[2].name,
            price: 10000,
            image: "img/course-autocad.jpg",
            duration: "2 months",
            level: "Beginner",
            students: 15,
            rating: 4,
            category: "graphicsDesign",
            isForColleges: true,
            isOngoing: true,
            topics: [
                {
                    title: "2D Modeling",
                    subtopics: ["Lines", "Circles", "Rectangles"]
                },
                {
                    title: "3D Modeling",
                    subtopics: ["Extrude", "Revolve", "Sweep"]
                }
            ]
        },
        {
            id: 9,
            title: "Adobe Photoshop",
            description: "This course is designed to give students a foundational understanding of Adobe Photoshop. Students will learn the basics of photo editing and graphic design.",
            instructorId: instructors[3].id,
            instructor: instructors[3].name,
            price: 12000,
            image: "img/course-photoshop.jpg",
            duration: "1 month",
            level: "Intermediate",
            students: 20,
            rating: 5,
            category: "graphicsDesign",
            isForColleges: true,
            isOngoing: true,
            topics: [
                {
                    title: "Photo Editing",
                    subtopics: ["Cropping", "Resizing", "Adjusting Brightness"]
                },
                {
                    title: "Graphic Design",
                    subtopics: ["Layers", "Text", "Shapes"]
                }
            ]
        },
        {
            id: 10,
            title: "Geographic Information Systems (GIS)",
            description: "This course is designed to give students a foundational understanding of Geographic Information Systems (GIS). Students will learn the basics of mapping and spatial analysis.",
            instructorId: instructors[0].id,
            instructor: instructors[0].name,
            price: 15000,
            image: "img/course-gis.jpg",
            duration: "1 month",
            level: "Advanced",
            students: 25,
            rating: 4,
            category: "knecMasterclasses",
            isForColleges: true,
            isOngoing: true,
            topics: [
                {
                    title: "Mapping",
                    subtopics: ["Layers", "Symbols", "Labels"]
                },
                {
                    title: "Spatial Analysis",
                    subtopics: ["Buffering", "Overlay", "Intersect"]
                }
            ]
        },
        {
            id: 11,
            title: "Python Programming",
            description: "This course is designed to give students a foundational understanding of Python programming. Students will learn the basics of variables, functions, and loops.",
            instructorId: instructors[4].id,
            instructor: instructors[4].name,
            price: 20000,
            image: "img/course-python.jpg",
            duration: "3 months",
            level: "Expert",
            students: 30,
            rating: 5,
            category: "softwareEngineering",
            isForColleges: true,
            isOngoing: true,
            topics: [
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
        },
        {
            id: 12,
            title: "Backend Development",
            description: "This course is designed to give students a foundational understanding of backend development. Students will learn the basics of Node.js, Express, and MongoDB.",
            instructorId: instructors[1].id,
            instructor: instructors[1].name,
            price: 25000,
            image: "img/course-backend.jpg",
            duration: "3 months",
            level: "Expert",
            students: 35,
            rating: 4,
            category: "webDevelopment",
            isForColleges: true,
            isOngoing: true,
            topics: [
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
        },
        {
            id: 13,
            title: "Databases",
            description: "This course is designed to give students a foundational understanding of databases. Students will learn the basics of SQL, MySQL, and PostgreSQL.",
            instructorId: instructors[5].id,
            instructor: instructors[5].name,
            price: 9000,
            image: "img/course-databases.jpg",
            duration: "2 months",
            level: "Expert",
            students: 35,
            rating: 4,
            category: "webDevelopment",
            isForColleges: true,
            isOngoing: true,
            topics: [
                {
                    title: "SQL",
                    subtopics: ["Select", "Insert", "Update"]
                },
                {
                    title: "MySQL",
                    subtopics: ["Tables", "Indexes", "Views"]
                },
                {
                    title: "PostgreSQL",
                    subtopics: ["Schemas", "Sequences", "Triggers"]
                }
            ]
        },
        {
            id: 14,
            title: "Adobe Premiere Pro",
            description: "This course is designed to give students a foundational understanding of Adobe Premiere Pro. Students will learn the basics of video editing and production.",
            instructorId: instructors[3].id,
            instructor: instructors[3].name,
            price: 10000,
            image: "img/course-premiere-pro.jpg",
            duration: "1 month",
            level: "Intermediate",
            students: 20,
            rating: 5,
            category: "graphicsDesign",
            isForColleges: true,
            isOngoing: true,
            topics: [
                {
                    title: "Video Editing",
                    subtopics: ["Cutting", "Trimming", "Splitting"]
                },
                {
                    title: "Production",
                    subtopics: ["Transitions", "Effects", "Titles"]
                }
            ]
        },
        {
            id: 15,
            title: "Cybersecurity",
            description: "This course is designed to give students a foundational understanding of cybersecurity. Students will learn the basics of ethical hacking and network security.",
            instructorId: instructors[6].id,
            instructor: instructors[6].name,
            price: 15000,
            image: "img/course-cyber-security.jpg",
            duration: "2 months",
            level: "Advanced",
            students: 25,
            rating: 4,
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
            id: 16,
            title: "Artificial Intelligence",
            description: "This course is designed to give students a foundational understanding of artificial intelligence. Students will learn the basics of machine learning and deep learning.",
            instructorId: instructors[6].id,
            instructor: instructors[6].name,
            price: 20000,
            image: "img/course-artificial-intelligence.jpg",
            duration: "3 months",
            level: "Expert",
            students: 30,
            rating: 5,
            category: "softwareEngineering",
            isForColleges: true,
            isOngoing: true,
            topics: [
                {
                    title: "Machine Learning",
                    subtopics: ["Supervised", "Unsupervised"]
                },
                {
                    title: "Deep Learning",
                    subtopics: ["Neural Networks", "Convolutional Networks"]
                }
            ]
        },
        {
            id: 17,
            title: "Cloud Computing",
            description: "This course is designed to give students a foundational understanding of cloud computing. Students will learn the basics of AWS, Azure, and Google Cloud.",
            instructorId: instructors[1].id,
            instructor: instructors[1].name,
            price: 25000,
            image: "img/course-cloud-computing.jpg",
            duration: "3 months",
            level: "Expert",
            students: 35,
            rating: 4,
            category: "softwareEngineering",
            isForColleges: true,
            isOngoing: true,
            topics: [
                {
                    title: "AWS",
                    subtopics: ["EC2", "S3", "RDS"]
                },
                {
                    title: "Azure",
                    subtopics: ["Virtual Machines", "Blob Storage", "SQL Database"]
                },
                {
                    title: "Google Cloud",
                    subtopics: ["Compute Engine", "Cloud Storage", "BigQuery"]
                }
            ]
        },
        // Add a course called Git and Github taught by L Munyaka
        {
            id: 18,
            title: "Git and Github",
            description: "This course is designed to give students a foundational understanding of Git and Github. Students will learn the basics of version control and collaboration.",
            instructorId: instructors[0].id,
            instructor: instructors[0].name,
            price: 5000,
            image: "img/course-git-github.jpg",
            duration: "1 month",
            level: "Beginner",
            students: 15,
            rating: 5,
            category: "webDevelopment",
            isForColleges: true,
            isOngoing: true,
            topics: [
                {
                    title: "Git",
                    subtopics: ["Commits", "Branches", "Merges"]
                },
                {
                    title: "Github",
                    subtopics: ["Repositories", "Pull Requests", "Issues"]
                }
            ]
        }

]


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


// Array of Masterclasses
window.masterclasses = [
    {
        id: 1,
        name: "Github Student",
        courseId: 17,
        description: "Get to know and maximize your student features with the GitHub student package. Copilot, free domain names, and more.",
        instructor: "L Munyaka",
        fee: 0,
        date: "2024-08-05",
        time: "20:00",
        duration: "30 Minutes",
        venue: "SOAP WhatsApp group",
        targetAudience: "SOAP Product Development Team",
        requirements: "Be a SOAP Development Team Member",
        benefits: "Enhanced knowledge of GitHub student features"
    }
    
    
    // Add more masterclasses as needed
];



