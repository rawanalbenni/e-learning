document.addEventListener("DOMContentLoaded", function () {
    const courses = {
        1: { title: "JavaScript Basics", description: "Learn JS from scratch", price: "$50" },
        2: { title: "HTML & CSS", description: "Build stunning websites", price: "$40" },
        3: { title: "React for Beginners", description: "Dive into React", price: "$60" }
    };

    const courseId = localStorage.getItem("selectedCourse");
    const course = courses[courseId];

    if (course) {
        document.getElementById("courseTitle").textContent = course.title;
        document.getElementById("courseDescription").textContent = course.description;
        document.getElementById("coursePrice").textContent = `Price: ${course.price}`;
    }
});

function purchase() {
    Swal.fire("Success!", "You have successfully enrolled in the course!", "success");
}
