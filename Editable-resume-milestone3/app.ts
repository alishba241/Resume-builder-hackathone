//! form and resume display elements
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLElement;

//! getting input fields
const nameInput = document.getElementById("nameInput") as HTMLInputElement;
const phoneInput = document.getElementById("phoneInput") as HTMLInputElement;
const emailInput = document.getElementById("emailInput") as HTMLInputElement;
const addressInput = document.getElementById("addressInput") as HTMLInputElement;
const schoolInput = document.getElementById("schoolInput") as HTMLInputElement;
const degreeInput = document.getElementById("degree") as HTMLSelectElement;
const startYear = document.getElementById("start-yearInput") as HTMLInputElement;
const endYear = document.getElementById("end-yearInput") as HTMLInputElement;
const selectSkills = document.getElementById("skills") as HTMLSelectElement;
const company = document.getElementById("companyInput") as HTMLInputElement;
const startTime = document.getElementById("start-timeInput") as HTMLInputElement;
const endTime = document.getElementById("end-timeInput") as HTMLInputElement;
const jobRole = document.getElementById("job-role") as HTMLSelectElement;
const previousJob = document.getElementById("PeviousjobtInput") as HTMLInputElement;
const experience = document.getElementById("experienceInput") as HTMLTextAreaElement;
const project = document.getElementById("projectInput") as HTMLInputElement;
const projectDescription = document.getElementById("projecttextInput") as HTMLTextAreaElement;
const project2 = document.getElementById("projectInput2") as HTMLInputElement;
const projectDescription2 = document.getElementById("projecttextInput2") as HTMLTextAreaElement;
const project3 = document.getElementById("projectInput3") as HTMLInputElement;
const projectDescription3 = document.getElementById("projecttextInput3") as HTMLTextAreaElement;
const profileImageInput = document.getElementById("profileImageInput") as HTMLInputElement;
const wordLimitWarning = document.getElementById("wordLimitWarning") as HTMLParagraphElement;
const wordCounter = document.getElementById("wordCounter") as HTMLDivElement;
const wordLimitWarning2 = document.getElementById("wordLimitWarning2") as HTMLParagraphElement;
const wordCounter2 = document.getElementById("wordCounter2") as HTMLDivElement;
const wordLimitWarning3 = document.getElementById("wordLimitWarning3") as HTMLParagraphElement;
const wordCounter3 = document.getElementById("wordCounter3") as HTMLDivElement;
const wordLimitWarning4 = document.getElementById("wordLimitWarning4") as HTMLParagraphElement;
const wordCounter4 = document.getElementById("wordCounter4") as HTMLDivElement;
const skillsDropdown = document.getElementById("skills") as HTMLSelectElement;
const selectedSkillsContainer = document.getElementById("selectedSkillsContainer") as HTMLDivElement;
const skillList = document.getElementById("skillList") as HTMLDivElement;


//! display elements
const nameDisplay = document.getElementById("name") as HTMLElement;
const jobRoleDisplay = document.getElementById("jobRole") as HTMLElement;
const addressDisplay = document.getElementById("address") as HTMLElement;
const phoneDisplay = document.getElementById("phone") as HTMLElement;
const emailDisplay = document.getElementById("email") as HTMLElement;
const schoolDisplay = document.getElementById("school") as HTMLElement;
const syearDisplay = document.getElementById("syear") as HTMLElement;
const eyearDisplay = document.getElementById("eyear") as HTMLElement;
const degreeDisplay = document.getElementById("degrees") as HTMLElement;
const skillDisplay = document.getElementById("skills") as HTMLElement;
const companyNameDisplay = document.getElementById("company") as HTMLElement;
const previousjobDisplay = document.getElementById("Peviousjob") as HTMLElement;
const stimeDisplay = document.getElementById("stime") as HTMLElement;
const etimeDisplay = document.getElementById("etime") as HTMLElement;
const workExpDisplay = document.getElementById("workExp") as HTMLElement;
const projectName = document.getElementById("projName") as HTMLElement;
const projectDisplay = document.getElementById("projWork") as HTMLElement;
const projectName2 = document.getElementById("projName2") as HTMLElement;
const projectDisplay2 = document.getElementById("projWork2") as HTMLElement;
const projectName3 = document.getElementById("projName3") as HTMLElement;
const projectDisplay3 = document.getElementById("projWork3") as HTMLElement;
const profileImageDisplay = document.getElementById(
  "profile-image"
) as HTMLImageElement;

// ! toggling skill section
function toggleSkills(): void {
  const skillsSection = document.getElementById("selectedSkillsContainer")!;
  const toggleBtn = document.getElementById(
    "toggle-skills-btn"
  ) as HTMLButtonElement;

  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
    toggleBtn.innerText = "Hide Skills";
  } else {
    skillsSection.style.display = "none";
    toggleBtn.innerText = "Show Skills";
  }
}

//! function to make resume fields editable
const makeContentEditable = () => {
  nameDisplay.setAttribute("contenteditable", "true");
  jobRoleDisplay.setAttribute("contenteditable", "true");
  addressDisplay.setAttribute("contenteditable", "true");
  phoneDisplay.setAttribute("contenteditable", "true");
  emailDisplay.setAttribute("contenteditable", "true");
  schoolDisplay.setAttribute("contenteditable", "true");
  syearDisplay.setAttribute("contenteditable", "true");
  eyearDisplay.setAttribute("contenteditable", "true");
  degreeDisplay.setAttribute("contenteditable", "true");
  skillDisplay.setAttribute("contenteditable", "true");
  companyNameDisplay.setAttribute("contenteditable", "true");
  stimeDisplay.setAttribute("contenteditable", "true");
  etimeDisplay.setAttribute("contenteditable", "true");
  workExpDisplay.setAttribute("contenteditable", "true");
  previousjobDisplay.setAttribute("contenteditable", "true");
  projectName.setAttribute("contenteditable", "true");
  projectDisplay.setAttribute("contenteditable", "true");
  projectName2.setAttribute("contenteditable", "true");
  projectDisplay2.setAttribute("contenteditable", "true");
  projectName3.setAttribute("contenteditable", "true");
  projectDisplay3.setAttribute("contenteditable", "true");
};

// ! enable resume preview filds editable
const editableElements = [
  nameDisplay,
  jobRoleDisplay,
  addressDisplay,
  phoneDisplay,
  emailDisplay,
  schoolDisplay,
  syearDisplay,
  eyearDisplay,
  degreeDisplay,
  skillDisplay,
  previousjobDisplay,
  companyNameDisplay,
  stimeDisplay,
  etimeDisplay,
  workExpDisplay,
  projectName,
  projectDisplay,
  projectName2,
  projectDisplay2,
  projectName3,
  projectDisplay3,
];

editableElements.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.contentEditable !== "true") {
      element.contentEditable = "true";
    }
  });
});

// ! skill dropdown elements
let selectedSkills: string[] = [];

function updateSkillDisplay() {
  const skillElements = Array.from(selectedSkillsContainer.children).map(
    (skillBox) => {
      const skill = skillBox.textContent?.replace(" x", "").trim();
      return `<span class="skill-badge">${skill}</span>`;
    }
  );
  skillList.innerHTML = skillElements.join(", ");
}

function addSkill(skill: string) {
  let skillExists = false;
  for (let i = 0; i < selectedSkillsContainer.children.length; i++) {
    if (selectedSkillsContainer.children[i].textContent?.includes(skill)) {
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
function removeSkill(button: HTMLElement) {
  button.parentElement?.remove();
  updateSkillDisplay();
}

(window as any).removeSkill = removeSkill;

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
  } else {
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
  } else {
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
  } else {
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
  } else {
    wordLimitWarning4.style.display = "none";
  }
});

//! Handle form submission to generate resume
resumeForm.addEventListener("submit", function (event) {
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
  const selectedSkills = Array.from(selectedSkillsContainer.children).map(
    (skillBox) => skillBox.textContent?.replace(" x", "").trim()
  );

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

  const profileImageFile = profileImageInput.files?.[0];
  if (profileImageFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImageDisplay.src = e.target?.result as string;
    };
    reader.readAsDataURL(profileImageFile);
  }
  resumeDisplay.style.display = "block";
  resumeForm.style.display = "none";
  makeContentEditable();
});

// ! ----------------------------------------- THE END ------------------------------------------------ //
