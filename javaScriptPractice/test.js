var Person = function(name,address){
    this.name = name;
    this.address = address;
}

var p1 = new Person("Raihan","Narsingdi");
var p2 = new Person("rana","Dhaka");

var people = [p1,p2];

people.forEach(function(p){
    
console.log(p.name)
console.log(p.address);
})
console.log(people);


var book = {
    name : "Samir",
    print : function(){
       setTimeout(function(){
           console.log(this.name)
       }.bind(this),2000);
    }
}

book.print()


var math = {
     value : 5
}

function add(num){
    var result = this.value + num;
    console.log(result);
}

var binded = add.bind(math);
binded(6);

