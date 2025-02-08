document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        setTimeout(() => {
            Swal.fire(`Hello, ${user.name}!`, "Welcome to E-Learning!", "success");
        }, 2000);
    }

    const courses = [
        { id: 1, title: "JavaScript Basics", description: "Learn JS from scratch", price: "$50" },
        { id: 2, title: "HTML & CSS", description: "Build stunning websites", price: "$40" },
        { id: 3, title: "React for Beginners", description: "Dive into React", price: "$60" }
    ];

    const coursesContainer = document.getElementById("courses");

    function renderCourses(courseList) {
        coursesContainer.innerHTML = "";
        courseList.forEach(course => {
            const card = document.createElement("div");
            card.className = "col-md-4";

            card.innerHTML = `
                <div class="card shadow-sm p-3">
                    <h5 class="card-title text-secondary">${course.title}</h5>
                    <p>${course.description}</p>
                    <p><strong>Price:</strong> ${course.price}</p>
                    <button class="btn btn-primary w-100" data-id="${course.id}">Join Course</button>
                </div>
            `;

            coursesContainer.appendChild(card);
        });
    }

    renderCourses(courses);

    document.getElementById("search").addEventListener("input", function (e) {
        const query = e.target.value.toLowerCase();
        const filteredCourses = courses.filter(course =>
            course.title.toLowerCase().includes(query) ||
            course.description.toLowerCase().includes(query)
        );
        renderCourses(filteredCourses);
    });

    coursesContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            const courseId = e.target.getAttribute("data-id");
            localStorage.setItem("selectedCourse", courseId);
            window.location.href = "course.html";
        }
    });
});
