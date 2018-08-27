let storeArray = [];
let elStoreTable = document.getElementById('Store-Table');

let elForm = document.getElementById('Store-form')

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
    this.totalCookiesPerDay = 0
    this.salesPerHourArray = []
    this.totalCookiesPerHour = function(){
        return (Math.floor(Math.random() * (this.maxCust- this.minCust)) + this.minCust) * this.avgCookie;
     };
};

let Store1 = new Store ('Chocolate Droppa','Silver Spring', ['Mint','Peanut Butter', 'Macadamia Nut'], 5,100,30,8,21);
let Store2 = new Store ('Raider\'s Rocky Rocket', 'Rockville',['Oatmeal Raisin','Cinnamon Raisin', 'Granola', 'Choco-Granola'], 10, 150,10, 8, 21 );
let Store3 = new Store ('DC Bakery', 'Georgetown',['Sugar', 'Chocolate Chip', 'Birthday Cake', 'Baker\'s Remix'], 2, 200,20, 8,21);
let Store4 = new Store ('Willy Cronka\'s','Gaithersburg', ['Booga Suga','Mama\'s Love','Proud Family'],  1, 100, 25, 8, 21);


storeArray.push(Store1,Store2,Store3,Store4);


function displayTableHeader(){
    let elRow = document.createElement('tr');
    elStoreTable.appendChild(elRow);
    let elNameHeader = document.createElement('th');
    elRow.appendChild(elNameHeader);
    elNameHeader.innerHTML = 'Name of Store';

    for (let i = 8; i < 21; i++){
        let elTableHeader = document.createElement('th')
        elRow.appendChild(elTableHeader);
        elTableHeader.innerHTML = i +':00 Hours';

    };

    let elTotalHeader = document.createElement('th');
    elRow.appendChild(elTotalHeader);
    elTotalHeader.innerHTML ='Total';
};


let  displayTotalCookiesSoldPerHour= function(store){
    let elRow = document.createElement('tr');
    elStoreTable.appendChild(elRow);
    elRowHeader = document.createElement('th');
    elRow.appendChild(elRowHeader);
    elRowHeader.innerHTML = store.name;

    for(let i = store.openTime; i < store.closeTime; i ++){
        let result = store.totalCookiesPerHour();
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = result;
        store.totalCookiesPerDay += result;    
       // elTableData.innerHTML = store.totalCookiesPerHour();
        };
    let elTotalStoreTableData = document.createElement('th');
    elRow.appendChild(elTotalStoreTableData);
    elTotalStoreTableData.innerHTML = store.totalCookiesPerDay;
    
};

function displayFooter(){

    
}





let storeName = elForm.storeName;
//let CookiesPerFlavor = elForm. //



function createNewStore(event){
    event.preventDefault();
    let newStore = new Store(storeName.value, 10, 50,30,8,21)
    console.log(newStore);
    displayTotalCookiesSoldPerHour(newStore);
};

elForm.addEventListener('submit', createNewStore);


function populateTable(){
    displayTableHeader();
    for(let i = 0; i < storeArray.length;i++){
        displayTotalCookiesSoldPerHour(storeArray[i]);
    
    };
};

populateTable();


