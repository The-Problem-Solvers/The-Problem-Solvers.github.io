function result(){
    var eq = document.getElementById("equation").value;
    var a = parseFloat(document.getElementById("low").value);
    var b = parseFloat(document.getElementById("up").value);
    var c = 0.0;
    var i = 0
    var e = parseFloat(document.getElementById("error").value);
    if(f(a) < 0 && f(b) > 0)
        c = (a + b) / 2.0;
    while(Math.abs(f(c) > e)){
        let x = a.toFixed(6);
        let y = b.toFixed(6);
        let z = c.toFixed(6);
        let p = f(a).toFixed(6);
        let q = f(b).toFixed(6);
        let r = f(c).toFixed(6);
        document.getElementById("output").innerHTML += "<tr><td>" +  i + "</td><td>" + x + "</td><td>" + p + "</td><td>" + y + "</td><td>" + q + "</td><td>" + z + "</td><td>" + r + "</td><td>";
        c = (a + b) / 2.0;
        if(f(c) > 0 )
            document.getElementById("output").innerHTML += " + </td></tr>"; 
        else
        document.getElementById("output").innerHTML += " - </td></tr>"; 
        if(f(c) > 0)
            b = c;
        else
            a = c;
        i++;
    }
}

function f(eq, x){
    return (eval(eq));
}