const { expect } = require('@jest/globals');
const commandeLine = require('../cmd');

const countries = [
    {
        name: "country",
        people: [{
            name: "peoplei",
            animals: [
                { name: "bird" },
                { name: "cat" }
            ]
        },
        {
            name: "ccia",
            animals:
                [{ name: "fly" }]
        }
        ]
    }
]
describe("test de la fonction de recherche", ()=>{
    let search = "cat";
    it("should call the function with the right parameter", ()=>{
        const rechercheSpy = jest.spyOn(commandeLine, 'recherche');
        commandeLine.recherche(search);

        expect(commandeLine.recherche).toBeDefined();
        expect(rechercheSpy).toHaveBeenCalledWith(search);
    });
    it("should return the good value", ()=>{
        const rechercheSpy = jest.spyOn(commandeLine, 'recherche');
        let resultCountries = [
            {
                name: "country",
                people: [{
                    name: "peoplei",
                    animals: [
                        { name: "cat" }
                    ]
                }]
            }
        ]
        const result = commandeLine.recherche(search, countries);
        expect(result).toEqual(resultCountries);
    });
    it("should be empty array when no parameter given", ()=>{
        const result = commandeLine.recherche("azerty", countries);
        expect(result).toEqual([]);
    });
});


