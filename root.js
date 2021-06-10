function calFunction(result) {
    form.displayResult.value = form.displayResult.value + result;
}
function rootFunction(result) {
  var  x = form.displayResult.value ;
  var a = (x * x);
  var res = a ;
  form.displayResult.value = res;
   }
  function sqrFunction(result) {
    var  x = form.displayResult.value ;
    var a = Math.sqrt(x);
    var res = a ;
form.displayResult.value = res;           }