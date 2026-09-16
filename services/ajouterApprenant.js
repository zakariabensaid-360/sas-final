import data from "../data.js";
import isUserExists from "../utilities/isUserExists.js";
import normaliserNom from "../utilities/normaliserNom.js";
import enregistrerResultat from "./enregistrerResultat.js";
import { prompt } from "../main.js";

export default function ajouterApprenant(ids) {
    let id = prompt('Identifiant de lapprenant: ')
    if (isUserExists(id)) {
        enregistrerResultat()
    } else {

        let nomComplet = prompt('Apprenant Trouvé: ')
        let ville = prompt('Donne Ville : ')
        let jour = prompt('Jour (1 à 7): ')
        let exercicesTermines = prompt('Exercices Terminés: ')
        let totalExercices = prompt('Total Exercices: ')
        let challengeTermine = prompt('challenge Termine (oui/non): ')
        if (challengeTermine == 'oui') {
            challengeTermine = true
        } else {
            challengeTermine = false
        }
        let Apprenant = {
            id: Number(id),
            nomComplet: normaliserNom(nomComplet),
            ville,
            resultats: [
                {
                    jour: Number(jour), exercicesTermines: Number(exercicesTermines),
                    totalExercices: Number(totalExercices), challengeTermine
                }
            ]
        }

        data.push(Apprenant)
    }

}


ajouterApprenant()