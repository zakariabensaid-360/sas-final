import data from "../data.js";


export default function validerResultat(id, jour) {
    let validUser;
    if(isNaN(jour)) {
        console.log("the day inpute should be number only")
        return;
    }
    if(jour > 7 || jour <= 0) {
        console.log("cannot add more than 7 days")
        return;
    }

    for (let i = 0; i < data.length; i++) {
        if(data[i].id == id) {
            validUser = data[i]
        }       
    }

    
}