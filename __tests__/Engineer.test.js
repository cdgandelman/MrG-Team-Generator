const Engineer = require("../Libraries/Engineer.js");

describe("Engineer", ()=>{
    it("should return an object", ()=>{
        const engineer = new Engineer()
        expect(typeof engineer).toEqual("object") 
    })
    it("should return getGithub", ()=>{
        const userName="cdgandelman";
        const engineer= new Engineer("Name",1234,"email@test.com",userName);
        expect(engineer.getGithub()).toEqual(userName);
    })
    it("should return getRole", () =>{
        const engineer= new Engineer()
        expect(engineer.getRole()).toEqual("Engineer")
    })
})