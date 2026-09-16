import data from "../data.js";



 export default function isUserExists(id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return true
        }
    }
    return false
}