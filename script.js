// セクションがスクロール時に表示されるアニメーション
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".content-section");

  // セクションがビューポートに入ると可視化する関数
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
const anchorLinks = document.querySelectorAll('a[href^="#"]');
if (anchorLinks.length > 0) {
  anchorLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
}

// ボックスをクリックしたときに対応するページを開く（現在のタブ）
document.querySelectorAll(".content-section").forEach((section) => {
  section.addEventListener("click", function () {
    // 各セクションに対応するページに移動
    switch (section.id) {
      case "social-role":
        window.location.href = "social-role.html";
        break;
      case "fears":
        window.location.href = "fears.html";
        break;
      case "career":
        window.location.href = "career.html";
        break;
      case "future":
        window.location.href = "future.html";
        break;
      default:
        console.error("該当するセクションIDが見つかりません。");
    }
  });
});
