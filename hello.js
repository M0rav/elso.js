
console.log("Hello World!");

let a = 5; // szám
let s = "szöveg";//string
let b = true;// bool
let u = undefined; 
let t = [1,5,"hello"]; // array
let o = {
    eletkor: 42,
    nev: "jack",
};
console.log(b);
console.log(t[1]);
console.log(o.nev);
console.log("-------------");
console.log(typeof a);
console.log(typeof s);
console.log(typeof b);
console.log(typeof u);
console.log(typeof t);
console.log(typeof o);
console.log(typeof console);


console.log(5/0);
console.log(5/3);

if(a>4)
{
console.log("HelloH World")
}
else if (a<0)
{
    //....
}
else 
{
    //....

}
while(a==s)
{
    console.log("while")
}
do{
    //....
}
while(a==s);

for(let i=0; i<10;i++)
{
    console.log(i);
}

for(let elem of t)
{
    console.log(elem);
}

function negyzet(szam){
    //if (typeof szam=="number")
    return szam*szam;
}
console.log(negyzet(4));

//egyenlo e szam 
if(1=="1"){
    console.log("egyenlo");
}
else{
    console.log("nem egyenlo");
}

//figyelembe veszi a tipúst
if(1==="1"){ //a !==b
    console.log("egyenlo");
}
else{
    console.log("nem egyenlo");
}
console.log("12"< 2);
console.log(Math.round("468.231"));

//parseFloat()
//parseInt()

console.log(1+"1");
console.log(1+1);

//alert("ALERT");
console.log(window)//document