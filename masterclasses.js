


document.addEventListener("DOMContentLoaded", function () {
    const masterclassesContainer = document.getElementById('masterclassesInMasterclasses');

    function displayMasterclasses(masterclasses, container) {
        masterclasses.forEach(masterclass => {
            const masterclassElement = document.createElement('div');
            masterclassElement.className = 'masterclass-container wow fadeInUp';
            masterclassElement.setAttribute('data-wow-delay', '0.1s');

            masterclassElement.innerHTML = `
                <div class="masterclass-image">
                    <img src="${courses[masterclass.courseId].image}" alt="${masterclass.name}">
                    <div class="masterclass-title">${masterclass.name}</div>
                </div>
                <div class="masterclass-details">
                    <h5>${masterclass.name}</h5>
                    <p>${masterclass.description}</p>
                    <div class="info"><strong>Instructor:</strong> ${masterclass.instructor}</div>
                    <div class="price"><strong>Fee:</strong> $${masterclass.fee}</div>
                    <div class="date"><strong>Date:</strong> ${masterclass.date}</div>
                    <div class="info"><strong>Time:</strong> ${masterclass.time}</div>
                    <div class="info"><strong>Duration:</strong> ${masterclass.duration}</div>
                    <div class="info"><strong>Venue:</strong> ${masterclass.venue}</div>
                    <div class="info"><strong>Target Audience:</strong> ${masterclass.targetAudience}</div>
                    <div class="info"><strong>Requirements:</strong> ${masterclass.requirements}</div>
                    <div class="info"><strong>Benefits:</strong> ${masterclass.benefits}</div>
                    <a href="masterclass-enroll.html?masterclass=${masterclass.id}" class="btn btn-primary mt-3">Join Masterclass</a>
                </div>
            `;

            container.appendChild(masterclassElement);
        });
    }
    // Call the function to display all masterclasses

    displayMasterclasses(masterclasses, masterclassesContainer);
});

