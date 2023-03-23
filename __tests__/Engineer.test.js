const Engineer = require("../Libraries/Engineer.js");

describe("Engineer", ()=>{
    it("should return an object", ()=>{
        const engineer = new Engineer()
        expect(typeof engineer).toEqual("object") 
    })
    it("should return getGithub", ()=>{
        const getgitHub="cdgandelman";
        const engineer= new Engineer("Name",1234,"email",getgitHub);
        expect(engineer.getgitHub).toEqual(getgitHub);
    })
    it("should return getRole", () =>{
        const engineer= new Engineer()
        expect(engineer.getRole()).toEqual("Engineer")
    })
})