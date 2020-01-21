function add(a,b){
    console.log((a+b)*this.c);
}
var obj1 = {
    c:3
}
var obj2 = {
    c:5
}


var binded = add.bind(obj1);
binded(1,2);

var res = add.call(obj2,4,5);

var ap = add.apply(obj1,[3,4]);

//inheritance --------------

// function Person(){
//     this.designation = "Software developer";
// }

// function Employee(){
//     Person.call(this);
//     this.name="name";
// }


// var emp = new Employee();
// emp.designation="Devloper";
// console.log(emp.name+" "+emp.designation);


//--------------------------------------

function Person(name){
    this.name = name;
}

Person.prototype.printName = function(){
    console.log("Name: "+this.name);
}

function Employee(name,designation){
    Person.call(this,name);
    this.designation=designation;
}

Employee.prototype = Object.create(Person.prototype);

var emp = new Employee("Raihan","Software Developer");
console.log(emp);
emp.printName();
