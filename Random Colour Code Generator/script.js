function generateColor() {
    const randomColorCode = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const colorContainer = document.getElementById("color-container");
    const colorBox = document.getElementById("color-box");
    const colorCodeElement = document.getElementById("color-code");

    colorCodeElement.textContent = randomColorCode;
    colorBox.style.backgroundColor = randomColorCode;

    colorContainer.onclick = function () {
        copyToClipboard(randomColorCode);
    };
}

function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert("Color code copied to clipboard!");
}

generateColor();