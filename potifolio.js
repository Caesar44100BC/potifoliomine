// ---------- SCROLL ANIMATION FOR SECTIONS ----------
const sections = document.querySelectorAll("section");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// ---------- TYPING EFFECT FOR HEADER ----------
window.addEventListener("load", () => {
  const nameSpan = document.querySelector("header h1 span");

  // safety check (prevents crash if missing)
  if (!nameSpan) return;

  const nameText = nameSpan.textContent;
  nameSpan.textContent = "";

  let index = 0;

  function typeEffect() {
    if (index < nameText.length) {
      nameSpan.textContent += nameText.charAt(index);
      index++;
      setTimeout(typeEffect, 150);
    }
  }

  typeEffect();
});