// ボタンとテキストの要素を取得
const button = document.getElementById("btn");
const text = document.getElementById("text");

// ボタンクリック時に2秒後に文章を書き換える
button.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました！";
  }, 2000); // 2000ミリ秒後に実行
});
