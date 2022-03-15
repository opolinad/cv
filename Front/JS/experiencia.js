document.addEventListener("click", (e) => {
    let allJobs = document.getElementsByClassName("tarjeta-empleo");
    let engineeringJobs = document.getElementsByClassName("engineering");
    let profesorJobs = document.getElementsByClassName("professor");
    let programmingJobs = document.getElementsByClassName("programming");
    let image = document.getElementById("img-experiencia");
    switch (e.target.id) {
        case "engineering":
            for (const aj of allJobs) {
                aj.classList.add("notVisible")
            }
            for (const ej of engineeringJobs) {
                ej.classList.remove("notVisible")
            }
            image.src = "../img/engineering.jpg";
            image.alt = "Three engineers in a construction";
            break;
        case "professor":
            for (const aj of allJobs) {
                aj.classList.add("notVisible")
            }
            for (const fj of profesorJobs) {
                fj.classList.remove("notVisible")
            }
            image.src = "../img/professor.jpg";
            image.alt = "A classroom with students and the professor";
            break;
        case "programming":
            for (const aj of allJobs) {
                aj.classList.add("notVisible")
            }
            for (const mj of programmingJobs) {
                mj.classList.remove("notVisible")
            }
            image.src = "../img/programming.jpg";
            image.alt = "Person in front of three computer monitors";
            break;
    }
})