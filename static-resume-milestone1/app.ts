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
