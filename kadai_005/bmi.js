// 体重と身長を定義
const weight = 68;  // 体重 (kg)
const height = 1.7; // 身長 (m)

// BMIの計算式
const bmi = weight / (height * height);

// 結果をコンソールに出力
console.log("体重: " + weight + "kg");
console.log("身長: " + height + "m");
console.log("BMI: " + bmi.toFixed(1));
