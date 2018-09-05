let storeArray = [];
let elStoreTable = document.getElementById('Store-Table');

let elForm = document.getElementById('Store-form')

let Store = function(nameofStore,locationOfStore, typeOfCookiesSoldAtStore, minimumNumberOfCustomers,
    maximumNumberOfCustomers,averageCookiesSoldPerCustomer,openTimeForStore,closeTimeForStore){
    this.name = nameofStore
    this.location = locationOfStore
    this.type = typeOfCookiesSoldAtStore
    this.minCust = minimumNumberOfCustomers
    this.maxCust = maximumNumberOfCustomers
    this.avgCookie = averageCookiesSoldPerCustomer
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

//declared the displayTableHeader function 
function displayTableHeader(){
    //declare variable which assigns the element 'tr' as table row into HTML tag
    let elRow = document.createElement('tr'); 
    // elStoreTable variable accesses the appendchild method to pass the elRow argument
    elStoreTable.appendChild(elRow);
    // declare the elNameHeader variable and assigned the element 'th' to pass the pa
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
        store.salesPerHourArray.push(result);
        };
    let elTotalStoreTableData = document.createElement('th');
    elRow.appendChild(elTotalStoreTableData);
    elTotalStoreTableData.innerHTML = store.totalCookiesPerDay;
    
};

let sTCPHArray = [];

let total = 0;
function calcFooter(){
    for(let i = 0; i < 13; i++){
        let storeTotalCookiesPerHour = 0;
        for (let j = 0; j < storeArray.length;j++){
                storeTotalCookiesPerHour += storeArray[j].salesPerHourArray[i];
            };

        total += storeTotalCookiesPerHour;
        sTCPHArray.push(storeTotalCookiesPerHour);
        console.log(total)
    };
    
    let elTotalSalesPerHourFooter = document.createElement('th');
    elTotalSalesPerHourFooter.setAttribute('class','footer');

    let elallStoreTotalSalesPerHourFooter = document.createElement('th');
    elallStoreTotalSalesPerHourFooter.setAttribute('class','footer');

};
 console.log('sum of hour column' , sTCPHArray);

let storeName = elForm.storeName;
let cookiesPerCustomer = elForm.cookiesPerCustomer
let customerMin = elForm.customerMin
let customerMax = elForm.customerMax


function createNewStore(event){
    event.preventDefault();
    let newStore = new Store(storeName.value, '','',parseInt(customerMin.value),parseInt(customerMax.value), parseInt(cookiesPerCustomer.value) ,8,21);
    console.log(newStore);
    elStoreTable.removeChild(elStoreTable.childNodes[elStoreTable.childNodes.length - 1])
    storeArray.push(newStore);
    console.log('storeArray', storeArray);
    
    displayTotalCookiesSoldPerHour(newStore);
    let elRowFooter = document.createElement('tr');
    let elFooterTitle = document.createElement('th');
    elRowFooter.appendChild(elFooterTitle)
    elFooterTitle.innerHTML = 'Total';
     
    let sTCPHSArray = [];
    let total = 0;
    for(let i = 0; i < 13; i++){
        let storeTotalCookiesPerHour = 0;
        for (let j = 0; j < storeArray.length;j++){
            storeTotalCookiesPerHour += storeArray[j].salesPerHourArray[i];
        };
        total += storeTotalCookiesPerHour;
        sTCPHSArray.push(storeTotalCookiesPerHour);
        console.log('sum of updated hour column', sTCPHSArray)
   
    };
    console.log(total)

    elStoreTable.appendChild(elRowFooter);

    for (let i = 0; i < 13; i++){
        let elTotalSalesPerHourFooter = document.createElement('th');
        elRowFooter.appendChild(elTotalSalesPerHourFooter);
        elTotalSalesPerHourFooter.innerHTML = sTCPHSArray[i];
    };
    console.log('sTCPHSArray', sTCPHSArray);
    
    let elFinalFooterTitle = document.createElement('th')
    elRowFooter.appendChild(elFinalFooterTitle);
    elFinalFooterTitle.innerHTML = total;
    console.log('elFinalFooterTitle', total)
    

};

elForm.addEventListener('submit', createNewStore);


function populateTable(){
    displayTableHeader();
    for(let i = 0; i < storeArray.length;i++){
        displayTotalCookiesSoldPerHour(storeArray[i]);
    };
    calcFooter();

};


function populateFooter(){
    let elRowFooter = document.createElement('tr');
    elStoreTable.appendChild(elRowFooter);
    let elFooterTitle = document.createElement('th');
    elRowFooter.appendChild(elFooterTitle)
    elFooterTitle.innerHTML = 'Total';
   // let elRow = document.createElement('tr');
   // elStoreTable.appendChild(elRow);
   // let elRowFooter = document.createElement('tr')

    for (let i = 0; i <sTCPHArray.length; i++){
    let elTotalSalesPerHourFooter = document.createElement('th');
    elRowFooter.appendChild(elTotalSalesPerHourFooter);
    elTotalSalesPerHourFooter.innerHTML = sTCPHArray[i];
    console.log('sTCPHArray', sTCPHArray);
    };
   // let elFinalFooter = document.createElement('tr');
   // elStoreTable.appendChild(elFinalFooter);
   let elFinalFooterTitle = document.createElement('th')
   elRowFooter.appendChild(elFinalFooterTitle);
   elFinalFooterTitle.innerHTML = total;
};

populateTable();
populateFooter();
