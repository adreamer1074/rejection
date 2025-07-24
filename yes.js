let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let clickCount = 0;
let repeatCount = 0;

// ボタンのスタイルを設定
yesButton.style.borderRadius = '10px';
yesButton.style.padding = '10px 30px';
yesButton.style.fontSize = '16px';
yesButton.style.cursor = 'pointer';
yesButton.style.outline = 'none';
yesButton.style.border = 'none';
yesButton.style.backgroundColor = '#4CAF50';
yesButton.style.color = 'white';
yesButton.style.transition = 'background-color 0.3s';
yesButton.style.position = 'fixed';
yesButton.style.left = '50%';
yesButton.style.top = '50%';
yesButton.style.transform = 'translate(-50%, -50%)';

noButton.style.borderRadius = '10px';
noButton.style.padding = '10px 30px';
noButton.style.margin = '0px 0px 0px 30px';

noButton.style.fontSize = '16px';
noButton.style.cursor = 'pointer';
noButton.style.outline = 'none';
noButton.style.border = 'none';
noButton.style.transform = 'translate(-50%, -50%)';

noButton.style.backgroundColor = '#f44336';
noButton.style.color = 'white';
noButton.style.transition = 'background-color 0.3s';

// 画面の中央にYESボタンを設定
yesButton.style.position = 'absolute';
yesButton.style.left = `${(window.innerWidth - yesButton.offsetWidth - noButton.offsetWidth) / 2}px`;
yesButton.style.top = `${(window.innerHeight - yesButton.offsetHeight) / 2}px`;

// 画面の中央にNOボタンを設定
noButton.style.position = 'absolute';
noButton.style.left = `${(window.innerWidth - yesButton.offsetWidth - noButton.offsetWidth) / 2 + yesButton.offsetWidth}px`;
noButton.style.top = `${(window.innerHeight - noButton.offsetHeight) / 2}px`;

noButton.addEventListener('click', () => {
    if (repeatCount < 10) {
        increaseYesButtonSize();
        addNoButtons();
        moveButtonRandomly(noButton); // 最初のNOボタンをランダムな位置に移動
        repeatCount++;
    } else {
        noButton.style.display = 'none';
    }
});

yesButton.addEventListener('click', () => {
    window.location.href = 'true_yes.html';
});

function increaseYesButtonSize() {
    let currentWidth = parseInt(window.getComputedStyle(yesButton).getPropertyValue('width'));
    let currentHeight = parseInt(window.getComputedStyle(yesButton).getPropertyValue('height'));
    let newWidth = currentWidth * 1.3;
    let newHeight = currentHeight * 1.3;
    let newFontWidth = currentWidth * 1.1;
    let newFontHeight = currentHeight * 1.1;
    yesButton.style.width = `${newWidth}px`;
    yesButton.style.height = `${newHeight}px`;
    yesButton.style.fontSize = `${newFontWidth}px`;
    yesButton.style.fontSize = `${newFontHeight}px`;
}

function addNoButtons() {
    let existingNoButtons = document.querySelectorAll('.noButton');
    for (let button of existingNoButtons) {
        moveButtonRandomly(button);
    }
    let newNoButton = noButton.cloneNode(true);
    document.body.appendChild(newNoButton);
    moveButtonRandomly(newNoButton);
    newNoButton.addEventListener('click', () => {
        if (repeatCount < 10) {
            moveButtonRandomly(newNoButton);
            increaseYesButtonSize();
            addNoButtons();
            repeatCount++;
        } else {
            newNoButton.style.display = 'none';
        }
    });
}

function moveButtonRandomly(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
