import data from "../data.js"

export default function SortAlphabet() {
    const sortedData = data.sort((a, b) => {
        return a.nomComplet.localeCompare(b.nomComplet);
    });
    console.table(sortedData);
    return sortedData;
}

