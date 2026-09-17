import prompt from "../utilities/prompt.js";
import FindByID from "../utilities/FindByID.js";
import FindByName from "../utilities/FindByName.js";


export default function rechercherApprenant() {
    let search = prompt('Rechercher par ID ou par nom: ')
    let result;
    if(isNaN(search)) {
     result =   FindByName(search)
    } else {
     result =   FindByID(search)
    }

    console.dir(result, {depth: null})
}

