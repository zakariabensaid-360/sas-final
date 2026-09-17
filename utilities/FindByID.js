import data from "../data.js";

export default function FindByID(id) {
    for (let i = 0; i < data.length; i++) {
        if(data[i].id == id)  {
            return data[i]
        } 
    }
    return "The user is not found"
}