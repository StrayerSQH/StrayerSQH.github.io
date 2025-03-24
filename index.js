const text = "Hello there! I'm StrayerSQH!";
let index = 0;
const textElement = document.getElementById('text');

function displayText() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(displayText, 50); // 每100毫秒显示一个字符
    }
}

displayText();
