//=====|| Function Expression 
// var myFun1 = function show(){
//     document.write("Cyber Firebug");
// };


//=====|| Anonymous Function 
// var myFun2 = function(){
//     document.write("Cyber Firebug");
// }


//=====|| Arrow Function 
// var myFun = () => {
//     document.write("Cyber Firebug");
// }
// myFun(); 


//=====|| Arrow Function With Single Parameter
// var myFun = (a) => {
//     document.write(a);
// }
// myFun(10);

// var myFun = a => {
//     document.write(a);
// }
// myFun(10);


//=====|| Arrow Function With Multi Parameter
// var myFun = (a,b) =>{
//     document.write(a+b);
// }
// myFun(10,20);



//=====|| Arrow Function With Default Parameter
// var myFun = (a,b=5) =>{
//     document.write(a+" " +b);
// }
// myFun(10);


//=====|| Arrow Function With Rest Peremeter
// var myFun = (a, ...args) => {
//     document.write(a + " " + args);
// }
// myFun(10,"Santo",420);


//=====|| Arrow Function without carlibrases
// var myFun = (a) => document.write(a);
// myFun(10);


//=====|| Arrow Function Short Form
// var calculate = inputValue => inputValue;
// document.write(calculate(100));

// function sum(a,b){
//     return a+b;
// }
// document.write(sum(10,2));


//Using Arrow Functions
var sum = (a,b)=>a+b;
document.write(sum(2,3));