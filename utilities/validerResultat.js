import data from "../data.js";


export default function validerResultat(id, jour) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].id == id) {
            if(data[i].resultats[data[i].resultats.length - 1].jour + 1 == jour) {
                return true
            } else {
                return false
            }
        }       
    }
}