
//Declare a class
//name and colour are two properties
class Fruit{
    constructor(n, c) {
      this.name = n ;
      this.colour = c;
    }

// getInfo is a method
     getInfo(){
        return this.name + " is in " + this.colour + " colour "
    }
  }
  

// Create p1 object
  const p1 = new Fruit("apple", "pink");
  console.log(p1.name + " is in " + p1.colour + " colour ")

 
  console.log(p1.getInfo())
