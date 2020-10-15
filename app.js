// 1- import des diffeerents modules externes
let data = require("./data")

// 2- exécution du script 

if (process.argv[2]=='--count'){ // Vérfie si la commande saisie est '--count'

    console.log("count")
}else if(process.argv[2].includes("--filter=")){ // Vérfie si la commande saisie est '--filter='

    let filter = process.argv[2].split('=')[1] // 
    
}else{
    console.log("commande non reconnu")
};