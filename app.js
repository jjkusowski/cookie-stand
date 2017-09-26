'usestrict';

//This is the hours that all stores are open
var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

//This array will hold all constructed store objects
var allStores = [];

// Gives access to the table on the DOM
var cookieTable = document.getElementById('cookies');

// Store constructor function
function Store(name, minCust, maxCust, cookCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookCust = cookCust;
  this.cookHourArray = [];
  this.calcCookHour = function() {
    return Math.ceil((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.cookCust);
  };

  this.calcCookArray = function() {
    for (var i = 0; i < hours.length; i++) {
      var temp = this.calcCookHour();
      console.log('cookies for one hour at ' + this.name + ' is :' + temp);
      this.cookHourArray.push(temp);
    }
  };
  this.calcCookArray();

  allStores.push(this);
}



// Add stores
new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);

// var pike = {
//   minCust: 23,
//   maxCust: 65,
//   cookCust: 6.3,
//   cookArray: [],
//   custHour: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookHour: function(){
//     return Math.ceil(this.custHour() * this.cookCust);
//   },
//   cookTotal: function(){
//     var cookTotal = 0;
//     for (var i = 0; i < this.cookArray.length; i++){
//       cookTotal = cookTotal + this.cookArray[i];
//     }
//   return cookTotal
//   },
//   render: function(){
//     for (var i = 0; i < hours.length; i++){
//       var liEl = document.createElement('li');
//       var tempCookie = this.cookHour();
//       liEl.textContent = hours[i] + ': ' + tempCookie + ' cookies';
//       this.cookArray.push(tempCookie);
//       var pikeUl = document.getElementById('pike');
//       pikeUl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.cookTotal() + ' cookies';
//     var pikeUl = document.getElementById('pike');
//     pikeUl.appendChild(liEl);
//   }
// }
// pike.render();
//
// var seatac = {
//   minCust: 3,
//   maxCust: 24,
//   cookCust: 1.2,
//   cookArray: [],
//   custHour: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookHour: function(){
//     return Math.ceil(this.custHour() * this.cookCust);
//   },
//   cookTotal: function(){
//     var cookTotal = 0;
//     for (var i = 0; i < this.cookArray.length; i++){
//       cookTotal = cookTotal + this.cookArray[i];
//     }
//   return cookTotal
//   },
//   render: function(){
//     for (var i = 0; i < hours.length; i++){
//       var liEl = document.createElement('li');
//       var tempCookie = this.cookHour();
//       liEl.textContent = hours[i] + ': ' + tempCookie + ' cookies';
//       this.cookArray.push(tempCookie);
//       var seatacUl = document.getElementById('seatac');
//       seatacUl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.cookTotal() + ' cookies';
//     var seatacUl = document.getElementById('seatac');
//     seatacUl.appendChild(liEl);
//   }
// }
// seatac.render();
//
// var seaCenter = {
//   minCust: 11,
//   maxCust: 38,
//   cookCust: 3.7,
//   cookArray: [],
//   custHour: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookHour: function(){
//     return Math.ceil(this.custHour() * this.cookCust);
//   },
//   cookTotal: function(){
//     var cookTotal = 0;
//     for (var i = 0; i < this.cookArray.length; i++){
//       cookTotal = cookTotal + this.cookArray[i];
//     }
//   return cookTotal
//   },
//   render: function(){
//     for (var i = 0; i < hours.length; i++){
//       var liEl = document.createElement('li');
//       var tempCookie = this.cookHour();
//       liEl.textContent = hours[i] + ': ' + tempCookie + ' cookies';
//       this.cookArray.push(tempCookie);
//       var seaCenterUl = document.getElementById('seaCenter');
//       seaCenterUl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.cookTotal() + ' cookies';
//     var seaCenterUl = document.getElementById('seaCenter');
//     seaCenterUl.appendChild(liEl);
//   }
// }
// seaCenter.render();
//
// var capHill = {
//   minCust: 20,
//   maxCust: 38,
//   cookCust: 2.3,
//   cookArray: [],
//   custHour: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookHour: function(){
//     return Math.ceil(this.custHour() * this.cookCust);
//   },
//   cookTotal: function(){
//     var cookTotal = 0;
//     for (var i = 0; i < this.cookArray.length; i++){
//       cookTotal = cookTotal + this.cookArray[i];
//     }
//   return cookTotal
//   },
//   render: function(){
//     for (var i = 0; i < hours.length; i++){
//       var liEl = document.createElement('li');
//       var tempCookie = this.cookHour();
//       liEl.textContent = hours[i] + ': ' + tempCookie + ' cookies';
//       this.cookArray.push(tempCookie);
//       var capHillUl = document.getElementById('capHill');
//       capHillUl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.cookTotal() + ' cookies';
//     var capHillUl = document.getElementById('capHill');
//     capHillUl.appendChild(liEl);
//   }
// }
// capHill.render();
//
// var alki = {
//   minCust: 2,
//   maxCust: 15,
//   cookCust: 4.6,
//   cookArray: [],
//   custHour: function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookHour: function(){
//     return Math.ceil(this.custHour() * this.cookCust);
//   },
//   cookTotal: function(){
//     var cookTotal = 0;
//     for (var i = 0; i < this.cookArray.length; i++){
//       cookTotal = cookTotal + this.cookArray[i];
//     }
//   return cookTotal
//   },
//   render: function(){
//     for (var i = 0; i < hours.length; i++){
//       var liEl = document.createElement('li');
//       var tempCookie = this.cookHour();
//       liEl.textContent = hours[i] + ': ' + tempCookie + ' cookies';
//       this.cookArray.push(tempCookie);
//       var alkiUl = document.getElementById('alki');
//       alkiUl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.cookTotal() + ' cookies';
//     var alkiUl = document.getElementById('alki');
//     alkiUl.appendChild(liEl);
//   }
// }
// alki.render();
//
// // console.log(pike.custHour());
// // console.log(pike.cookHour());
