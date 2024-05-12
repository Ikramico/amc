let a = 82;
let b ='hi, we are learning js'
console.log(a);
if (a < 33) {
	console.log("fail");
} else if (a > 33 && a < 40) {
	console.log("D");
} else if (a > 40 && a < 50) {
	console.log("C");
} else if (a > 50 && a < 60) {
	console.log("B");
} else if (a > 60 && a < 70) {
	console.log("A-");
} else if (a > 70 && a < 80) {
	console.log("A");
} else if (a > 80 && a < 101) {
	console.log("A+");
}
else console.log('You are einstien');



let x = 25, y= 92, z= 63;

if(x<y && y<z){
    console.log('z is bigger and x is smaller');
}
else if(y<x && x<z){
    console.log("z is bigger and y is smaller");
}
else if(z<y && y<x){
    console.log("x is bigger and z is smaller");
}
else if(z<x && x<y){
    console.log("y is bigger and z is smaller");
}
else if(y<z && z<x){
    console.log("x is bigger and y is smaller");
}
else if(x<z && z<y){
    console.log("y is bigger and x is smaller");
}
else console.log("all are equal");



let m =68, n =49, p = 340;
if(m<n){
    if(n<p){
        console.log('m is smaller and p is bigger');
    }
    else console.log("n is bigger and m is smaller");
}
else if(m<p){
    if(p<n){
        console.log("n is bigger and m is smaller");
    }
    else console.log("p is bigger and m is smaller");
}
else{
    if(n<p){
        console.log("m is bigger and n is smaller");
    }
    else console.log("m is bigger and p is smaller");
}