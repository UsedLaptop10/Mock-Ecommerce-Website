const result = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchButton');
const test = document.getElementById('testPara');

let listOfItems = [
    { itemName: 'socks', price: 10 },
    { itemName: 'bed', price: 100 },
    { itemName: 'pillow', price: 30 },
    { itemName: 'pants', price: 20 },
    { itemName: 'shirt', price: 15 },
];

searchBtn.addEventListener('click', () => {
    test.innerHTML = result.value;
});

console.log(listOfItems);
console.log(result);
