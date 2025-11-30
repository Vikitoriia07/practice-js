//const min = Math.floor(Math.random() * (59 - 0) + 0);
//if (min <= 15) {
  //alert(`${min} входить в першу чверть`);
//}
  //else if (min <= 30) {
    //alert (`${min} входить в другу чверть`);
  //}
   
//console.log(min)
function getNumbers (min, max) {
  let sum = 0;
  for (let i = max; i >= min; i-=1) {
    console.log(i);
    if (i % 2 ===  0) {
     sum += i;
    }
  }
  return sum;
}
console.log (getNumbers(1, 10));

