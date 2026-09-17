// Sara Dev : 48 / 60 exercices, progression 80 %.  journées renseignées, 2 challenges terminés.

import FindByID from "../utilities/FindByID.js";

export default function calculerProgression(id) {
  let user = FindByID(id);
  if (typeof user === "string") return;
  let TotalExercicestermines = 0;
  let TotalExercicesproposes = 0;
  let TotalChallengestermines = 0;
  let TotalJourneesrenseignees = user.resultats.length -1;

  for (let i = 0; i < user.resultats.length; i++) {
    TotalExercicestermines += user.resultats[i].exercicesTermines;
    TotalExercicesproposes += user.resultats[i].totalExercices;
    if (user.resultats[i].challengeTermine) {
      TotalChallengestermines += 1;
    }
  }

  let progression = (TotalExercicestermines / TotalExercicesproposes) * 100
  let niveau;
  if(progression > 80) {
    niveau = "Solide"
  } else if(progression > 50 && progression < 79) {
    niveau = "En progression"
  } else if(progression < 50) {
    niveau = "À renforcer"
  }
  return {
    TotalExercicestermines,
    TotalExercicesproposes,
    TotalChallengestermines,
    TotalJourneesrenseignees,
    progression, 
    niveau
  }
}
