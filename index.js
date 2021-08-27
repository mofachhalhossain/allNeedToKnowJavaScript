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
document.write("Language "+students.language);