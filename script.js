// セクションがスクロール時に表示されるアニメーション
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
// ページ内リンクをスムーズにスクロール
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// ボックスをクリックしたときに対応するページを開く（現在のタブ）
document.querySelectorAll(".content-section").forEach((section) => {
  section.addEventListener("click", function () {
    // 各セクションに対応するページに移動
    if (section.id === "social-role") {
      window.location.href = "social-role.html"; // 現在のタブで開く
    } else if (section.id === "fears") {
      window.location.href = "fears.html";
    } else if (section.id === "career") {
      window.location.href = "career.html";
    } else if (section.id === "future") {
      window.location.href = "future.html";
    }
  });
});

メモを書く;
