const Intern = require("../Libraries/Intern.js");

describe("Intern", ()=>{
    it("should return an object", ()=>{
        const intern = new Intern()
        expect(typeof intern).toEqual("object") 
    })
    it("should return school name", ()=>{
        const school= "DU"
        const intern= new Intern("Name",1234,"email",school)
        expect(intern.school).toEqual(school)
    })
    it("should return getRole", () =>{
        const intern= new Intern()
        expect(intern.getRole()).toEqual("Intern")
    })
})