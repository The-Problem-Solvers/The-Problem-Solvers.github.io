function f(eq, x){
  return (eval(eq));
}

function result(){
    var eq = document.getElementById("equation").value;
    var left = parseFloat(document.getElementById("low").value);
    var right = parseFloat(document.getElementById("up").value);
    var tolerance = parseFloat(document.getElementById("tolerance").value);
    var mid = (left + right)/2.0;
    if(isNaN(left) || isNaN(right) || isNaN(tolerance)){
      document.getElementById("output").innerHTML = "You have invalid parameters!";
    }
    if(f(eq, left) < 0 && f(eq, right) > 0){
      while (Math.abs(f(eq, mid)) > tolerance) {
          var mid = (left + right) / 2;
          if (f(eq, left) * f(eq, mid) > 0) {
            left = mid;
          } else {
            right = mid;
          }
      }
      var root = ((left + right) / 2.0);
      document.getElementById("output").innerHTML = "The root of " + eq +" is: " + root.toFixed(4);
    }
    else{
      document.getElementById("The entered estimations doesn't brackett the root!!");
    }
}

function result2(){
  var eq = document.getElementById("equation").value;
  var left = parseFloat(document.getElementById("low").value);
  var right = parseFloat(document.getElementById("up").value);
  var tolerance = parseFloat(document.getElementById("tolerance").value);
  var mid = (left + right)/2.0;
  var i = 0;
  if(isNaN(left) || isNaN(right) || isNaN(tolerance)){
    document.getElementById("output").innerHTML = "You have invalid parameters!";
  }
  document.getElementById("tables").innerHTML ="<tr><td>Interations</td><td>a</td><td>f(a)</td><td>b</td><td>f(b)</td><td>c</td><td>f(c)</td></tr>";
  if(f(eq, left) < 0 && f(eq, right) > 0){
    while (Math.abs(f(eq, mid)) > tolerance) {
        var mid = (left + right) / 2;
        if (f(eq, left) * f(eq, mid) > 0) {
          left = mid;
        } else {
          right = mid;
        }
        document.getElementById("tables").innerHTML += "<tr><td>" + i + "</td><td>" + left.toFixed(4) + "</td><td>" + f(eq, left).toFixed(4) + "</td><td>" + right.toFixed(4) + "</td><td>" + f(eq, right).toFixed(4) + "</td><td>" + mid.toFixed(4) + "</td><td>" + f(eq, mid).toFixed(4) + "</td></tr>";
        i++;
    }
    var root = ((left + right) / 2.0);
    document.getElementById("output").innerHTML = "The root of " + eq +" is: " + root.toFixed(4);
  }
  else{
    document.getElementById("The entered estimations doesn't brackett the root!!");
  }
  
}