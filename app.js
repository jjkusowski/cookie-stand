'usestrict';

//This is the hours that all stores are open
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

//This array will hold all constructed store objects
var allStores = [];

// Gives access to the DOM
var cookieTable = document.getElementById('cookies');
var newStoreForm = document.getElementById("new-store");

// Store constructor function
function Store(name, minCust, maxCust, cookCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookCust = cookCust;
  this.cookHourArray = [];
  this.totalCook = 0;
  this.calcCookArray();
  // this.render();

  allStores.push(this);
}

// calculate number of cookies for an hour via product of random number between the min and max customer rate and cookies per customer
Store.prototype.calcCookHour = function() {
  return Math.ceil((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.cookCust);
}

Store.prototype.calcCookArray = function() {
  for (var i = 0; i < hours.length; i++) {
    var temp = this.calcCookHour();
    this.cookHourArray.push(temp);
    this.totalCook += temp;
  }
}

// Render prototype for Store objects
Store.prototype.render = function() {
  // create tr
  var trEl = document.createElement('tr');
  // create td
  var tdEl = document.createElement('td');
  // add store name data to td
  tdEl.textContent = this.name;
  // add store name td to tr
  trEl.appendChild(tdEl);
  // loop to create, add, and append hourly cookies to tr
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookHourArray[i];
    trEl.appendChild(tdEl);
  };
  // add total cookies for the store
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCook;
  trEl.appendChild(tdEl);
  // add tr to table
  cookieTable.appendChild(trEl);
}
//Add cookies per hour for all stores
function hourStoreTotal() {
  var grandTotal = 0;
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    var hourTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      hourTotal = hourTotal + allStores[j].cookHourArray[i];
    }
    grandTotal += hourTotal;
    var tdEl = document.createElement('td');
    tdEl.textContent = hourTotal;
    trEl.appendChild(tdEl);
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);
  cookieTable.appendChild(trEl);
}
// adds header rows to table
function makeHeaderRow() {
  // create tr
  var trEl = document.createElement('tr');
  // create th
  var thEl = document.createElement('th');
  // add space to td
  thEl.textContent = ' ';
  // add space th to tr
  trEl.appendChild(thEl);
  // loop to create, add, and append hours to tr
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
}
// Function to render all
function renderAll() {
  makeHeaderRow();
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
  hourStoreTotal();
}

// Event handler for store submission
function handleStoreSubmit(event){
  event.preventDefault();
  if (!event.target.which.value || !event.target.min.value || !event.target.max.value || !event.target.rate.value) {
    return alert('Fields cannot be empty!');
    console.log(event.target.which.value);
  }
  var newStore = event.target.which.value;
  var newMin = parseInt(event.target.min.value);
  var newMax = parseInt(event.target.max.value);
  var newRate = parseInt(event.target.rate.value);

  cookieTable.innerHTML = '';
  // makeHeaderRow();
  // new Store('1st and Pike', 23, 65, 6.3);
  // new Store('Seatac Airport', 3, 24, 1.2);
  // new Store('Seattle Center', 11, 38, 3.7);
  // new Store('Capitol Hill', 20, 38, 2.3);
  // new Store('Alki', 2, 16, 4.6);
  new Store(newStore, newMin, newMax, newRate);
  // hourStoreTotal();
  renderAll();

}

// Event listener for Submit button
newStoreForm.addEventListener('submit', handleStoreSubmit);


// makeHeaderRow();
// Add stores
new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

// hourStoreTotal();
renderAll();
