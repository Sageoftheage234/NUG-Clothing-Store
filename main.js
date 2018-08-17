// Clothing Properties

//clothingTypeArray [Tops, Jeans, Trousers, Undergarments, Shirts, Dresses, Outerwear, Coats, Footwear, Headgear, Jackets]
// clothingSizeArray [XS, S, M, L, XL, XXL]
//clothingGender [Men's, Women's]
//s




let elStore1 = document.getElementById('Store1');
let elStore2 = document.getElementById('Store2');
let elStore3 = document.getElementById('Store3');


let elBody = document.getElementById('body');
let elStoreTitle = document.getElementById('Store-Title');
let storeArray = [];
let Store = function(nameofStore,locationOfStore, typeOfCookiesSoldAtStore, minimumNumberOfCustomers,
    maximumNumberOfCustomers,averageCookiesSoldPerDay,openTimeForStore,closeTimeForStore){
    this.name = nameofStore
    this.location = locationOfStore
    this.type = typeOfCookiesSoldAtStore
    this.minCust = minimumNumberOfCustomers
    this.maxCust = maximumNumberOfCustomers
    this.avgCookie = averageCookiesSoldPerDay
    this.openTime = openTimeForStore
    this.closeTime = closeTimeForStore
};
    


let Store1 ={
    name: 'Chocolate Droppa',
    type: ['Mint', 'Peanut Butter', 'Macadamia Nut'],
    location: 'Silver Spring',
    minCust:5,
    maxCust:100,
    avgCookie:3,
    openTime:9,
    closeTime:18,
};


let Store2={
    name: 'Raider\'s Rocky Raisin Rocket',
    type: ['Oatmeal Raisin','Cinnamon Raisin', 'Granola', 'Choco-Granola' ],
    location:'Rockville',
    minCust:10,
    maxCust: 150,
    avgCookie: 10.3,
    openTime: 8,
    closeTime: 21,
};

let Store3={
    name: 'DC Bakery',
    type: ['Sugar', 'Chocolate Chip', 'Birthday Cake', 'Baker\'s Remix'],
    location: 'Georgetown',
    minCust:2,
    maxCust: 200,
    avgCookie:20,
    openTime:8,
    closeTime:15,
};

let Store4 = new Store ('Willy Cronka\'s', 'Booga Suga', 'Gaithersburg', 1, 100, 25, 10, 21)

storeArray.push(Store1,Store2,Store3,Store4);

function displayStoreTitle() {
    for (let i = 0; i < storeArray.length; i++) {
    let elStoreTitle = document.createElement('h2');
    elStoreTitle.setAttribute('class','Store-title');
    elBody.appendChild(elStoreTitle);
    elStoreTitle.innerHTML = storeArray[i].name;
        };
}; 









displayStoreTitle();