
let elStoreTable = document.getElementById('Store-Table');
let storeArray = [];
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
    this.totalCookiesPerHour = function(){
        return (Math.floor(Math.random() * (this.maxCust- this.minCust)) + this.minCust) * this.avgCookie;
          };
};

let Store1 = new Store ('Chocolate Droppa','Silver Spring', ['Mint','Peanut Butter', 'Macadamia Nut'], 5,100,3,8,21);
let Store2 = new Store ('Raider\'s Rocky Rocket', 'Rockville',['Oatmeal Raisin','Cinnamon Raisin', 'Granola', 'Choco-Granola'], 10, 150,10, 8, 21 );
let Store3 = new Store ('DC Bakery', 'Georgetown',['Sugar', 'Chocolate Chip', 'Birthday Cake', 'Baker\'s Remix'], 2, 200,20, 8,21);
let Store4 = new Store ('Willy Cronka\'s','Gaithersburg', ['Booga Suga','Mama\'s Love','Proud Family'],  1, 100, 25, 8, 21);

storeArray.push(Store1,Store2,Store3,Store4);



function displayStoreName() {
    let elRow = document.createElement('tr');
    elStoreTable.appendChild(elRow);
    
    let elNameHeader = document.createElement('th');
    elRow.appendChild(elNameHeader);
    elNameHeader.innerHTML = 'Name of Store'
    
    for(let i = store.name; i < storeArray[i].name ; i++){
            let elTableHeader = document.createElement('th');
            elRow.appendChild(elTableHeader);
            console.log('string', elNameHeader.innerHTML)
    };
};



let  displayTotalCookiesSoldPerHour= function(store){
    let elRow = document.createElement('tr');
    elStoreTable.appendChild(elRow);

    for(let i = store.openTime; i < store.closeTime; i ++){
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = store.totalCookiesPerHour();
        console.log('string', elTableData.innerHTML)
    };
};

function populateTable(){
    for(let i = 0; i < storeArray.length;i++){
        displayTotalCookiesSoldPerHour(storeArray[i]);
    
    };
};









populateTable();
displayStoreName();
