const catList = document.querySelector('#categories');

const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const catTitle = item.querySelector('h2').textContent;
    console.log(`Categorie: ${catTitle}`);

    const catCount = item.querySelectorAll('ul li').length;
    console.log(`Elements: ${catCount}`);
})