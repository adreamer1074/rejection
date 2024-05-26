let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let imageContainer = document.getElementById('imageContainer');
let clickCount = 0;
let hoverCount = 0;

// 初期位置の設定
const centerLeft = (window.innerWidth - yesButton.offsetWidth - noButton.offsetWidth) / 2;
const centerTop = (window.innerHeight - yesButton.offsetHeight) / 2;
yesButton.style.position = 'absolute';
yesButton.style.left = `${centerLeft}px`;
yesButton.style.top = `${centerTop}px`;

noButton.style.position = 'absolute';
noButton.style.left = `${centerLeft + yesButton.offsetWidth}px`;
noButton.style.top = `${centerTop}px`;

noButton.addEventListener('click', () => {
    clickCount++;
    if (clickCount <= 3) {
        showImage(clickCount);
        moveButtonRandomly(noButton);
    } else if (clickCount === 4) {
        moveButtonRandomly(noButton);
        noButton.addEventListener('mouseover', handleMouseOver);
    }
});

yesButton.addEventListener('click', () => {
    window.location.href = 'yes.html';
});

function showImage(count) {
    const img = document.createElement('img');
    img.src = `image${count}.jpeg`;  // 画像ファイルはindex.htmlと同じディレクトリにあると仮定
    img.alt = `Image ${count}`;
    img.style.width = '300px'; // 仮のサイズ
    img.style.height = '300px'; // 仮のサイズ
    img.style.margin = '30px'; // 仮のサイズ
    imageContainer.appendChild(img);
}

function moveButtonRandomly(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function handleMouseOver(event) {
    hoverCount++;
    if (hoverCount <= 3) {
        moveButtonRandomly(noButton);
    } else {
        noButton.style.display = 'none';
    }
}
