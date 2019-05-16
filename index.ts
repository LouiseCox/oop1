class students {
    name: string;
    age: number;
    gender: string;
    nationality: string;
  
    constructor() {
        this.gender = "female"
    }
    getNationality():string{
        return this.nationality
    }
}

class UnderGraduates extends students implements Iundergrad{
    batch: number;
    gpa: number;
    constructor(batch: number) {
        super();
        this.batch = batch
    }
   
}
   
interface Iundergrad{
    name: string;
    age: number;
    gender: string;
    nationality: string;
    batch: number;
    gpa: number;
}

var student1 = new UnderGraduates(2019)

student1.nationality = "Canada"
student1.getNationality()
console.log ("The nationality is " + student1.getNationality());