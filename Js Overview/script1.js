/* variable Declaration */

//Ex1
var x = 10;
var x = 20;

console.log("var x = " + x);
console.log("re-Declaration of var x = " + x);      

//output : 20 20

//Ex2
var y = 1;
if(y!=0)
{
    var z = 100;
}

console.log("outside if scode var z = " + z );
//100

//Ex3
for(var i=1;i<=2;i++)
{
    var g = 200;
}

console.log("outside for loop scope, var g = " + g);

//output = 200