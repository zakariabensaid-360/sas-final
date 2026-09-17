import data from "../data.js";
import calculerProgression from "../services/calculerProgression.js";

export default function SortByProgression() {
  let new_data = [];
  for (let i = 0; i < data.length; i++) {
    let calc = calculerProgression(data[i].id);

    new_data.push({
      id: data[i].id,
      nomComplet: data[i].nomComplet,
      niveau: calc.niveau,
      progress: calc.progression,
    });
  }

  return new_data.sort((a, b) => b.progress - a.progress);
}
