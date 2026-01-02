// ===== Navbar auto close on mobile click =====
const navLinks = document.querySelectorAll('.nav-link');
const navCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navCollapse.classList.contains('show')) {
      navCollapse.classList.remove('show');
    }
  });
});

// ===== Skills Progress Animation =====
const progressBars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
  progressBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (barTop < screenHeight - 50) {
      bar.style.width = bar.innerText;
    }
  });
});

// ===== Debug log =====
console.log("Portfolio loaded successfully 🚀");
