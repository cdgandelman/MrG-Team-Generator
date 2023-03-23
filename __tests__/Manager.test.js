const Manager = require("../Libraries/Manager.js");

describe("Manager", ()=>{
    it("should return an object", ()=>{
        const manager = new Manager()
        expect(typeof manager).toEqual("object") 
    })
    it("should return officeNumber", ()=>{
        const officeNumber= 7195555555
        const manager= new Manager("Name",1234,"email",officeNumber)
        expect(manager.officeNumber).toEqual(officeNumber)
    })
    it("should return getRole", () =>{
        const manager= new Manager()
        expect(manager.getRole()).toEqual("Manager")
    })
})