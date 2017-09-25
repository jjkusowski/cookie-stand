'usestrict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var pike = {
  minCust: 23,
  maxCust: 65,
  cookCust: 6.3,
  cookTotal: 0,
  custHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookHour: function(){
    this.cookTotal+= Math.ceil(this.custHour() * this.cookCust);
    return Math.ceil(this.custHour() * this.cookCust);
  },
  render: function(){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookHour() + ' cookies';
      var pikeUl = document.getElementById('pike');
      pikeUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookTotal + ' cookies';
    var pikeUl = document.getElementById('pike');
    pikeUl.appendChild(liEl);
  }
}
pike.render();

var seatac = {
  minCust: 3,
  maxCust: 24,
  cookCust: 1.2,
  cookTotal: 0,
  custHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookHour: function() {
    this.cookTotal+= Math.ceil(this.custHour() * this.cookCust);
    return Math.ceil(this.custHour() * this.cookCust);
  },
  render: function() {
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookHour() + ' cookies';
      var seatacUl = document.getElementById('seatac');
      seatacUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.cookTotal + ' cookies';
    var seatacUl = document.getElementById('seatac');
    seatacUl.appendChild(liEl);
  }
}
seatac.render();

// console.log(pike.custHour());
// console.log(pike.cookHour());
