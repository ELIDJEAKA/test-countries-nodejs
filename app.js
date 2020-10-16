const util = require("util");
const cmd = require('./cmd');

// helper function to print object in console
const logObject   = (textToPrint) =>{
    console.log(util.inspect(textToPrint, false, null, true ));
}

console.log(cmd);
if (process.argv[2]=='--count'){ // Vérfie si la commande saisie est '--count'

    console.log("count");
    const count = cmd.count();
    logObject(count);
    
}else if(process.argv[2].includes("--filter=")){ // Vérifie si la commande saisie est '--filter='
    
    let filter = process.argv[2].split('=')[1] // Récupération du mot à filtrer 
    const resultFilter = cmd.recherche(filter);
    logObject(resultFilter);
}else{
    console.log("Commande non reconnue")
};