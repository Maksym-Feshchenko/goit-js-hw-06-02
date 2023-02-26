const fontSizeEL = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

fontSizeEL.addEventListener("input", () => {
textEl.style.fontSize = `${fontSizeEL.value}px`; 
})
