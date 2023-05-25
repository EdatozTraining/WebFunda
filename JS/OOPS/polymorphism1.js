// Different classes (Name_Concatenation, Addition)
// Same method name (add())
// Different definitions of methods ( ("Vishnu " + "Suruboyina"), (30 + 40) ) 
// overriding

//Declare a class
class Name_Concatenation {
    add() {
        console.log("Vishnu " + "Suruboyina")
    }

    add(a, b, c) {
        console.log("result is : ", a+b+c)
    }
}

//Declare another class
class Addition extends Name_Concatenation {


    
    add() {
        console.log(30 + 40);
    }
}

let ob = new Name_Concatenation();
let ob2 = new Addition();
ob.add();
ob.add(1,2,3);
ob2.add();
