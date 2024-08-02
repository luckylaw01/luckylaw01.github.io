

// get masteclass list container

const masterclassesList = document.getElementById('masterclasses-list');

// create a function to display masterclasses
function displayMasterclasses() {
    masterclassesList.innerHTML = '';
    window.masterclasses.forEach(masterclass => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${masterclass.name}</td>
            <td>${masterclass.instructor}</td>
            <td>${masterclass.duration}</td>
            <td>${masterclass.date}</td>
            <td>${masterclass.endDate}</td>
            <td>
                <button type="button" class="btn btn-sm btn-primary">Edit</button>
                <button type="button" class="btn btn-sm btn-danger">Delete</button>
            </td>
        `;
        masterclassesList.appendChild(tr);
    });
}

displayMasterclasses();


