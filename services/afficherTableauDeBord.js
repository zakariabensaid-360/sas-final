import data from "../data.js";
import SortByProgression from "../utilities/SortByProgression.js";
import calculerProgression from "./calculerProgression.js";

export default function afficherTableauDeBord() {
  let Solide = 0;
  let Enprogress = 0;
  let Arenforce = 0;
  let total_apprenants = data.length;
  let TotalProgression = 0;

  for (let i = 0; i < data.length; i++) {
    let calc = calculerProgression(data[i].id);
    TotalProgression += calc.progression;
    if (calc.niveau == "Solide") {
    
      Solide += 1;
    } else if (calc.niveau == "En progression") {
      Enprogress += 1;
    } else {
      Arenforce += 1;
    }
  }

  let Display = {
    "total_d’apprenants": total_apprenants,
    progression_moyenne: (TotalProgression / total_apprenants),
    Solide,
    Enprogress,
    Arenforce,
  };

  console.table(Display)
  SortByProgression()
}

