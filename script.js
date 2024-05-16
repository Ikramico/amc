/*let a = 82;
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


let num = 52;
switch(true){
    case (num < 33): 
    console.log("fail");
    break;
    case (a > 33 && a < 40):
        console.log("D");

    default: console.log('You are einstien');
}

for(let i =1 ; i<11; i++){
    console.log(
        `31 x ${i} = ${31*i}`
    )
}

let mu = 0;
while(mu<11){
    
    console.log(`56 x ${mu} = ${56 * mu}`);
    mu++;
}
do{
    console.log(`43 x ${mu} = ${43 * mu}`);
    mu++;
}while(mu< 11);



function oddEven(g){
    if(g%2==0){
        console.log(`${g} is even`);
    }
    else  console.log(`${g} is odd`);
}

let jorBijor = (g) =>
	g % 2 == 0 ? console.log(`${g} is jor`) : console.log(`${g} is bijor`);


oddEven(63);
jorBijor(92);

let suru = 0
 jor=(u)=>{
    if(u%2==0){ while(suru<u){
            console.log(suru);
            suru += 2;
        }}
        
    
    else console.log('Bijor');
}

jor(16);*/
/* let x = 25, y= 92, z= 63;*/

/**String */

// let str1 ='   Hello!';
// let str2 = 'How are you?   ';
// let totalStr = str1.concat(' ',str2);
//console.log(totalStr.toLowerCase().indexOf('how'));

//console.log(totalStr.match('you'));
//console.log(totalStr.replace('are you', 'am I'));
//console.log(totalStr.toLowerCase().replaceAll('h','L'));
//console.log(totalStr.slice(6, 14));
// console.log(totalStr.split(' '));
//let words = totalStr.trim().split(" ");
//console.log(words.length);

//let num1 = 10;
//let num2 = parseInt('10');

//console.log(num1+num2);
/*
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
}*/

/**Array */

let arr = [['Moni', ['Joni']], 'Tonmoy', 'Royal'];


// console.log(arr.filter((word)=>word.length<4))
//console.log(arr.map((word)=>word + ' Mia'))
// console.log(arr.some((word)=>word.length>9))
// console.log(arr.every((word)=>word.length>3))
//arr.flat(Infinity).forEach((item)=> console.log(item))
//console.log(arr.copyWithin(1,2,3));
//console.log(arr.fill('Mahfuz',0));
// arr.push('Mahfuz', 'Nam jani na');

// arr.unshift('Omimoy');
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);

let arr1 =arr.flat()
console.log(arr1);