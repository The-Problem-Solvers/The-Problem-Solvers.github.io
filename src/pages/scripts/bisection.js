function result(){
    var eq = document.getElementById("equation").value;
    var left = parseFloat(document.getElementById("low").value);
    var right = parseFloat(document.getElementById("up").value);
    var tolerance = parseFloat(document.getElementById("tolerance").value);
    var mid = (left + right)/2.0;
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

function f(eq, x){
    return (eval(eq));
}