// ----------TOGGLE SKILLS------------
document.getElementById("skills").addEventListener("click", func = () => {
    if (!document.getElementById("education-info").classList.contains("none")) {
        document.getElementById("education-info").classList.toggle("none")
    } if (!document.getElementById("experience-info").classList.contains("none")) {
        document.getElementById("experience-info").classList.toggle("none")
    }
    document.getElementById("skills-info").classList.toggle("none")
})
// ----------TOGGLE EDUCATION------------
document.getElementById("education").addEventListener("click", func = () => {
    if (!document.getElementById("skills-info").classList.contains("none")) {
        document.getElementById("skills-info").classList.toggle("none")
    } if (!document.getElementById("experience-info").classList.contains("none")) {
        document.getElementById("experience-info").classList.toggle("none")
    }
    document.getElementById("education-info").classList.toggle("none")
})

// ----------TOGGLE EXPERIENCE------------
document.getElementById("experience").addEventListener("click", func = () => {
    if (!document.getElementById("education-info").classList.contains("none")) {
        document.getElementById("education-info").classList.toggle("none")
    } if (!document.getElementById("skills-info").classList.contains("none")) {
        document.getElementById("skills-info").classList.toggle("none")
    }
    document.getElementById("experience-info").classList.toggle("none")
})

// ----------PROJECT 1 URL------------
document.getElementById("project1").addEventListener("click", pass = () => {
    location.href = ("http://127.0.0.1:5500/index.html#about")
})

// ----------PROJECT 2 URL------------
document.getElementById("project2").addEventListener("click", pass = () => {
    location.href = ("http://127.0.0.1:5500/index.html#portfolio")
})

// ----------PROJECT 3 URL------------
document.getElementById("project3").addEventListener("click", pass = () => {
    location.href = ("http://127.0.0.1:5500/index.html#portfolio")
})

// ----------TOGGLE SUCCESSFULL MESSAGE------------
document.getElementById("btn").addEventListener('click', reset = () => {
    if (document.getElementById("contact-info").checkValidity()) {
        setTimeout(() => {
            document.getElementById("formSumbmittedMessage").classList.toggle("none")
        }, 2000)
        document.getElementById("formSumbmittedMessage").classList.toggle("none")
    }
})

// ---------------------close sidebar---------------

document.getElementById("hamburger").addEventListener("click", () => {
    let sidebar = document.getElementById("sidebar")
    sidebar.classList.toggle("nonesidebar")
})
document.getElementById("cross").addEventListener("click", () => {
    let sidebar = document.getElementById("sidebar")
    sidebar.classList.toggle("nonesidebar")
})

// -------------------See more------------------

const seemore = () => {
    let seemoreProject1 = document.getElementById("seemoreProject1")
    seemoreProject1.classList.toggle("noneSeeMore")
    let seemoreProject2 = document.getElementById("seemoreProject2")
    seemoreProject2.classList.toggle("noneSeeMore")
    let seemoreProject3 = document.getElementById("seemoreProject3")
    seemoreProject3.classList.toggle("noneSeeMore")
    let seemoreProject4 = document.getElementById("seemoreProject4")
    seemoreProject4.classList.toggle("noneSeeMore")
    let seemoreProject5 = document.getElementById("seemoreProject5")
    seemoreProject5.classList.toggle("noneSeeMore")
    let seemoreProject6 = document.getElementById("seemoreProject6")
    seemoreProject6.classList.toggle("noneSeeMore")

}


