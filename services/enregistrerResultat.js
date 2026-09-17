import data from "../data.js";
import isUserExists from "../utilities/isUserExists.js";
import ajouterApprenant from "./ajouterApprenant.js";
import validerResultat from "../utilities/validerResultat.js";
import prompt from "../utilities/prompt.js";


export default function enregistrerResultat() {
    let id = prompt('Identifiant de lapprenant: ')
        if(isNaN(id)) {
        console.log('this input only take numbers')
        return;
    }
    if (isUserExists(id)) {
        let jour = prompt('Jour (1 à 7): ')
        if(!validerResultat(id, jour)) {
            console.log("you add the previos days first")
            return;
        }
        let exercicesTermines = prompt('Exercices terminés: ')
        let totalExercices = prompt('Total Exercices: ')
        let challengeTermine = prompt('challenge Termine (oui/non): ')
        if (challengeTermine == 'oui') {
            challengeTermine = true
        } else {
            challengeTermine = false
        }
        for (let i = 0; i < data.length; i++) {

            if (data[i].id == id) {
                data[i].resultats.push({
                    jour: Number(jour),
                    exercicesTermines: Number(exercicesTermines),
                    totalExercices: Number(totalExercices),
                    challengeTermine
                })
            }

        }
        console.dir(data, { depth: null })
    } else {
        console.log("the user u trying to modife it does not exists")
        return
    }
}