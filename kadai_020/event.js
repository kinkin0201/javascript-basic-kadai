// ボタンとテキストの要素を取得
const button = document.getElementById("btn");
const text = document.getElementById("text");

// ボタンクリック時に文章を書き換える設定
button.addEventListener("click", () => {
  text.textContent = "ボタンがクリックされました！";
});
