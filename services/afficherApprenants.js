import data from "../data.js";
import calculerProgression from "./calculerProgression.js";

export default function afficherApprenants() {
  let apprenants = [];
  for (let i = 0; i < data.length; i++) {
     let obj = {};
    let calc = calculerProgression(Number(data[i].id));
    obj["id"] = Number(data[i].id);
    obj["nomComplet"] = data[i].nomComplet;
    obj["ville"] = data[i].ville;
    obj["TotalExeciesTermines"] = calc.TotalExercicestermines;
    obj["leftExercices"] =
      calc.TotalExercicesproposes - calc.TotalExercicestermines;
    obj["TotalExercicesproposes"] = calc.TotalExercicesproposes;
    obj["TotalChallenges"] = calc.TotalChallengestermines;
    obj["jours"] = calc.TotalJourneesrenseignees;
    apprenants.push(obj)
  }
  console.table(apprenants);
}

