//Declare a class (Person)
//name is a property

class Person {
    constructor(fn, ln) {
      this.first_name = fn;
      this.last_name = ln;
    }

    getLastName(){
      return this.last_name + " is the last name " 
  }

  getFullName(){
    return this.first_name + " " + this.last_name + " is the full name " 
}

}



class Student extends Person {

    }


class HighSchoolStudent extends Student {

}

    const p1 = new HighSchoolStudent("Vishnu", "Suruboyina");
    console.log(p1.last_name)
    console.log(p1.getLastName())
    console.log(p1.getFullName())

//   const p1 = new Person("Vishnu", "Suruboyina");
//   console.log(p1.name + " is in " + p1.colour + " colour ")