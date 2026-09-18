import prompt from "./utilities/prompt.js";
import afficherTableauDeBord from "./services/afficherTableauDeBord.js";
import afficherApprenant from "./services/afficherApprenant.js";
import afficherApprenants from "./services/afficherApprenants.js";
import ajouterApprenant from "./services/ajouterApprenant.js";
import enregistrerResultat from "./services/enregistrerResultat.js";
import rechercherApprenant from "./services/rechercherApprenant.js";
import filtrerParNiveau from "./services/filtrerParNiveau.js";
import SortByProgression from "./utilities/SortByProgression.js";
import SortAlphabet from "./utilities/SortAlphabete.js";




let choix;
do {
  console.log(`
    SAS PROGRESS CONSOLE
1. Afficher le tableau de bord
2. Afficher la liste des apprenants
3. Ajouter un apprenant
4. Consulter un apprenant par identifiant
5. Ajouter ou modifier le résultat d'une journée
6. Rechercher un apprenant par nom
7. Filtrer les apprenants par niveau
8. Trier les apprenants par progression décroissante
9. Trier les apprenants par ordre alphabétique
0.     
  `);
  choix = prompt("Votre choix: ");

  switch (choix) {
    case "1":
      afficherTableauDeBord();
      break;
    case "2":
      afficherApprenants();
      break;
    case "3":
      ajouterApprenant();
      break;
    case "4":
        afficherApprenant()
      break;
    case "5":
      enregistrerResultat();
      break; // Added missing break
    case "6":
      rechercherApprenant();
      break; // Added missing break
    case "7":
      filtrerParNiveau();
      break; // Added missing break
    case "8":
      SortByProgression();
      break;
    case "9":
      SortAlphabet();
      break;
    case "0":
      console.log("see you later!");
      break;
    default:
      console.log("Choix invalide, veuillez réessayer.");
      break;
  }
} while (choix !== "0");