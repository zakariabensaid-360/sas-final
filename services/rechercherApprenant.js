import prompt from "../utilities/prompt.js";
import FindByID from "../utilities/FindByID.js";
import FindByName from "../utilities/FindByName.js";

export default function rechercherApprenant() {
  try {
    let search = prompt("Rechercher par ID ou par nom: ");
    let result;
    if (isNaN(search)) {
      result = FindByName(search);
    } else {
      result = FindByID(search);
    }

    let DisplayInfo = {
      id: result.id,
      nomComplet: result.nomComplet,
      ville: result.ville,
    };

    let displayJours = []

    result.resultats.forEach(data => {
      displayJours.push({
        jour: data.jour,
        exercicesTermines: data.exercicesTermines,
        totalExercices: data.totalExercices,
        challengeTermine: data.challengeTermine
      })
    });
    console.table(DisplayInfo);
    console.table(displayJours)
  } catch (error) {
    console.log(error)
    return;
  }


}
