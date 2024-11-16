"use strict";
// ! toggling skill section
function toggleSkills() {
    const skillsSection = document.getElementById("selectedSkillsContainer");
    const toggleBtn = document.getElementById("toggle-skills-btn");
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleBtn.innerText = "Hide Skills";
    }
    else {
        skillsSection.style.display = "none";
        toggleBtn.innerText = "Show Skills";
    }
}
