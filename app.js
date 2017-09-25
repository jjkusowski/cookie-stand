'usestrict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var pike = {
  minCust: 23,
  maxCust: 65,
  cookCust: 6.3,
  cookArray: [],
  custHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookHour: function(){
    return Math.ceil(this.custHour() * this.cookCust);
  },
  cookTotal: function(){
    var cookTotal = 0;
    for (var i = 0; i < this.cookArray.length; i++){
      cookTotal = cookTotal + this.cookArray[i];
      console.log('cookTotal ' + i + ' ' + cookTotal);
    }
  return cookTotal
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      var tempCookie = this.cookHour();
      console.log(hours[i] + tempCookie);
      liEl.textContent = hours[i] + ': ' + tempCookie + ' cookies';
      this.cookArray.push(tempCookie);
      var pikeUl = document.getElementById('pike');
      pikeUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookTotal() + ' cookies';
    var pikeUl = document.getElementById('pike');
    pikeUl.appendChild(liEl);
  }
}
pike.render();

var seatac = {
  minCust: 3,
  maxCust: 24,
  cookCust: 1.2,
  cookArray: [],
  custHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookHour: function(){
    return Math.ceil(this.custHour() * this.cookCust);
  },
  cookTotal: function(){
    var cookTotal = 0;
    for (var i = 0; i < this.cookArray.length; i++){
      cookTotal = cookTotal + this.cookArray[i];
      console.log('cookTotal ' + i + ' ' + cookTotal);
    }
  return cookTotal
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      var tempCookie = this.cookHour();
      console.log(hours[i] + tempCookie);
      liEl.textContent = hours[i] + ': ' + tempCookie + ' cookies';
      this.cookArray.push(tempCookie);
      var seatacUl = document.getElementById('seatac');
      seatacUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookTotal() + ' cookies';
    var seatacUl = document.getElementById('seatac');
    seatacUl.appendChild(liEl);
  }
}
seatac.render();

// console.log(pike.custHour());
// console.log(pike.cookHour());
