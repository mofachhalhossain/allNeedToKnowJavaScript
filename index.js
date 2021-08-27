document.write("Hello JavaScript"); /* write html in js */
console.log("Hello"); /* console */

/* objects */

var students = {
    name: "",
    age : "",
    gender: "",
    country : ""
}

/* creating objects with constructor */

function Students(name,age,gender,country) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.country = country;
}

students = new Students();
students.name = "John Smith";
students.age = 23;
students.gender = "male";
students.country = "United States";

console.log(students);
document.write("name: "+students.name);