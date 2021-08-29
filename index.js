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

/* hyperlink */

var link = document.getElementsByTagName("a")[0];
link.innerHTML = "https://getintopc.com"

