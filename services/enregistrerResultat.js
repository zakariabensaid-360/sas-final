import data from "../data.js";
import isUserExists from "../utilities/isUserExists.js";
import validerResultat from "../utilities/validerResultat.js";
import prompt from "../utilities/prompt.js";

export default function enregistrerResultat() {
  let id = prompt("Identifiant de lapprenant: ");
  if (isNaN(id)) {
    console.log("this input only take numbers");
    return;
  }
  if (isUserExists(id)) {
    let jour = prompt("Jour (1 à 7): ");
    try {
      validerResultat(id, jour);
    } catch (error) {
      console.log(error)
      return;
    }
    
    let exercicesTermines = prompt("Exercices terminés: ");
    if (isNaN(exercicesTermines) || Number(exercicesTermines) > 20) {
      console.log(
        "exercies termines should be a number && and it should not be more than 20",
      );
      return;
    }
    let totalExercices = prompt("Total Exercices: ");
    if (isNaN(totalExercices) || Number(totalExercices) > 20) {
      console.log(
        "total exercies termines should be a number && and it should not be more than 20",
      );
      return;
    }
    let challengeTermine = prompt("challenge Termine (oui/non): ");
    if (challengeTermine == "oui") {
      challengeTermine = true;
    } else {
      challengeTermine = false;
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        // checking if the day already exist to modife it with new data to not another one iio
        for (let j = 0; j < data[i].resultats.length; j++) {
          if (Number(jour) == data[i].resultats[j].jour) {
            data[i].resultats[j] = {
              jour: Number(jour),
              exercicesTermines: Number(exercicesTermines),
              totalExercices: Number(totalExercices),
              challengeTermine,
            };
            return;
            
          }
        }

        data[i].resultats.push({
          jour: Number(jour),
          exercicesTermines: Number(exercicesTermines),
          totalExercices: Number(totalExercices),
          challengeTermine,
        });
      }
    }
    console.dir(data, { depth: null });
  } else {
    console.log("the user u trying to modife it does not exists");
    return;
  }
}
