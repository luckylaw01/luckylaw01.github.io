
const courseSelect = document.getElementById('course');

// Populate the options with courses names from data.js
courses.forEach(course => {
    const option = document.createElement('option');
    option.value = course.id;
    option.textContent = course.title;
    courseSelect.appendChild(option);
});



