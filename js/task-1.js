const categoriesEl = document.querySelector("#categories");
const eachEl = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${eachEl.length}`);

eachEl.forEach(category => {
    const titleEl = category.querySelector("h2");
    const titleText = titleEl.textContent;
    const items = category.querySelectorAll("ul > li");
    const count = items.length;

    
console.log(`Category: ${titleText}`);
console.log(`Elements: ${count}`);
});




