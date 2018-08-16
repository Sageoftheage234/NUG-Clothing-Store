// Clothing Properties

//clothingTypeArray [Tops, Jeans, Trousers, Undergarments, Shirts, Dresses, Outerwear, Coats, Footwear, Headgear, Jackets]
// clothingSizeArray [XS, S, M, L, XL, XXL]
//clothingGender [Men's, Women's]
//s




let elStore1 = document.getElementById('Store1');
let elStore2 = document.getElementById('Store2');
let elStore3 = document.getElementById('Store3');


let elBody = document.getElementById('body');
let elStoreTitle = document.getElementById('Store-Title')


let Store1 ={
    name: 'Chocolate Droppa',
    type: ['Mint', 'Peanut Butter', 'Macadamia Nut'],
    location: 'Silver Spring',
    minCust:5,
    maxCust:100,
    avgCookie:3,
    openTime:0900,
    closeTime:1800,
};

let Store2={
    name: 'Raider\'s Rocky Raisin Rocket',
    type: ['Oatmeal Raisin','Cinnamon Raisin', 'Granola', 'Choco-Granola' ],
    location:'Rockville',
    minCust:10,
    maxCust: 150,
    avgCookie: 10.3,
    openTime: 0800,
    closeTime: 2100,
};

let Store3={
    name: 'DC Bakery',
    type: ['Sugar', 'Chocolate Chip', 'Birthday Cake', 'Baker\'s Remix'],
    location: 'Georgetown',
    minCust:2,
    maxCust: 200,
    avgCookie:20,
    openTime:0800,
    closeTime:1500,
};
let storeArray = [Store1,Store2,Store3];

function displayStoreTitle() {
    for (let i = 0; i < storeArray.length; i++) {
    let elStoreTitle = document.createElement('h2');
    elStoreTitle.setAttribute('class','Store-title');
    elBody.appendChild(elStoreTitle);
    elStoreTitle.innerHTML = storeArray[i].name;
        };
}; 


displayStoreTitle();