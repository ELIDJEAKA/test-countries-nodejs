// console.log(process);

var data = require("./data.js").data; //
const util = require("util");

const CommandeLine =  {

     recherche : (textSearch, countries=data) =>{
        let res = [];
        for(let country  of countries){
            for(let peo of country.people){
                peo.animals = peo.animals.filter(animal => animal.name.includes(textSearch));
            }
            country.people = country.people.filter(peop => peop.animals.length > 0 );
        }
        let dataResult = countries.filter(dt => dt.people.length > 0);
        
        return dataResult;
    },

    count : (countries=data) => {
        let newData = countries.map(country => {
                country.name += " [" + country.people.length + "]";
                country.people = country.people.map(plp => {
                    plp.name += " [" + plp.animals.length + "]" 
                    return plp;
                });
                return country;
            })
            return newData;
    }
    
};


module.exports = CommandeLine;