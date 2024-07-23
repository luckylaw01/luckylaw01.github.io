// This is the javascript file for team.html
const InstructorsInTeam = document.getElementById('InstructorsInTeam');


function displayInstructorsInTeam(instructors, InstructorsInTeam) {
    instructors.forEach(instructor => {
        const instructorCard = document.createElement('div');
        instructorCard.classList.add('col-lg-3', 'col-md-6', 'wow', 'fadeInUp');
        instructorCard.setAttribute('data-wow-delay', '0.1s');
        instructorCard.innerHTML = `
            <div class="team-item bg-light">
                <div class="overflow-hidden">
                    <img class="img-fluid" src="${instructor.image}" alt="">
                </div>
                <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
                    <div class="bg-light d-flex justify-content-center pt-2 px-1">
                        <a class="btn btn-sm-square btn-primary mx-1" href="${instructor.facebook}"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm btn-primary mx-1" href="${instructor.twitter}"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm
                        -square btn-primary mx-1" href="${instructor.instagram}"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="text-center p-4">
                    <h5 class="mb-0">${instructor.name}</h5>
                    <small>${instructor.title}</small>
                    <p>${instructor.bio.slice(0, 100)}... <a href="instructor.html?id=${instructor.id}">Read More</a></p>
                </div>
            </div>
        `;
        InstructorsInTeam.appendChild(instructorCard);
    }
    );
}

displayInstructorsInTeam(instructors, InstructorsInTeam);