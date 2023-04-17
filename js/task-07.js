const inputRange = document.querySelector('#font-size-control');
const textOn = document.querySelector('#text');

inputRange.addEventListener('change', valueFont => {
    textOn.style.fontSize = '${valueFont.currentTarget.value }px'
});