const Employee = require("../Libraries/Employee");

describe("Employee", ()=>{
    it("should return an object", ()=>{
        const employee = new Employee()
        expect(typeof employee).toEqual("object") 
    })
    it("should return name", ()=>{
        const name= "Jake"
        const employee= new Employee(name)
        expect(employee.name).toEqual(name)
    })
    it("Should return id", () =>{
        const id = 1234
        const employee= new Employee("Jake", id)
        expect(employee.id).toEqual(id)
    })
    it("should return email", () =>{
        const email= "some@email.com"
        const employee= new Employee("Jake",1234, email)
        expect(employee.email).toEqual(email)
    })
    it("should return name from getName", ()=>{
        const name = "Chad"
        const employee = new Employee(name)
        expect(employee.getName()).toEqual(name)

    })
    it("Should return getid", () =>{
        const id = 1234
        const employee= new Employee("Jake", id)
        expect(employee.getId()).toEqual(id)
    })
    it("should return getEmail", () =>{
        const email= "some@email.com"
        const employee= new Employee("Jake",1234, email)
        expect(employee.getEmail()).toEqual(email)
    })
    it("should return getRole", () =>{
        const employee= new Employee()
        expect(employee.getRole()).toEqual("Employee")
    })
})