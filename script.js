
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

// Mobile navigation
menuToggle?.addEventListener("click", () => {
  mainNav?.classList.toggle("open");
});

mainNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav?.classList.remove("open");
  });
});

// Keep all portfolio sections visible.
// This prevents the blank-page problem if animations fail.
document.querySelectorAll(".reveal").forEach(section => {
  section.classList.add("visible");
});

// Footer year
const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// Contact form: prepares an email draft
const contactForm = document.querySelector("#contactForm");

contactForm?.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name") || "";
  const email = formData.get("email") || "";
  const message = formData.get("message") || "";

  // Replace this with your own email address.
  const recipient = "your.email@example.com";

  const subject = encodeURIComponent(
    `Portfolio message from ${name}`
  );

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );

  const note = document.querySelector("#formNote");
  if (note) {
    note.textContent = "Opening your email app…";
  }

  window.location.href =
    `mailto:${recipient}?subject=${subject}&body=${body}`;
});

// Aesthetic theme switcher
document.querySelectorAll("[data-theme-choice]").forEach(button => {
  button.addEventListener("click", () => {
    const theme = button.dataset.themeChoice;

    if (theme === "lavender") {
      document.body.removeAttribute("data-theme");
    } else {
      document.body.dataset.theme = theme;
    }

    document.querySelectorAll("[data-theme-choice]").forEach(item => {
      item.setAttribute(
        "aria-pressed",
        String(item === button)
      );
    });
  });
});

// Profile photo: add assets/profile.jpg to your repository.
// Uncomment these lines when the photo is ready.
//
// const avatar = document.querySelector("#avatar");
// if (avatar) {
//   avatar.innerHTML =
//     '<img src="assets/profile.jpg" alt="Profile photo">';
// }
