import data from "../data.js";
import isUserExists from "../utilities/isUserExists.js";
import normaliserNom from "../utilities/normaliserNom.js";
import prompt from "../utilities/prompt.js";

export default function ajouterApprenant() {

  try {
    let id = prompt("Identifiant de lapprenant: ");
    if (isNaN(id)) {
      console.log("this input only take numbers");
      return;
    }
    if (isUserExists(id)) {
      console.log("the user alredy exists please chose another id");
      return;
    } else {
      let nomComplet = prompt("Apprenant Trouvé: ");
      if (nomComplet.split(' ')[1] == undefined || !isNaN(nomComplet)) {
        console.log("you should add a full name of the user && and should contain string only \n")
        return;
      }
      let ville = prompt("Donne Ville : ");
      let jour = prompt("Jour (1 à 7): ");
      if (isNaN(jour) || Number(jour) > 7 || Number(jour) <= 0) {
        console.log("the day should be a number between 1 to 7");
        return;
      }
      let exercicesTermines = prompt("Exercices Terminés: ");
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
      let Apprenant = {
        id: Number(id),
        nomComplet: normaliserNom(nomComplet),
        ville,
        resultats: [
          {
            jour: Number(jour),
            exercicesTermines: Number(exercicesTermines),
            totalExercices: Number(totalExercices),
            challengeTermine,
          },
        ],
      };

      data.push(Apprenant);
    }
  } catch (error) {
    console.log(error)
    return;
  }

}
