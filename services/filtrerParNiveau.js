import data from "../data.js";
import prompt from "../utilities/prompt.js";
import calculerProgression from "./calculerProgression.js";

export default function filtrerParNiveau() {
  console.log(`
        1) Solide \n
        2) En progress \n
        3) a renforce        
        
`);
  let text = prompt("votre choix: ");
  let niveau;

  if (text == "1") {
    niveau = "Solide";
  } else if (text == "2") {
    niveau = "En progression";
  } else if (text == "3") {
    niveau = "À renforcer";
  }

  let filtred_data = [];
  for (let i = 0; i < data.length; i++) {
    let calc = calculerProgression(data[i].id);
    if (calc.niveau == niveau) {
      filtred_data.push({
        id: data[i].id,
        nomComplet: data[i].nomComplet,
        niveau: calc.niveau,
        progress: calc.progression,
      });
    }
  }
  console.table(filtred_data)
  return filtred_data;
}

