export default function normaliserNom(str) {
  if (str.split(" ")[1] == undefined || !isNaN(str)) {

    throw "you should add a full name of the user && and should contain string only ss\n"

  }
  const cleanStr = str
    .replace(/[^a-zA-Z\s]/g, "")
    .trim()
    .toLocaleLowerCase()
    .split(" ");
  let first = cleanStr[0][0].toLocaleUpperCase() + cleanStr[0].slice(1);
  let last = cleanStr[1][0].toLocaleUpperCase() + cleanStr[1].slice(1);

  return first + " " + last;
}
