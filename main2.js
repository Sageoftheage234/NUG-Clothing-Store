// Clothing Properties

//clothingTypeArray [Tops, Jeans, Trousers, Undergarments, Shirts, Dresses, Outerwear, Coats, Footwear, Headgear, Jackets]
// clothingSizeArray [XS, S, M, L, XL, XXL]
//clothingGender [Men's, Women's]
//s




// let elStore1 = document.getElementById('Store1');
// let elStore2 = document.getElementById('Store2');
// let elStore3 = document.getElementById('Store3');

let elBody = document.getElementById('body');
let elStoreTitle = document.getElementById('Store-Title');


// let elStoreTable = document.getElementById('Store-Table');
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
    this.totalCookiesPerHour = function(){
        return (Math.floor(Math.random() * (this.maxCust- this.minCust)) + this.minCust) * this.avgCookie;
    //
};
    


// let Store1 ={
//     name: 'Chocolate Droppa',
//     type: ['Mint', 'Peanut Butter', 'Macadamia Nut'],
//     location: 'Silver Spring',
//     minCust:5,
//     maxCust:100,
//     avgCookie:3,
//     openTime:9,
//     closeTime:18,
// };


// let Store2={
//     name: 'Raider\'s Rocky Raisin Rocket',
//     type: ['Oatmeal Raisin','Cinnamon Raisin', 'Granola', 'Choco-Granola' ],
//     location:'Rockville',
//     minCust:10,
//     maxCust: 150,
//     avgCookie: 10.3,
//     openTime: 8,
//     closeTime: 21,
// };

// let Store3={
//     name: 'DC Bakery',
//     type: ['Sugar', 'Chocolate Chip', 'Birthday Cake', 'Baker\'s Remix'],
//     location: 'Georgetown',
//     minCust:2,
//     maxCust: 200,
//     avgCookie:20,
//     openTime:8,
//     closeTime:15,
// };

let Store1 = new Store ('Chocolate Droppa', ['Mint','Peanut Butter', 'Macadamia Nut'], 'Silver Spring',5,100,3,8,21);
let Store2 = new Store ('Raider\'s Rocky Rocket', ['Oatmeal Raisin','Cinnamon Raisin', 'Granola', 'Choco-Granola' ],'Rockville', 10, 150,10.3, 8, 21 );
let Store3 = new Store ('DC Bakery', ['Sugar', 'Chocolate Chip', 'Birthday Cake', 'Baker\'s Remix'],'Georgetown', 2, 200,20, 8,21);
let Store4 = new Store ('Willy Cronka\'s', ['Booga Suga','Mama\'s Love','Proud Family'], 'Gaithersburg', 1, 100, 25, 8, 21);

storeArray.push(Store1,Store2,Store3,Store4);

// let displayStoreTitle = function (){
//     for (let i = 0; i < storeArray.length; i++) {
//     let elStoreTable = document.createElement('h2');
//     elStoreTable.setAttribute('class','Store-Table');
//     elBody.appendChild(elStoreTable);
//     elStoreTable.innerHTML = storeArray[i].name;
//         };
// }; 

function displayTotalCookiesSoldPerHour (store){
    let elRow = document.createElement('tr');
    elTable.appendChild(ElRow);
    for(let i = store.openTime; i < store.closeTime; i++){
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = store.totalCookiesPerHour();
    }
}


};

function populateTable(){
    for(let i = 0; i < storeArray.length;i++){
     displayTotalCookiesSoldPerHour(schoolArray[i]);
    };
};

populateTable();
