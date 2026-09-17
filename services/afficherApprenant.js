import data from "../data.js";
import prompt from "../utilities/prompt.js";
import calculerProgression from "./calculerProgression.js";

export default function afficherApprenant() {
    let id = prompt('Identifiant de lapprenant: ')
    let obj = {}
    for (let i = 0; i < data.length; i++) {
        if(data[i].id == Number(id)) {
           let calc = calculerProgression(Number(id))
            obj["id"] = Number(id)
            obj["nomComplet"] = data[i].nomComplet
            obj["ville"] = data[i].ville
            obj["TotalExeciesTermines"] = calc.TotalExercicestermines
            obj["leftExercices"] = calc.TotalExercicesproposes - calc.TotalExercicestermines
            obj["TotalExercicesproposes"] = calc.TotalExercicesproposes
            obj["TotalChallenges"] = calc.TotalChallengestermines
            obj["jours"] = calc.TotalJourneesrenseignees
        }
    }
    console.table(obj)
}

