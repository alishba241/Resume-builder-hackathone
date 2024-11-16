"use strict";
//! form and resume display elements
const resumeForm = document.getElementById("resumeForm");
const resumeDisplay = document.getElementById("resume-display");
//! getting input fields
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
const addressInput = document.getElementById("addressInput");
const schoolInput = document.getElementById("schoolInput");
const degreeInput = document.getElementById("degree");
const startYear = document.getElementById("start-yearInput");
const endYear = document.getElementById("end-yearInput");
const selectSkills = document.getElementById("skills");
const company = document.getElementById("companyInput");
const startTime = document.getElementById("start-timeInput");
const endTime = document.getElementById("end-timeInput");
const jobRole = document.getElementById("job-role");
const previousJob = document.getElementById("PeviousjobtInput");
const experience = document.getElementById("experienceInput");
const project = document.getElementById("projectInput");
const projectDescription = document.getElementById("projecttextInput");
const project2 = document.getElementById("projectInput2");
const projectDescription2 = document.getElementById("projecttextInput2");
const project3 = document.getElementById("projectInput3");
const projectDescription3 = document.getElementById("projecttextInput3");
const profileImageInput = document.getElementById("profileImageInput");
const wordLimitWarning = document.getElementById("wordLimitWarning");
const wordCounter = document.getElementById("wordCounter");
const wordLimitWarning2 = document.getElementById("wordLimitWarning2");
const wordCounter2 = document.getElementById("wordCounter2");
const wordLimitWarning3 = document.getElementById("wordLimitWarning3");
const wordCounter3 = document.getElementById("wordCounter3");
const wordLimitWarning4 = document.getElementById("wordLimitWarning4");
const wordCounter4 = document.getElementById("wordCounter4");
const skillsDropdown = document.getElementById("skills");
const selectedSkillsContainer = document.getElementById("selectedSkillsContainer");
const skillList = document.getElementById("skillList");
//! display elements
const nameDisplay = document.getElementById("name");
const jobRoleDisplay = document.getElementById("jobRole");
const addressDisplay = document.getElementById("address");
const phoneDisplay = document.getElementById("phone");
const emailDisplay = document.getElementById("email");
const schoolDisplay = document.getElementById("school");
const syearDisplay = document.getElementById("syear");
const eyearDisplay = document.getElementById("eyear");
const degreeDisplay = document.getElementById("degrees");
const skillDisplay = document.getElementById("skills");
const companyNameDisplay = document.getElementById("company");
const previousjobDisplay = document.getElementById("Peviousjob");
const stimeDisplay = document.getElementById("stime");
const etimeDisplay = document.getElementById("etime");
const workExpDisplay = document.getElementById("workExp");
const projectName = document.getElementById("projName");
const projectDisplay = document.getElementById("projWork");
const projectName2 = document.getElementById("projName2");
const projectDisplay2 = document.getElementById("projWork2");
const projectName3 = document.getElementById("projName3");
const projectDisplay3 = document.getElementById("projWork3");
const profileImageDisplay = document.getElementById("profile-image");
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
// ! skill dropdown elements
let selectedSkills = [];
function updateSkillDisplay() {
    const skillElements = Array.from(selectedSkillsContainer.children).map((skillBox) => {
        var _a;
        const skill = (_a = skillBox.textContent) === null || _a === void 0 ? void 0 : _a.replace(" x", "").trim();
        return `<span class="skill-badge">${skill}</span>`;
    });
    skillList.innerHTML = skillElements.join(", ");
}
function addSkill(skill) {
    var _a;
    let skillExists = false;
    for (let i = 0; i < selectedSkillsContainer.children.length; i++) {
        if ((_a = selectedSkillsContainer.children[i].textContent) === null || _a === void 0 ? void 0 : _a.includes(skill)) {
            skillExists = true;
            break;
        }
    }
    if (!skillExists) {
        const skillBox = document.createElement("div");
        skillBox.className = "skill-box";
        skillBox.innerHTML = `${skill} <button onclick="removeSkill(this)">x</button>`;
        selectedSkillsContainer.appendChild(skillBox);
        updateSkillDisplay();
    }
}
//! function to remove skill
function removeSkill(button) {
    var _a;
    (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    updateSkillDisplay();
}
window.removeSkill = removeSkill;
//! Event listener for dropdown selection to add skill
skillsDropdown.addEventListener("change", function () {
    const selectedSkill = skillsDropdown.value;
    if (selectedSkill) {
        addSkill(selectedSkill);
    }
    skillsDropdown.value = "";
});
//! word limit for experience input
const maxWords = 40;
experience.addEventListener("input", () => {
    const words = experience.value.trim().split(/\s+/); //! split by whitespace
    wordCounter.textContent = `${Math.min(words.length, maxWords)}/${maxWords}`;
    //! Check if word limit exceed
    if (words.length > maxWords) {
        wordLimitWarning.style.display = "block";
        experience.value = words.slice(0, maxWords).join(" ");
        wordCounter.textContent = `${maxWords}/${maxWords}`;
    }
    else {
        wordLimitWarning.style.display = "none";
    }
});
projectDescription.addEventListener("input", () => {
    const words2 = projectDescription.value.trim().split(/\s+/); //! split by whitespace
    wordCounter2.textContent = `${Math.min(words2.length, maxWords)}/${maxWords}`;
    //! Check if word limit exceed
    if (words2.length > maxWords) {
        wordLimitWarning2.style.display = "block";
        projectDescription.value = words2.slice(0, maxWords).join(" ");
        wordCounter2.textContent = `${maxWords}/${maxWords}`;
    }
    else {
        wordLimitWarning2.style.display = "none";
    }
});
projectDescription2.addEventListener("input", () => {
    const words3 = projectDescription2.value.trim().split(/\s+/); //! split by whitespace
    wordCounter3.textContent = `${Math.min(words3.length, maxWords)}/${maxWords}`;
    //! Check if word limit exceed
    if (words3.length > maxWords) {
        wordLimitWarning3.style.display = "block";
        projectDescription2.value = words3.slice(0, maxWords).join(" ");
        wordCounter3.textContent = `${maxWords}/${maxWords}`;
    }
    else {
        wordLimitWarning3.style.display = "none";
    }
});
projectDescription3.addEventListener("input", () => {
    const words4 = projectDescription3.value.trim().split(/\s+/); //! split by whitespace
    wordCounter4.textContent = `${Math.min(words4.length, maxWords)}/${maxWords}`;
    //! Check if word limit exceed
    if (words4.length > maxWords) {
        wordLimitWarning4.style.display = "block";
        projectDescription3.value = words4.slice(0, maxWords).join(" ");
        wordCounter4.textContent = `${maxWords}/${maxWords}`;
    }
    else {
        wordLimitWarning4.style.display = "none";
    }
});
//! Handle form submission to generate resume
resumeForm.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //! update resume display with form values
    nameDisplay.textContent = nameInput.value;
    jobRoleDisplay.textContent = jobRole.value;
    addressDisplay.textContent = addressInput.value;
    phoneDisplay.textContent = phoneInput.value;
    emailDisplay.textContent = emailInput.value;
    schoolDisplay.textContent = schoolInput.value;
    syearDisplay.textContent = startYear.value;
    eyearDisplay.textContent = endYear.value;
    degreeDisplay.textContent = degreeInput.value;
    skillList.innerHTML = "";
    //! skills in comma separated format
    const selectedSkills = Array.from(selectedSkillsContainer.children).map((skillBox) => { var _a; return (_a = skillBox.textContent) === null || _a === void 0 ? void 0 : _a.replace(" x", "").trim(); });
    //! skill boxes
    selectedSkills.forEach((skill) => {
        const skillElement = document.createElement("span");
        skillElement.className = "skill";
        skillElement.textContent = skill || "";
        skillList.appendChild(skillElement);
    });
    companyNameDisplay.textContent = company.value;
    stimeDisplay.textContent = startTime.value;
    etimeDisplay.textContent = endTime.value;
    previousjobDisplay.textContent = previousJob.value;
    workExpDisplay.textContent = experience.value;
    projectName.textContent = project.value;
    projectDisplay.textContent = projectDescription.value;
    projectName2.textContent = project2.value;
    projectDisplay2.textContent = projectDescription2.value;
    projectName3.textContent = project3.value;
    projectDisplay3.textContent = projectDescription3.value;
    const profileImageFile = (_a = profileImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profileImageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profileImageDisplay.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profileImageFile);
    }
    resumeDisplay.style.display = "block";
    resumeForm.style.display = "none";
});
