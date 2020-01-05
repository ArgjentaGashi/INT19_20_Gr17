function Produkti(name, price) { 
    this.name = name; 
    this.price = price;
} 


var pr1 = new Produkti("Celya", "5000");
var pr2 = new Produkti("Valebeck", "2999");
var pr3 = new Produkti("Kitchen Reno", "1000");
var pr4= new Produkti("Kalani", "320");

var p= pr1.price;

function zbr20(){
    p.price= p.price - 0.2*p.price;
    return p.price;
}

pr1.price= zbr20();

w3.displayObject("zbrpr", pr1);