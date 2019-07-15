// Given one number, find out two numbers that their sum is the given number in an Array . 
var hasNum = function ( a, target ) {   
    let result = [];
    var a = a.sort(function(a, b) {
        return a -b;
    });
    let i = 0, j = a.length - 1;   
    while (i < j) {      
      if (a[i] + a[j] > target) {
         j--;      
      }else if(a[i] + a[j] < target) {
         i++;
      } else {
        result.push(i + ':' + a[i]);
        result.push(j + ':' + a[j]);
        return result;
      }      
    }
    return 'There is no target numbers ! ';
  };
  
  console.log(hasNum([1,5,7,3,56,454,34,23], 35));