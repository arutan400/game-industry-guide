// 詳細コンテンツを表示する関数
function showContent(contentId) {
  // すべての詳細セクションを非表示にする
  const allDetails = document.querySelectorAll(".detail-content");
  allDetails.forEach((detail) => (detail.style.display = "none"));

  // 指定した詳細コンテンツを表示
  document.getElementById(contentId).style.display = "block";

  // スクロールして詳細コンテンツに移動
  document.getElementById(contentId).scrollIntoView({ behavior: "smooth" });
}

// 詳細コンテンツを非表示にする関数
function hideContent() {
  // すべての詳細セクションを非表示にする
  const allDetails = document.querySelectorAll(".detail-content");
  allDetails.forEach((detail) => (detail.style.display = "none"));
}
