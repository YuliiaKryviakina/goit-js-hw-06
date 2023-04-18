const inputRange = document.querySelector('#font-size-control');
const textOn = document.querySelector('#text');

inputRange.addEventListener('input', e => {
    textOn.style.fontSize = `${e.target.value }px`
});
