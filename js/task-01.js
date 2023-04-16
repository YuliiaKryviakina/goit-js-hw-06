"use strict"
const numberCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberCategories.length}`);

numberCategories.forEach(item => {
    const title = item.firstElementChild.textContent;
    const totalElem = item.lastElementChild.childElementCount;

    console.log(`Category: ${title}
Elements: ${totalElem}`);
});



