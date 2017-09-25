'usestrict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

var pike = {
  minCust: 23,
  maxCust: 65,
  cookCust: 6.3,
  custHour: function() {
    return Math.floor(Math.random() * (65 - 23 + 1) + 23);
  },
  cookHour: function(){
    return this.custHour() * this.cookCust;
  }
}
console.log(pike.custHour());
console.log(pike.cookHour());
