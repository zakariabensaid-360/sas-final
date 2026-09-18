import data from "../data.js";
import normaliserNom from "./normaliserNom.js";

export default function FindByName(name) {

name =  normaliserNom(name)

if(name == "add full name") {
    return "add full name"
}
    for (let i = 0; i < data.length; i++) {
        if(data[i].nomComplet == name)  {
            return data[i]
        } 
    }
    throw "The user is not found"
}