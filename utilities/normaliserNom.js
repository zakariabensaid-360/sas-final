export default function normaliserNom(str) {
  const cleanStr = str.replace(/[^a-zA-Z\s]/g, '').trim().toLocaleLowerCase().split(' ')
  let first = cleanStr[0][0].toLocaleUpperCase() + cleanStr[0].slice(1)
  let last = cleanStr[1][0].toLocaleUpperCase() + cleanStr[1].slice(1)

  return first + ' ' + last
}
