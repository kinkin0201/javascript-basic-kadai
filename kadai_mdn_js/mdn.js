// 今日の日付を取得
let today = new Date();

// 年、月、日を取得
let year = today.getFullYear();
let month = today.getMonth() + 1;  // 月は0から11までなので+1します
let day = today.getDate();

// 今日の日付をフォーマットして出力
console.log(year + "年" + month + "月" + day + "日" );
