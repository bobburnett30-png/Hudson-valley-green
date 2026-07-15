// Hudson Valley Green Website Scripts

// Age Verification

function enterSite() {
    document.getElementById("ageModal").style.display = "none";
    localStorage.setItem("ageVerified", "true");
}


// Remember verification

window.onload = function() {

    const verified = localStorage.getItem("ageVerified");

    if (verified === "true") {
        document.getElementById("ageModal").style.display = "none";
    }

};


// Simple scroll reveal effect

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        if(position < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});
