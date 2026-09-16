import data from "../data.js";
import isUserExists from "../utilities/isUserExists.js";
import ajouterApprenant from "./ajouterApprenant.js";
import { prompt } from "../main.js";


export default function enregistrerResultat() {
    let id = prompt('Identifiant de lapprenant: ')
    if (isUserExists(id)) {
        let jour = prompt('Jour (1 à 7): ')
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
        ajouterApprenant()
    }
}