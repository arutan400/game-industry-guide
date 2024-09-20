document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".content-section");

  function checkVisibility() {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // 初回チェック
});
