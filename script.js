const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
menuToggle?.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

document.querySelector("#year").textContent = new Date().getFullYear();

// Contact form: creates a draft in the visitor's email app. Replace this address.
const contactForm = document.querySelector("#contactForm");
contactForm?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");
  const to = "your.email@example.com";
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  document.querySelector("#formNote").textContent = "Opening your email app with a prepared message…";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
});

// To use a profile image: add assets/profile.jpg and uncomment the next lines.
// const avatar = document.querySelector("#avatar");
// avatar.innerHTML = '<img src="assets/profile.jpg" alt="Profile photo">';
