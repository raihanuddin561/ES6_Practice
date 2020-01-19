function Food(name,location){
    this.name=name;
    this.location = location;
}

Food.prototype.email="food@gmail.com";

Food.prototype.hello=function(){console.log("Hello "+this.name)}

var f1 = new Food("fried rice","dhanmondi");
var f2 = new Food("Biriani","Mohammadpur");

console.log(f1);
console.log(f2);
f1.hello()
