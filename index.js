document.write("Hello JavaScript"); /* write html in js */
console.log("Hello"); /* console */

/* objects */

var students = {
    name: "",
    age : "",
    gender: "",
    country : "",
    language : "[]",
}

/* creating objects with constructor */

function Students(name,age,gender,country,language) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.country = country;
    this.language = language;
}

students = new Students();
students.name = "John Smith";
students.age = 23;
students.gender = "male";
students.country = "United States";
students.language = "[English, Spanish, Latin]";

console.log(students);
document.write(" "+students.language);


/* ternery operator */

/* if(students.name == "John Smith") {
    console.log("John Smith");
}
else{
    console.log("Error");
}
 */
var ternary = students.name == "John Smith" ? "John Smith" : "Error!";
console.log(ternary);


/* Dom */

/* getElementsByTagName , getElementByClassName */
var head2 = document.getElementById("head2"); 
head2.innerHTML = "Hello People"; /* innerText */

/* QuerySelector */
/* for class (".className"); id("#idName"); tag("tagname"); */
var paragraph = document.querySelector("#Paragraph");
paragraph.innerText = "Changed Paragraph";

/* querySelectorAll */

var query = document.querySelectorAll("p")[1];
query.innerHTML = "Select all query";

/* Button Onclick */

function button(){
    alert("Hello");
}

function button1(){
    var veriable = document.querySelector("#p");
    veriable.innerHTML = "Button Click Paragraph";
}

function imgButton(){
    var imgSrc = document.querySelector("#imgSrc");
    imgSrc.src = "img/Bird.jpg";
}

/* hyperlink Dom */

var link = document.getElementsByTagName("a")[0];
link.innerHTML = "https://getintopc.com"


/* Event Listener */

document.querySelector("#eventListenerBtn").addEventListener("click", functionEventListener);

function functionEventListener(){
    alert("Event Listener");
}

var pEventListener = document.querySelector("#pEventListener");

pEventListener.addEventListener("mouseover", function(){
    pEventListener.classList.add("style");
});

pEventListener.addEventListener("mouseout", function(){
    pEventListener.classList.remove("style");
});


/* Handeling Error */
/* try catch finally */
/* try{
    alert("Hello People!");
    alert(x);
    alert("Welcome to Js World!");
}catch(error){
    console.log(error.message);
} */

/* throw exception */

document.querySelector("#inputButton").addEventListener("click", function(){
    var text = document.querySelector("#textInput").value;
    console.log(text);

    try{
        if(text<0){
            throw "Lower Input";
        }else if(text>10){
            throw "Greater Input";
        }else{
            throw "Invalid Input"
        }
    }catch(err){
        alert(err);
    }
})

/* for vs for each */

var arr = [20, 30, 40, 50];

/* for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
} */

arr.forEach(function(x){
console.log(x);
var sqr = Math.pow(x, 2);
console.log(sqr);
})


/* map, filter function */

var number = [10, 20, 30, 40];

var squar = number.map(function(x){
    return Math.pow(x, 2);
})
console.log(squar);

var filter = number.filter(function(x){
    return x>20;
})
console.log(filter);


/* function vs arrowFunction */

/* function add(a, b){
    return a+b;
}
console.log(add(4,4)); */

const add =(x,y) => {
    return x+y;
}

console.log(add(5,5));


var students = [
    {
        id: "101",
        name: "John",
        gpa: "3.2"
    },
    {
        id: "102",
        name: "Mary",
        gpa: "3.9"
    },
    {
        id: "103",
        name: "Joe",
        gpa: "2.3"
    }
];

function studentsName1(){
    return students.filter(function(x){
        return x.gpa > 3.0;
    }).map(function(name){
        return name.name;
    });
}

const studentName2=()=>{
    return students.filter((x)=> x.gpa<3.0).map((y)=>y.name);
}

console.log(studentsName1());
console.log(studentName2());
